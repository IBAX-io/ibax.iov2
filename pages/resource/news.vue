<!--
 * @Author: abc
 * @Date: 2021-09-14 15:28:49
 * @LastEditors: abc
 * @LastEditTime: 2021-09-22 12:26:02
 * @Description: 
-->
<template>
  <nuxt />
</template>
<script>
export default {
  layout: 'newsLayouts',
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
    const obj = { headerColor: '#fff', color: '#37383c' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleChangeClass', 'news--horizontal');
    this.$store.commit('handleIsTop', false);
  },
  mounted() {},
  methods: {}
};
</script>
