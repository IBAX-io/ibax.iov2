<template>
  <div>
    <user-follow></user-follow>
    <div class="user-center-share-left">
      <img
        src="@/assets/images/login/all-1.png"
        alt="share"
        class="user-center-share-img"
      />
      <span class="user-center-share-text">{{ $t('personal.point') }}</span>
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
