<template>
  <el-dialog
    v-loading="emailLoading"
    element-loading-text="loading……"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
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
      <button class="btn btn-primary" @click="handleEmailForm('emailForm')">
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
    // const code = /^[A-Za-z0-9]{4}$/;
    const validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('personal.must')));
      } /* else if (!code.test(value)) {
        callback(new Error(this.$t('personal.digits')));
      } */ else {
        callback();
      }
    };
    return {
      timer: null,
      isDisabl: false,
      emailLoading: false,
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
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { email, code } = this.bindEmail;
          const param = {
            email,
            verify_code: code
          };
          const res = await this.$axios.$post('/tw/bind_email_verify', param);
          console.log(res);
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: 'success'
            });
            this.$store.dispatch('handleGetTwitterUser');
            this.$refs.emailForm.resetFields();
            this.$emit('close');
          } else {
            this.$message({
              type: 'warning',
              message: 'Email binding failed'
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleSendCode() {
      this.$refs.emailForm.validateField('email', async (emailError) => {
        console.log(emailError);
        if (!emailError) {
          this.emailLoading = true;
          const { email } = this.bindEmail;
          const param = {
            email
          };
          const res = await this.$axios.$post('/tw/bind_email_request', param);
          console.log(res);
          if (res.code === 0) {
            this.emailLoading = false;
            const sendCode = this.$t('personal.send');
            this.$message({
              showClose: true,
              duration: 5000,
              type: 'success',
              message:
                'The verification code has been sent to your email, please check it in time'
            });
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
          } else {
            this.$message({
              type: 'warning',
              message: res.message
            });
          }
        }
      });

      // const { email } = this.bindEmail;
      /*   const param = {
        email
      }; */
      //   const res = await this.$axios.$post('/tw/bind_email_request', param);
      // console.log(res);
      /*   if (res.code === 0) {
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
      } else {
        this.$message({
          type: 'warning',
          message: 'This mailbox has been bound'
        });
      } */
    }
  }
};
</script>
