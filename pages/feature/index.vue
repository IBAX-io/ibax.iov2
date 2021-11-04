<!--
 * @Author: abc
 * @Date: 2021-09-01 14:49:11
 * @LastEditors: abc
 * @LastEditTime: 2021-09-01 14:49:11
 * @Description: 
-->
<template>
  <div></div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to);
    if (to.name === 'feature')
      next({
        path: '/feature/architecture'
      });
    else next();
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
