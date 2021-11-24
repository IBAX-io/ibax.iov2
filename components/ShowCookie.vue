<template>
  <div v-show="dialogVisible" class="cookie">
    <el-row type="flex" justify="center">
      <el-col :sm="24" :lg="18" :md="20">
        <el-row
          type="flex"
          justify="space-between"
          align="middle"
          class="el-row-wrap"
        >
          <el-col :sm="22" :lg="15" :md="20">
            <div class="cookie-h4">
              <h4>Let us know you agree to cookies</h4>
              <p>We use cookies to give you the best online experience.</p>
              <p>Please let us know if you agree to all of these cookies.</p>
            </div>
          </el-col>
          <el-col :sm="22" :lg="5" :md="20">
            <div class="cookie-agree">
              <button class="btn btn-lime" @click="handleDialogVisible">
                {{ $t('server.agree') }}&nbsp;
                <span>{{ second }}s</span>
              </button>
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
    return {
      dialogVisible: false,
      second: 5,
      timer: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      if (this.isMobile) {
        this.width = '90%';
      } else {
        this.width = '40%';
      }
      const dialogVisible = localStorage.getItem('dialogVisible');
      if (dialogVisible) {
        this.dialogVisible = false;
      } else {
        this.dialogVisible = true;
        this.handleTime();
      }
    });
  },
  methods: {
    handleTime() {
      if (this.second <= 0) {
        localStorage.setItem('dialogVisible', 'no');
        this.dialogVisible = false;
        clearTimeout(this.timer);
        this.timer = null;
      } else if (this.second > 0) {
        this.second--;
        this.timer = setTimeout(() => {
          this.handleTime();
        }, 1000);
      }
    },
    handleDialogVisible() {
      this.dialogVisible = false;
      clearTimeout(this.timer);
      localStorage.setItem('dialogVisible', 'no');
    }
  }
};
</script>
