<template>
  <el-dialog
    :title="$t('personal.email')"
    :visible.sync="isEmail"
    width="40%"
    :before-close="handleClose"
    class="user-dialog"
    :close-on-click-modal="false"
  >
    <el-form
      ref="emailForm"
      :model="bindEmail"
      status-icon
      :rules="emailrules"
      class="user-dialog-content"
      label-width="120px"
    >
      <el-form-item :label="$t('personal.add')" prop="email">
        <el-input
          v-model="bindEmail.email"
          type="text"
          autocomplete="off"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('personal.cod')" prop="code">
        <el-input
          v-model="bindEmail.code"
          type="text"
          autocomplete="off"
          clearable
        ></el-input>
        <button
          type="button"
          :disabled="isDisabl"
          class="btn btn-primary"
          @click="handleSendCode"
        >
          {{ strCheckCode }}
        </button>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <button
        :disabled="isDisabl"
        class="btn btn-primary"
        @click="handleEmailForm('emailForm')"
      >
        {{ $t('personal.sure') }}
      </button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    isEmail: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    const validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('personal.can')));
      } else if (!reg.test(value)) {
        callback(new Error(this.$t('personal.enter')));
      } else {
        callback();
      }
    };
    const code = /^\d{4}$/;
    const validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('personal.must')));
      } else if (!code.test(value)) {
        callback(new Error(this.$t('personal.digits')));
      } else {
        callback();
      }
    };
    return {
      timer: null,
      isDisabl: false,
      strCheckCode: this.$t('personal.send'),
      bindEmail: {
        email: '',
        code: ''
      },
      emailrules: {
        email: [{ required: true, validator: validateEmail, trigger: 'blur' }],
        code: [{ required: true, validator: validateCode, trigger: 'blur' }]
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleClose() {
      this.$refs.emailForm.resetFields();
      this.$emit('close');
    },
    handleEmailForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleSendCode() {
      const sendCode = this.$t('personal.send');
      let timer = null;
      let numTime = 60;
      timer = setInterval(() => {
        if (numTime > 0) {
          //  console.log(numTime);
          this.strCheckCode = numTime + 's';
          this.isDisabl = true;
          numTime--;
        } else {
          this.strCheckCode = sendCode;
          this.isDisabl = false;
          clearInterval(timer);
        }
      }, 1000);
    }
  }
};
</script>
