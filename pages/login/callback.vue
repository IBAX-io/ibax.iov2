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
    //  console.log(this.$route.query);
    const query = this.$route.query;
    console.log(query);
    if (Object.prototype.hasOwnProperty.call(query, 'code')) {
      this.handleGithub(query);
    } else {
      this.handleInitTwitter(query);
    }
    // this.handleInit(query);
  },
  methods: {
    handleGithub(query) {
      const code = localStorage.getItem('code');
      const utmSource = localStorage.getItem('utmSource');
      if (query.code) {
        const obj = {
          oauthcode: query.code,
          invitecode: code || '',
          utm_source: utmSource || ''
        };
        this.handleLogin('/github_auth', obj, 'github');
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
    },
    handleInitTwitter(query) {
      const code = localStorage.getItem('code');
      const utmSource = localStorage.getItem('utmSource');
      if (query.oauth_verifier && query.oauth_token) {
        const obj = {
          oauth_verifier: query.oauth_verifier,
          oauth_token: query.oauth_token,
          invitecode: code || '',
          utm_source: utmSource || ''
        };
        this.handleLogin('/twitter/auth', obj, 'twitter');
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
    },
    async handleLogin(url, obj, str = 'twitter') {
      const res = await this.$axios.$post(url, obj);
      console.log(res);
      console.log(res.data.token);
      if (res.code === 0) {
        if (str === 'twitter') {
          localStorage.setItem('invitecode', res.data.invitecode);
          localStorage.setItem('user', str);
          this.$store
            .dispatch('handleActionsToken', res.data.token)
            .then((res) => {
              this.$router.push({ name: 'user' });
            });
        } else {
          this.$store
            .dispatch('handleActionsToken', res.data.token)
            .then((res) => {
              this.$router.push({ name: 'user-link-github' });
            });
        }
        handleTokenCookie('token', res.data.token, 365);
      } else {
        this.$router.push({ name: 'index' });
      }
    }
  }
};
</script>
