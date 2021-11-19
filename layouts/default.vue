<!--
 * @Author: abc
 * @Date: 2021-08-16 15:01:26
 * @LastEditors: abc
 * @LastEditTime: 2021-11-19 18:54:30
 * @Description:
-->
<template>
  <div class="global">
    <el-scrollbar id="global" ref="scroll" style="height: 100%">
      <el-container class="global-screen">
        <!-- header -->
        <el-header
          class="global-header"
          :style="{ 'background-color': headerColor }"
        >
          <div id="headerTop">
            <el-row type="flex" justify="center">
              <!-- PC nav -->
              <el-col
                :sm="23"
                :lg="18"
                :md="23"
                class="hidden-sm-and-down"
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
          </div>
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
    <!--  <dialog-cookie></dialog-cookie> -->
    <show-cookie></show-cookie>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      isInUp: false,
      throttleTimer: false
    };
  },

  computed: {
    isFixed() {
      return this.$store.getters.handleIsFixed;
    }
  },
  watch: {
    /*  $route: {
      handler(val, oldval) {
        if (process.client) {
          console.log('++++++++=');
          this.$nextTick(() => {
            this.domGlobal = document.getElementById('global').firstChild;
            this.domHeaderTop = document.getElementById('headerTop');
            const wow = new WOW({
              boxClass: 'wow',
              animateClass: 'animated',
              scrollContainer: '.el-scrollbar__wrap',
              offset: -20,
              mobile: true,
              live: false
            });
            wow.init();
          });
        }
      },
      immediate: true
    } */
  },
  created() {
    const obj = { headerColor: '#274235', color: '#fff' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleChangeClass', 'subMenu--horizontal');
  },
  mounted() {},
  methods: {
    handleBackTop() {
      return this.domGlobal;
    },
    handleChange(val, oldVal) {
      this.locale = this.$i18n.messages[val];
    }
  }
};
</script>
