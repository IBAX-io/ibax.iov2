<template>
  <div style="color: #37383c"></div>
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
          // localStorage.setItem('token', res.data.token);
          handleTokenCookie('token', res.data.token, 1);
          this.$store
            .dispatch('handleActionsToken', res.data.token)
            .then((res) => {
              this.$router.push({ name: 'user' });
            });
        } else {
          this.$router.push({ name: 'index' });
          /*  this.$message({
            type: 'error',
            message: `Login expired, please login again`,
            onClose: () => {
              this.$router.push({ name: 'login' });
            }
          }); */
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
