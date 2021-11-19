<!--
 * @Author: abc
 * @Date: 2021-11-10 15:38:57
 * @LastEditors: abc
 * @LastEditTime: 2021-11-19 14:38:28
 * @Description: 
-->
<template>
  <div id="rules" class="personal">
    <div class="personal-score">
      <el-row type="flex" justify="center">
        <el-col :sm="22" :lg="18" :md="20">
          <points-rules></points-rules>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.domGlobal.addEventListener('scroll', this.handleRulesScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleRulesScroll, true);
  },
  methods: {
    handleRulesScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numRules = document
        .getElementById('rules')
        .getBoundingClientRect().top;
      if (this.numRules <= 0) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      }
    }
  }
};
</script>
