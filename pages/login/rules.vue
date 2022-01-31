<template>
  <div id="rules" class="user-score">
    <el-row type="flex" justify="center">
      <el-col :sm="22" :lg="18" :md="20">
        <div class="personal-box-rules">
          <points-rules></points-rules>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  layout: 'newsLayouts',
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
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>
