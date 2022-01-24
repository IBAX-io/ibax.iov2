<template>
  <github-rules></github-rules>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      arrHonor: []
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      if (this.isMobile) {
        //  this.$refs.tableRules.style.width = '1100px';
      }
    });
  },
  methods: {}
};
</script>
