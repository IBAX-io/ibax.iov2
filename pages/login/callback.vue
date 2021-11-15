<!--
 * @Author: abc
 * @Date: 2021-11-11 09:54:01
 * @LastEditors: abc
 * @LastEditTime: 2021-11-12 18:21:35
 * @Description: 
-->
<template>
  <div style="color: #37383c">Callback</div>
</template>
<script>
import { handleTokenCookie } from '../../assets/js/public';
export default {
  layout: 'callback',
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.$route.query);
    const query = this.$route.query;
    this.handleInit(query);
  },
  methods: {
    async handleInit(query) {
      if (query.oauth_verifier && query.oauth_token) {
        const obj = {
          oauth_verifier: query.oauth_verifier,
          oauth_token: query.oauth_token
        };
        const res = await this.$axios.$post('/twitter/auth', obj);
        console.log(res);
        if (res.code === 0) {
          handleTokenCookie('token', res.data.token, 1);
          this.$store.commit('handleChangeToken', res.data.token);
          this.$router.push({ name: 'login-personal' });
        } else {
          this.$router.push({ name: 'login' });
        }
      } else {
        this.$message({
          showClose: true,
          message: 'Sorry, your confirm failed.',
          type: 'warning',
          onClose: () => {
            this.$router.push({ name: 'login' });
          }
        });
      }
    }
  }
};
</script>
