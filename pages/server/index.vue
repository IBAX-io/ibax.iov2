<!--
 * @Author: abc
 * @Date: 2021-10-15 11:56:46
 * @LastEditors: abc
 * @LastEditTime: 2021-10-15 11:58:27
 * @Description: server
-->
<template>
  <div></div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to);
    if (to.name === 'server')
      next({
        path: '/server/privacy-policy'
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
