<!--
 * @Author: abc
 * @Date: 2021-08-19 14:16:01
 * @LastEditors: abc
 * @LastEditTime: 2021-11-18 16:53:56
 * @Description: 
-->
<template>
  <div class="login">
    <h6 class="title-h6">{{ $t('login.test') }}</h6>
    <p class="login-text">
      {{ $t('login.event') }}
    </p>
    <button class="login-btn" @click="handleLogin">
      <i class="iconfont el-twitter"></i>
      <span>{{ $t('login.with') }}</span>
    </button>
    <p class="login-rules" @click="handleRules">{{ $t('personal.rules') }}</p>
  </div>
</template>
<script>
// import { handleGetToken } from '../../assets/js/public';
export default {
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
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      this.$router.push('/');
    }
  },
  methods: {
    handleRules() {
      this.$router.push({ name: 'login-rules' });
    },
    async handleLogin() {
      const res = await this.$axios.$get('/twitter/redirect');
      console.log(res);
      if (res.code === 0) {
        window.location.href = res.data.url;
      } else {
        this.$message({
          type: 'warning',
          message: 'The request failed. Please handle it later'
        });
      }
    }
  }
};
</script>
