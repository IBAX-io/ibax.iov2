<!--
 * @Author: abc
 * @Date: 2021-08-16 15:01:26
 * @LastEditors: abc
 * @LastEditTime: 2021-11-11 16:52:00
 * @Description:
-->
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
              <page-footer></page-footer>
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
if (process.client) {
  // eslint-disable-next-line no-var
  var { WOW } = require('wowjs');
}
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
  watch: {
    /*  $route(newVal, oldVal) {
      const { scroll } = newVal.query;
      console.log(scroll);
      if (scroll) {
        console.log(newVal);
        this.$refs.scroll.scrollTo(
          {
            y: scroll
          },
          500,
          'easeInQuad'
        );
      }
    } */
  },
  created() {
    const obj = { headerColor: '#fff', color: '#37383c' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleChangeClass', 'news--horizontal');
    this.$store.commit('handleIsTop', false);
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
      this.domGlobal.addEventListener('scroll', this.handleScroll);
      const wow = new WOW({
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
    handleBackTop() {
      return this.domGlobal;
    },
    handleScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = this.domHeaderTop.offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
    },
    handleChange(val, oldVal) {
      this.locale = this.$i18n.messages[val];
    }
  }
};
</script>
