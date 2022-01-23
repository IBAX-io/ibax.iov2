<template>
  <div class="global news">
    <el-scrollbar id="global" ref="scroll" style="height: 100%">
      <el-container class="global-screen">
        <!-- header -->
        <el-header class="news-header">
          <el-row type="flex" justify="center">
            <!-- PC nav -->
            <el-col
              ref="headerTop"
              :sm="23"
              :lg="18"
              :md="23"
              class="hidden-sm-and-down animated"
              :class="{
                'global-fixed': isFixed
              }"
            >
              <div
                :class="{
                  'global-fiexd-limes': isTop,
                  'global-fixed-white': !isTop
                }"
              >
                <nav-page></nav-page>
              </div>
            </el-col>
            <!-- mobile nav-->
            <el-col
              :xs="24"
              class="hidden-sm-and-up"
              :class="{
                'global-fixed': isFixed
              }"
            >
              <div
                :class="{
                  'moblie-fiexd-limes': isTop,
                  'mobile-fixed-white': !isTop
                }"
              >
                <m-nav-page></m-nav-page>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <!-- main -->
        <el-main class="global-screen-main">
          <nuxt />
        </el-main>
        <el-footer class="footer">
          <!-- footer -->
          <el-row type="flex" justify="center">
            <el-col :sm="22" :lg="18" :md="20">
              <div ref="footer">
                <page-footer></page-footer>
              </div>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </el-scrollbar>
    <el-backtop target=".el-scrollbar__wrap"></el-backtop>
    <show-cookie></show-cookie>
  </div>
</template>
<script>
import { handleGetLang } from '../assets/js/public.js';
export default {
  props: {},
  data() {
    return {
      domGlobal: '',
      domHeaderTop: '',
      visibilityHeight: 10
    };
  },
  computed: {
    isFixed() {
      console.log(this.$store.getters.handleIsFixed);
      return this.$store.getters.handleIsFixed;
    }
  },
  watch: {},
  created() {
    const obj = { headerColor: '#fff', color: '#37383c' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleChangeClass', 'news--horizontal');
    this.$store.commit('handleIsTop', false);
    this.$store.commit('handleIsFixed', false);
  },
  mounted() {
    const val = handleGetLang();
    this.arrLang.map((item) => {
      if (val === item.lang) {
        this.strLang = item.label;
      }
    });
    this.$store.commit('handleChangeLang', val);
    this.$nextTick(() => {
      this.domGlobal = document.getElementById('global').firstChild;
      this.domHeaderTop = this.$refs.headerTop.$el;
      console.log(this.domGlobal);
      const wow = new this.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        scrollContainer: '.__panel',
        offset: 0,
        mobile: true,
        live: false
      });
      wow.init();
    });
    this.domGlobal.addEventListener('scroll', () => {
      this.handleThrottle(this.handleNewsScroll, 100);
    });
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleNewsScroll, true);
  },
  methods: {
    handleBackTop() {
      return this.domGlobal;
    },
    handleNewsScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = this.domHeaderTop.offsetTop;
      const isFixed = scrollTop > topHeight;
      // const bottom = this.$refs.footer.getBoundingClientRect();
      //  console.log(bottom);
      if (this.isMobile) {
        this.$store.commit('handleIsFixed', isFixed);
      } else {
        this.$store.commit('handleUserFixed', isFixed);
      }
    },
    handleChange(val, oldVal) {
      this.locale = this.$i18n.messages[val];
    }
  }
};
</script>
