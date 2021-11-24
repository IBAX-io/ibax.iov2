<template>
  <div id="login" class="login">
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
export default {
  props: {},
  data() {
    return {};
  },
  head() {
    return {
      title: `Login | IBAX Network`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'IBAX Network,login,airdrop,activity,blockchain'
        },
        {
          hid: 'description',
          name: 'description',
          content: `IBAX Network login page`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.baseUrl}${this.$route.path}`
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: `${this.baseUrl}${this.$route.path}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Login | IBAX Network`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `IBAX Network login page`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Login | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `IBAX Network login page`
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    const obj = { headerColor: '#fff', color: '#37383c' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleChangeClass', 'news--horizontal');
    this.$store.commit('handleIsTop', false);
    this.$store.commit('handleIsFixed', false);
  },
  mounted() {
    const query = this.$route.query;
    const code = query.code || '';
    const utmSource = query.utm_source || '';
    localStorage.setItem('code', code);
    localStorage.setItem('utmSource', utmSource);
    this.domGlobal.addEventListener('scroll', this.handleLoginScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleLoginScroll, true);
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
    },
    handleLoginScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numLogin = document
        .getElementById('login')
        .getBoundingClientRect().top;
      if (this.numLogin <= 0) {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      } else {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      }
    }
  }
};
</script>
