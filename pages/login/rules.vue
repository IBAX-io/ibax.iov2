<template>
  <div id="rules" class="personal">
    <div class="personal-score">
      <el-row type="flex" justify="center">
        <el-col :sm="22" :lg="18" :md="20">
          <div class="personal-box-rules">
            <points-rules></points-rules>
          </div>
        </el-col>
      </el-row>
    </div>
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
      title: `Rule | IBAX Network`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'IBAX Network,rule,airdrop,activity'
        },
        {
          hid: 'description',
          name: 'description',
          content: `IBXC will be airdropped to participants`
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
          content: `Rule | IBAX Network`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `IBXC will be airdropped to participants`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Rule | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `IBXC will be airdropped to participants`
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.domGlobal.addEventListener('scroll', this.handleRulesScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleRulesScroll, true);
  },
  methods: {
    handleRulesScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numRules = document
        .getElementById('rules')
        .getBoundingClientRect().top;
      if (this.numRules <= 0) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      }
    }
  }
};
</script>
