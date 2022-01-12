<template>
  <div class="develop">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <div class="develop-ecosytems" style="text-align: center">
            <img
              src="@/assets/images/develop-3.png"
              alt="develop-3"
              style="width: 30%"
            />
            <h2 class="title-h6">{{ $t('develope.export') }}</h2>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      activeName: 'first',
      tabPosition: 'bottom',
      count: 0,
      timer: null
    };
  },
  head() {
    return {
      title: `${this.$t('nav.development')}-IBAX`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('nav.development')} | IBAX Network`
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
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('nav.development')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,Developer,Weaver,LowCode'
        },
        {
          hid: 'description',
          name: 'description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const obj = { headerColor: '#274235', color: '#fff' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleIsTop', true);
    this.$store.commit('handleIsFixed', false);
    this.$store.commit('handleChangeClass', 'subMenu--horizontal');
    this.$nextTick(() => {
      this.domGlobal = document.getElementById('global').firstChild;
      this.domHeaderTop = document.getElementById('headerTop');
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
    this.domGlobal.addEventListener('scroll', this.handleArchiteScroll, true);
  },
  destroyed() {},
  methods: {
    handleArchiteScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      /*  this.numArchite = document
        .getElementById('weaver')
        .getBoundingClientRect().bottom;
      this.numArchiteBottom = document
        .getElementById('empower')
        .getBoundingClientRect().bottom;
      if (this.numArchite <= 0 && this.numArchiteBottom > 0) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else if (this.numArchiteBottom <= 0) {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      } else {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      } */
    }
  }
};
</script>
