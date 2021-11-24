<template>
  <nuxt />
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
  created() {
    const obj = { headerColor: '#fff', color: '#37383c' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleChangeClass', 'news--horizontal');
    this.$store.commit('handleIsTop', false);
  },
  mounted() {},
  methods: {}
};
</script>
