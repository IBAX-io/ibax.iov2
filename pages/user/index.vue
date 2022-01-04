<template>
  <div class="user-center">
    <div class="user-center-box">
      <user-follow></user-follow>
      <div class="user-center-share user-center-share-mobile">
        <div class="user-center-share-left user-center-share-left-mobile">
          <img
            src="@/assets/images/login/share.png"
            alt="share"
            class="user-center-share-img"
          />
          <span class="user-center-share-text">{{
            $t('personal.invites')
          }}</span>
        </div>
        <nuxt-link :to="{ name: 'user-share' }">
          <span>{{ $t('personal.week') }} +1</span>
          <i class="el-icon-arrow-right"></i>
        </nuxt-link>
      </div>
      <div class="user-center-share">
        <div class="user-center-share-box">
          <div class="user-center-share-left" @click="handleCopy">
            <img
              src="@/assets/images/login/share-1.png"
              alt="share-1"
              class="user-center-share-left-img"
            />
            <span class="user-center-share-left-text">{{
              $t('personal.link')
            }}</span>
          </div>
          <div class="user-center-share-left" @click="handleCode">
            <img
              src="@/assets/images/login/share-2.png"
              alt="share-1"
              class="user-center-share-left-img"
            />
            <span class="user-center-share-left-text">{{
              $t('personal.shareOn')
            }}</span>
          </div>
          <div class="user-center-share-left" @click="handleShare">
            <img
              src="@/assets/images/login/share-3.png"
              alt="share-1"
              class="user-center-share-left-img"
            />
            <span class="user-center-share-left-text">{{
              $t('personal.qr')
            }}</span>
          </div>
          <!-- share link -->
          <div
            v-show="isCode"
            class="personal-code-left-qr"
            @click="handleCodeConfirm"
          >
            <div class="shareon" :data-url="strURL">
              <a class="twitter"></a>
              <a class="telegram"></a>
              <a class="facebook"></a>
              <a class="linkedin"></a>
              <a class="reddit"></a>
            </div>
          </div>
          <!-- share code -->
          <div style="display: none">
            <client-only>
              <vue-qr
                ref="qrCodeUrl"
                :logo-src="logoSrc"
                :size="150"
                :logo-scale="logoScale"
                :auto-color="true"
                :dot-scale="1"
                :text="strURL"
                style="height: 200px; width: 200px; border-radius: 12px"
                background-color="#274235"
                background-dimming="#274235"
                color-dark="#274235"
                :margin="margin"
                :callback="handleCodeqr"
              />
            </client-only>
          </div>
        </div>
        <a
          class="user-center-share-telegram"
          href="https://t.me/IBAXNetwork"
          target="_blank"
        >
          <img src="@/assets/images/login/tg.png" alt="telegram" />
        </a>
      </div>
      <!-- share image -->
      <div
        v-show="isShore"
        ref="shareBox"
        class="personal-code-left-img"
        @click="handleHtml2canvas"
      >
        <img src="@/assets/images/login/back.png" alt="back" />
        <img :src="strImgUrl" alt="code" class="personal-code-left-img-small" />
      </div>
    </div>
    <div class="user-center-share">
      <div class="user-center-share-left" style="margin-bottom: 0">
        <img
          src="@/assets/images/login/all.png"
          alt="share"
          class="user-center-share-img"
        />
        <span class="user-center-share-text">{{ $t('personal.our') }}</span>
      </div>
      <nuxt-link :to="{ name: 'user-points' }">
        <span>{{ $t('personal.point') }}</span>
        <i class="el-icon-arrow-right"></i>
      </nuxt-link>
    </div>
    <div class="user-center-retweet">
      <div v-if="arrTask.length === 0" class="personal-tabs-record-img">
        <img src="@/assets/images/login/no-data.png" alt="no-data" />
      </div>
      <template v-else>
        <div v-for="item in arrTask" :key="item.id" class="personal-tabs-task">
          <div v-if="item.status" class="personal-tabs-task-finish">
            <img src="@/assets/images/login/finished.png" alt="finished" />
          </div>
          <a
            v-else
            class="personal-tabs-task-left"
            :href="item.status ? 'javascript:void(0);' : item.link"
            :target="item.status ? '' : '_blank'"
            @click="handleForwardTask(item)"
          >
            <div>{{ $t('personal.retweet') }}</div>
            <div class="personal-tabs-task-left-bottom">
              +{{ item.points }} <i class="el-icon-arrow-right"></i>
            </div>
          </a>

          <div class="personal-tabs-task-middle">
            <div v-html="item.content"></div>
          </div>
          <div class="personal-tabs-task-right">
            <img
              :src="`${baseUrl}${item.image}`"
              alt="task"
              :onerror="defaultImg"
            />
          </div>
        </div>
      </template>
    </div>
    <div class="user-center-share-left">
      <img
        src="@/assets/images/login/github.png"
        alt="share"
        class="user-center-share-img"
      />
      <span class="user-center-share-text">{{ $t('personal.git') }}</span>
    </div>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
