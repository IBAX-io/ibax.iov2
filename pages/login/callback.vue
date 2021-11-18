<!--
 * @Author: abc
 * @Date: 2021-11-11 09:54:01
 * @LastEditors: abc
 * @LastEditTime: 2021-11-18 18:16:45
 * @Description: 
-->
<template>
  <div style="color: #37383c"></div>
</template>
<script>
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
          localStorage.setItem('token', res.data.token);
          this.$store.commit('handleChangeToken', res.data.token);
          this.$router.push({ name: 'personal' });
          /*  this.$message({
            type: 'success',
            message: `token:${res.data.token}`,
            onClose: () => {
              this.$router.push({ name: 'personal' });
            }
          }); */
        } else {
          this.$message({
            type: 'error',
            message: `Login expired, please login again`,
            onClose: () => {
              this.$router.push({ name: 'login' });
            }
          });
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
