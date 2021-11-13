<!--
 * @Author: abc
 * @Date: 2021-08-19 14:16:01
 * @LastEditors: abc
 * @LastEditTime: 2021-11-11 16:26:23
 * @Description: 
-->
<template>
  <div class="login">
    <h6 class="title-h6">IBAX testnet is online</h6>
    <h6 class="title-h6">receive the airdrop via Twitter</h6>
    <p class="login-text">
      Participate in the IBAX Twitter event to earn airdrop points!
    </p>
    <button class="login-btn" @click="handleLogin">
      <i class="iconfont el-twitter"></i>
      <span>Login with Twitter</span>
    </button>
    <p class="login-rules" @click="handleRules">Points rules</p>
  </div>
</template>
<script>
// import { handleGetToken } from '../../assets/js/public';
export default {
  /*  beforeRouteEnter(to, from, next) {
    if (process.client) {
      const obj = handleGetToken();
      console.log(obj);
      if (to.name === 'login' && obj.token)
        next({
          path: '/login/personal'
        });
      else next();
    }
  }, */
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
  methods: {
    handleRules() {
      this.$router.push({ name: 'login-rules' });
    },
    async handleLogin() {
      const res = await this.$axios.$get('/twitter/redirect');
      console.log(res);
      if (res.code === 0) {
        window.location.href = res.data.url;
      }
    }
  }
};
</script>
