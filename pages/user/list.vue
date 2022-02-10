<template>
  <div>
    <div class="user-commits-title">
      <div class="user-commits-title-link">
        <span class="user-commits-title-link-bull"></span>
        <span>{{ $t('personal.represent') }}</span>
        <nuxt-link
          :to="{ path: '/user/github-rules' }"
          class="user-commits-title-link-rank"
        >
          {{ $t('personal.rank') }}
        </nuxt-link>
        <i class="el-icon-right"></i>
      </div>
    </div>
    <user-rercord></user-rercord>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
