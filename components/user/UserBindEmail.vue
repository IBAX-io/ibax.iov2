<template>
  <el-dialog
    :visible.sync="objBind.isBind"
    :width="isMobile ? '90%' : '40%'"
    :before-close="handleClose"
    :close-on-click-modal="false"
    center
    class="user-dialog"
  >
    <div slot="title" class="user-dialog-title">
      <i class="iconfont el-Success"></i>
      <span>{{ $t('personal.binging') }}</span>
    </div>
    <div class="user-dialog-bind">
      <p class="user-dialog-bind-email">{{ objBind.email }}</p>
      <p>{{ $t('personal.receive') }}</p>
      <p>{{ $t('personal.also') }}</p>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    objBind: {
      type: Object,
      default: () => {
        return {
          isBind: false,
          email: 'XXXXXXXXXXXXX@gmail.com'
        };
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleClose() {
      this.$emit('bind');
    }
  }
};
</script>
