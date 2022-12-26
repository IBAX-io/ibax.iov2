<template>
  <div
    v-loading.fullscreen.lock="emailLoading"
    class="user-receive"
    element-loading-text="loading……"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="user-commits-title">
      <div class="user-commits-title-link" style="cursor: default">
        <span class="user-commits-title-link-bull"></span>
        <span>{{ $t('personal.result') }}</span>
        <nuxt-link
          :to="{ path: '/user/finish' }"
          class="user-commits-title-link-rank"
        >
          {{ $t('personal.chec') }}
        </nuxt-link>
        <i class="el-icon-right"></i>
      </div>
    </div>
    <!--   <template >
      <div class="user-receive-status">{{ $t('personal.bind') }}</div>
        <div class="user-receive-end">
        {{ $t('personal.process') }}
      </div>
    </template> -->
    <template v-if="!binding.status && !binding.blockId">
      <!--  <div class="user-receive-status">{{ $t('personal.soon') }}</div> -->
      <!-- <div class="user-receive-end">
        {{ $t('personal.ended') }}
      </div> -->
      <div class="user-receive-top">
        <img
          src="@/assets/images/login/receive.png"
          alt="share"
          class="user-center-share-img"
        />
        <span class="user-center-share-text user-receive-top-text">{{
          $t('personal.bind')
        }}</span>
      </div>
    </template>
    <div class="user-receive-data">
      {{ $t('personal.yourCoins') }}:
      {{ money_format(statistics.reward) }}
      IBXC
    </div>
    <div class="personal-redeem">
      <div
        v-if="binding.status && binding.blockId"
        class="personal-redeem-share-box"
      >
        <div class="personal-redeem-wrap">
          <p class="personal-redeem-box-text">{{ $t('personal.notice') }}</p>
          <p>
            <span>{{ binding.email }}</span>
            <span class="personal-redeem-wrap-change" @click="handleEmail">{{
              $t('personal.chanage')
            }}</span>
          </p>
        </div>
        <div class="personal-redeem-wrap">
          <p class="personal-redeem-box-text">
            {{ $t('personal.receiveAddress') }}
          </p>
          <p>{{ binding.account }}</p>
        </div>
        <a
          class="btn btn-primary"
          :href="`${browserUrl}/blockchain/hash/${binding.hash}`"
          target="_blank"
          style="margin-bottom: 30px"
        >
          <span>{{ $t('personal.chain') }}</span>
          <i class="el-icon-right"></i>
        </a>
        <p class="personal-redeem-box-text">
          {{ $t('personal.bindsuccess') }}
        </p>
      </div>
      <div v-else class="personal-redeem-box">
        <div class="personal-redeem-content">
          <el-form
            ref="infoForm"
            :model="bindInfo"
            status-icon
            :rules="emailrules"
            class="user-dialog-content"
            label-width=""
            :label-position="isMobile ? 'top' : 'left'"
            @submit.native.prevent
          >
            <el-form-item label="" prop="email">
              <el-input
                v-model="bindInfo.email"
                type="email"
                :disabled="binding.status"
                autocomplete="off"
                clearable
                :placeholder="$t('personal.bindEmail')"
                style="width: 100%"
              >
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>
            </el-form-item>
            <div class="notes">{{ $t('personal.startEmail') }}</div>
            <el-form-item label="" prop="code" class="user-dialog-content-item">
              <el-input
                v-model="bindInfo.code"
                type="text"
                autocomplete="off"
                clearable
              >
                <i
                  slot="prefix"
                  class="el-input__icon el-icon-chat-dot-round"
                ></i>
              </el-input>
              <button
                type="button"
                :disabled="isDisabl"
                class="btn btn-primary btn-moblie"
                style="margin: 0"
                @click="handleSendCode"
              >
                {{ strCheckCode }}
              </button>
            </el-form-item>
            <el-form-item label="" prop="keyId" style="margin-top: 20px">
              <el-input
                v-model="bindInfo.keyId"
                :disabled="binding.status"
                :placeholder="$t('personal.your')"
                style="width: 100%"
              >
                <i
                  slot="prefix"
                  class="el-input__icon el-icon-delete-location"
                ></i>
              </el-input>
            </el-form-item>
            <div class="notes">{{ $t('personal.once') }}</div>
            <el-form-item style="margin-top: 50px">
              <button
                class="btn btn-primary"
                :disabled="binding.status"
                @click="handleInfoForm('infoForm')"
              >
                {{ $t('personal.submit') }}
              </button>
            </el-form-item>
          </el-form>
          <a
            class="home-new-bottom link personal-redeem-link"
            href="https://wallet.jutkey.com"
            target="_blank"
          >
            <span class="personal-redeem-link-text">{{
              $t('personal.werver')
            }}</span>
            <i class="el-icon-right"></i>
          </a>
        </div>
      </div>
      <div id="widthVideo" ref="widthVideo" class="personal-redeem-vidoe">
        <h6 class="title-h6">
          {{ $t('personal.how') }}
        </h6>
        <client-only>
          <youtube
            ref="introduce"
            :resize="isResize"
            :fit-parent="isResize"
            :player-vars="playerVars"
            video-id="MAISPQB5By0"
            @ended="videoEndedIntroduce"
            @error="videoErrorIntroduce"
          ></youtube>
        </client-only>
      </div>
    </div>
    <user-email :is-email="isEmail" @close="handleCloseEmail"></user-email>
  </div>
