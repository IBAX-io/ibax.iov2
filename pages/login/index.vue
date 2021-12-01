<template>
  <div id="login" class="login">
    <el-row type="flex" justify="center">
      <el-col :sm="24" :lg="18" :md="20">
        <el-row type="flex" justify="space-between" class="el-row-wrap">
          <el-col :xs="24" :lg="12">
            <h3 class="title-h3 wow fadeInUp">{{ $t('login.why') }}</h3>
            <p class="wow fadeInUp">{{ $t('login.build') }}</p>
            <p class="wow fadeInUp">{{ $t('login.has') }}</p>
            <p class="wow fadeInUp">{{ $t('login.welcomes') }}</p>
            <p class="wow fadeInUp login-last">{{ $t('login.team') }}</p>
          </el-col>
          <el-col :xs="24" :lg="8">
            <h6 class="title-h6 wow fadeInUp">{{ $t('login.join') }}</h6>
            <div class="login-box">
              <p class="login-text wow fadeInUp">
                {{ $t('login.online') }}
              </p>
              <button class="login-btn wow fadeInUp" @click="handleLogin">
                <i class="iconfont el-twitter"></i>
                <span>{{ $t('login.with') }}</span>
              </button>
              <p class="login-rules wow fadeInUp" @click="handleRules">
                {{ $t('personal.rules') }}
              </p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
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
    this.$nextTick(() => {
      const wow = new this.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        scrollContainer: '.el-scrollbar__wrap',
        offset: 0,
        mobile: true,
        live: false
      });
      wow.init();
    });
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
