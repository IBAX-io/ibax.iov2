<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="22" :md="20" :lg="18">
      <div class="user-rules user-rules-mobile">
        <github-rules></github-rules>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  layout: 'newsLayouts',
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleArchiteScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('weaver')
        .getBoundingClientRect().bottom;
      if (this.numArchite <= 0) {
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