export default {
  props: {},
  data() {
    return {
      objForward: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 5,
        type: 2
      },
      arrTask: [],
      taskTotal: 1,
      strURL: '',
      isCode: false,
      isShore: false,
      margin: 15,
      logoScale: 0.2,
      strImgUrl: '',
      logoSrc: require('../../assets/images/login/logo.png')
    };
  },
  computed: {
    defaultImg() {
      return (
        'this.src="' + require('../../assets/images/login/task-error.png') + '"'
      );
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.handleGetForward(this.objForward);
    const invitecode = localStorage.getItem('invitecode');
    this.strURL = `${this.baseUrl}/login?code=${invitecode}`;
    if (this.strURL) {
      this.shareon();
    }
  },
  methods: {
    handleCode() {
      this.isCode = !this.isCode;
      this.isShore = false;
    },
    handleCodeConfirm() {
      this.isCode = false;
    },
    handleShare() {
      this.isShore = !this.isShore;
      this.isCode = false;
    },
    handleCopy() {
      this.$copyText(this.strURL).then(
        (e) => {
          // console.log(e);
          this.$message({
            type: 'success',
            message: `Copy succeeded`
          });
          this.isShore = false;
          this.isCode = false;
        },
        (e) => {
          console.log(e);
          this.$message({
            type: 'error',
            message: `Copy failed`
          });
        }
      );
    },
    handleCodeqr(url, qid) {
      console.log(url);
      console.log(qid);
      this.strImgUrl = url;
    },
    async handleHtml2canvas() {
      this.$message({
        type: 'success',
        message: 'Downloading'
      });
      const res = await html2canvas(this.$refs.shareBox);
      console.log(res);
      console.log(res.toDataURL('image/png'));
      this.imgUrl = res.toDataURL('image/png');
      console.log(this.imgUrl);
      const a = document.createElement('a');
      a.download = 'code-share';
      a.href = this.imgUrl;
      a.dispatchEvent(new MouseEvent('click'));
      this.isShore = false;
      this.$message({
        type: 'success',
        message: 'Download complete'
      });
    },
    async handleGetForward(params) {
      const res = await this.$axios.$post('/tw/get_activity', params);
      console.log(res);
      this.arrTask = [];
      if (res.code === 0) {
        if (res.data.rets.length) {
          this.arrTask.push(res.data.rets[0]);
        } else {
          this.arrTask = [];
        }
      } else {
        this.arrTask = [];
      }
    },
    // twitter forward
    handleForwardTask(obj) {
      if (obj.status) {
        this.$message({
          type: 'success',
          message: this.$t('personal.forwarded')
        });
      } else {
        const h = this.$createElement;
        this.$msgbox({
          title: this.$t('personal.repost'),
          message: h('p', null, [h('span', null, this.$t('personal.follow'))]),
          showCancelButton: true,
          distinguishCancelAndClose: true,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          center: true,
          confirmButtonClass: 'link-btn',
          confirmButtonText: this.$t('personal.forwarded'),
          cancelButtonText: this.$t('personal.notf'),
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              const params = {
                userName: this.userInfo.username,
                tweetsId: obj.tweetsId
              };
              setTimeout(() => {
                // console.log(params);
                this.$axios.$post('/tw/getRetweets', params).then((res) => {
                  console.log(res);
                  if (res.code === 0 && res.data.status) {
                    instance.confirmButtonLoading = false;
                    this.objForward.page = 1;
                    this.handleGetForward(this.objForward);
                    this.$store.dispatch('handleGetStatistics');
                    this.$message({
                      showClose: true,
                      type: 'success',
                      message: this.$t('personal.forwarded'),
                      onClose: () => {
                        done();
                      }
                    });
                  } else {
                    //  done();
                    instance.confirmButtonLoading = false;
                    instance.confirmButtonText = this.$t('personal.forwarded');
                    this.$message({
                      showClose: true,
                      type: 'warning',
                      message: 'Please try again later'
                    });
                  }
                });
              }, 10000);
            } else {
              done();
            }
          }
        })
          .then((action) => {})
          .catch((action) => {});
      }
    }
  }
};
</script>
