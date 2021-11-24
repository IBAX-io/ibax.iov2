<template>
  <div class="global details">
    <el-scrollbar id="global" ref="scroll" style="height: 100%">
      <el-container class="global-screen">
        <!-- header -->
        <el-header class="details-header">
          <el-row type="flex" justify="center">
            <!-- PC nav -->
            <el-col
              ref="headerTop"
              :sm="23"
              :lg="18"
              :md="23"
              class="hidden-sm-and-down animated"
            >
              <new-header></new-header>
            </el-col>
            <!-- mobile nav-->
            <el-col :xs="23" class="hidden-sm-and-up">
              <m-nav-page></m-nav-page>
            </el-col>
          </el-row>
        </el-header>
        <!-- main -->
        <el-main class="global-screen-main">
          <el-row type="flex" justify="center">
            <el-col :sm="22" :lg="18" :md="20">
              <nuxt />
            </el-col>
          </el-row>
        </el-main>
        <el-footer class="footer">
          <!-- footer -->
          <el-row type="flex" justify="center">
            <el-col :sm="22" :lg="18" :md="20">
              <page-footer></page-footer>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </el-scrollbar>
    <el-backtop target=".el-scrollbar__wrap"></el-backtop>
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
      visibilityHeight: 10,
      back: false,
      isInUp: false
    };
  },
  computed: {},
  watch: {},
  created() {},
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
      this.domGlobal.addEventListener('scroll', this.handleScroll);
      const wow = new this.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        scrollContainer: '.__panel',
        offset: 0,
        mobile: true,
        live: false
      });
      // console.log(wow);
      wow.init();
    });
  },
  methods: {
    //
    handleBackTop() {
      return this.domGlobal;
    },
    //
    handleScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      // console.log(this.domGlobal);
      if (scrollTop > 300) {
        this.back = true;
      } else {
        this.back = false;
      }
      const topHeight = this.domHeaderTop.offsetTop;
      this.isFixed = scrollTop > topHeight;
      this.isInUp = scrollTop === topHeight;
    },
    handleChange(val, oldVal) {
      this.locale = this.$i18n.messages[val];
    }
  }
};
</script>
