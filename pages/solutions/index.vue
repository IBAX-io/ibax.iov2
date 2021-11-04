<!--
 * @Author: abc
 * @Date: 2021-08-19 12:30:25
 * @LastEditors: abc
 * @LastEditTime: 2021-09-01 14:46:14
 * @Description: 
-->
<template>
  <div class="solutions">solutions</div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to);
    if (to.name === 'solutions')
      next({
        path: '/solutions/supply-chain'
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