</template>
<script>
import { handleGetLang } from '../../assets/js/public';
import UserEmail from '../../components/user/UserEmail';
export default {
  components: {
    UserEmail
  },
  props: {},
  data() {
    //  const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    const reg =
      // eslint-disable-next-line no-useless-escape
      /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    // eslint-disable-next-line no-unused-vars
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
    const validateAddress = (rule, value, callback) => {
      const address = /^\d{4}-\d{4}-\d{4}-\d{4}-\d{4}$/;
      if (value === '') {
        return callback(new Error(this.$t('personal.inputAddress')));
      }
      if (!address.test(value)) {
        return callback(new Error(this.$t('personal.addressType')));
      }
      return callback();
    };
    return {
      isEmail: false,
      address: '',
      emailLoading: false,
      isResize: true,
      isIntroduce: false,
      isSourceview: false,
      playerVars: {},
      binding: {
        status: false,
        account: '',
        blockId: 0
      },
      statistics: {},
      timer: null,
      isDisabl: false,
      strCheckCode: this.$t('personal.send'),
      statisParams: {
        language: 'en'
      },
      bindInfo: {
        email: '',
        code: '',
        keyId: ''
      },
      emailrules: {
        email: [
          {
            required: true,
            message: this.$t('personal.can'),
            trigger: 'blur'
          },
          {
            required: true,
            type: 'email',
            message: this.$t('personal.enter'),
            trigger: ['blur', 'change']
          }
        ],
        code: [{ required: true, validator: validateCode, trigger: 'blur' }],
        keyId: [{ required: true, validator: validateAddress, trigger: 'blur' }]
      }
    };
  },
  computed: {
    playerIntroduce() {
      return this.$refs.introduce.player;
    }
    /*  statistics() {
      return this.$store.getters.handleStatistics;
    } */
  },
  watch: {
    lang() {
      this.statisParams.language = this.lang;
      this.$store.dispatch('handleGetStatistics', this.statisParams);
    }
  },
  created() {
    // this.$store.dispatch('handleGetStatistics');
  },
  mounted() {
    this.handleGetHistoryStatistics();
    this.handleGetBlock();
    const lang = handleGetLang();
    this.statisParams.language = lang;
  },
  methods: {
    handleEmail() {
      this.isEmail = true;
    },
    handleCloseEmail() {
      this.isEmail = false;
    },
    videoEndedIntroduce() {
      this.playerIntroduce.playVideo();
    },
    videoErrorIntroduce() {
      this.isIntroduce = false;
    },
    async handleGetHistoryStatistics() {
      const res = await this.$axios.$post('/tw/get_history_statistics');
      console.log(res);
      if (res.code === 0) {
        this.statistics = res.data;
      }
    },
    async handleGetBlock() {
      const res = await this.$axios.$post('/tw/get_binding_status');
      console.log(res);
      if (res.code === 0) {
        this.binding = res.data;
        if (res.data.status && res.data.blockId === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: 'Pending'
          });
        }
      }
    },
    handleInfoForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const h = this.$createElement;
          this.$msgbox({
            title: '',
            message: h('p', null, [
              h(
                'span',
                null,
                this.$t('personal.submitted', {
                  address: this.bindInfo.keyId
                })
              )
            ]),
            showCancelButton: true,
            distinguishCancelAndClose: true,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            center: true,
            confirmButtonClass: 'link-btn',
            confirmButtonText: this.$t('personal.submit'),
            cancelButtonText: this.$t('personal.cancel'),
            beforeClose: async (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = 'Loading...';
                const { email, code, keyId } = this.bindInfo;
                const params = {
                  email,
                  verify_code: code,
                  keyId
                };
                const res = await this.$axios.$post('/tw/save_key', params);
                if (res.code === 0) {
                  instance.confirmButtonLoading = false;
                  instance.confirmButtonText = this.$t('personal.submit');
                  this.handleGetBlock();
                  this.$store.dispatch(
                    'handleGetStatistics',
                    this.statisParams
                  );
                  this.$message({
                    showClose: true,
                    type: 'success',
                    message: res.message,
                    onClose: () => {
                      done();
                    }
                  });
                } else {
                  done();
                  instance.confirmButtonLoading = false;
                  instance.confirmButtonText = this.$t('personal.submit');
                  this.$message({
                    showClose: true,
                    type: 'warning',
                    message: res.message
                  });
                }
              } else {
                done();
              }
            }
          })
            .then((action) => {})
            .catch((action) => {});
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleSendCode() {
      this.$refs.infoForm.validateField('email', async (emailError) => {
        console.log(emailError);
        if (!emailError) {
          this.emailLoading = true;
          const { email } = this.bindInfo;
          const param = {
            email,
            refresh: 1
          };
          const res = await this.$axios.$post('/tw/bind_email_request', param);
          console.log(res);
          this.emailLoading = false;
          if (res.code === 0) {
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
    }
  }
};
</script>
