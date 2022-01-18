<template>
  <div class="user-center">
    <div class="user-center-box">
      <user-follow></user-follow>
      <!-- sign in  -->
      <div class="user-center-sign">
        <div class="user-center-sign-left">
          <!--   <span class="user-center-sign-left-box" @click="handleSign">{{
            strSign
          }}</span> -->
          <span
            ref="sign"
            class="user-center-sign-left-chest"
            :class="{
              'animated tada': isTaba,
              'user-center-sign-left-close': !isSign,
              'user-center-sign-left-open': isSign
            }"
            @click="handleSign"
          ></span>
          <div v-if="isSign" class="user-center-sign-right">
            <div class="user-center-sign-right-time">{{ strTime }}</div>
            <div>{{ $t('personal.time') }}</div>
          </div>
          <div
            v-show="isBubble"
            class="user-center-sign-right-num"
            :class="{
              'animated fadeInUp': isBubble
            }"
          >
            + {{ points }}
          </div>
          <!--   <span>{{ $t('personal.check') }}</span> -->
        </div>
        <!--  <div v-if="isSign" class="user-center-sign-right">
          <div class="user-center-sign-right-time">{{ strTime }}</div>
          <div>{{ $t('personal.time') }}</div>
        </div> -->
      </div>
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
          <span
            >{{ $t('personal.week') }} +
            {{ money_format(statistics.weekAmount) }}</span
          >
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
    <div class="user-center-share-left" style="margin-bottom: 0">
      <i class="iconfont el-a-HonorSystem"></i>
      <span class="user-center-share-text user-center-share-left-system">{{
        $t('personal.system')
      }}</span>
    </div>
    <p class="user-center-share-left-bottom">{{ $t('personal.give') }}</p>
    <p class="user-center-share-left-color">
      <i class="iconfont el-one1"></i>
      <span>{{ $t('personal.events') }}</span>
    </p>
    <div class="user-center-share-left-link">
      <img src="@/assets/images/login/github-img.png" alt="github-img" />
      <nuxt-link
        v-if="!isMobile"
        :to="{ name: 'user-github-rules' }"
        class="btn btn-primary"
        >{{ $t('personal.views') }}
        <i class="el-icon-arrow-right"></i>
      </nuxt-link>
    </div>
    <div v-if="isMobile" class="user-center-share-left-link-mobile">
      <nuxt-link :to="{ name: 'user-github-rules' }" class="btn btn-primary"
        >{{ $t('personal.views') }}
        <i class="el-icon-arrow-right"></i>
      </nuxt-link>
    </div>
    <p class="user-center-share-left-color">
      <i class="iconfont el-two"></i>
      <span>{{ $t('personal.constructive') }}</span>
    </p>
    <p class="user-center-share-left-span">{{ $t('personal.approved') }}</p>
    <p class="user-center-share-left-span">{{ $t('personal.there') }}</p>
    <p class="user-center-share-left-color">
      <i class="iconfont el-three"></i>
      <span>{{ $t('personal.vulnerabilities') }}</span>
    </p>
    <p class="user-center-share-left-span">{{ $t('personal.blockchain') }}</p>
    <p class="user-center-share-left-span">{{ $t('personal.solutions') }}</p>
    <p class="user-center-share-left-span">{{ $t('personal.significant') }}</p>
    <p class="user-center-share-left-color">
      <i class="iconfont el-four"></i>
      <span>{{ $t('personal.issues') }}</span>
    </p>
    <p class="user-center-share-left-span">{{ $t('personal.boun') }}</p>
    <div class="user-center-share-left-btn">
      <a
        href="https://github.com/IBAX-io/go-ibax"
        target="_blank"
        class="btn btn-primary"
        >{{ $t('personal.out') }}
        <i class="el-icon-arrow-right"></i>
      </a>
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
        limit: 1,
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
      logoSrc: require('../../assets/images/login/logo.png'),
      strTime: '',
      strSign: this.$t('personal.daily'),
      isSign: false,
      isTaba: false,
      nowTime: 0,
      nextCheckIn: 0,
      timerSign: null,
      isBubble: false,
      points: 0
    };
  },
  computed: {
    defaultImg() {
      return (
        'this.src="' + require('../../assets/images/login/task-error.png') + '"'
      );
    },
    statistics() {
      return this.$store.getters.handleStatistics;
    }
  },
  watch: {},
  created() {},
  beforeDestroy() {
    clearTimeout(this.timerSign);
  },
  mounted() {
    this.$store.dispatch('handleGetStatistics');
    this.handleGetForward(this.objForward);
    const invitecode = localStorage.getItem('invitecode');
    this.strURL = `${this.baseUrl}/login?code=${invitecode}`;
    if (this.strURL) {
      this.shareon();
    }
    this.handleSignStatus();
  },
  methods: {
    handleSign() {
      if (this.isSign) {
        this.$message({
          type: 'warning',
          message: this.$t('personal.today')
        });
      } else {
        this.isTaba = true;
        setTimeout(async () => {
          this.isTaba = false;
          const res = await this.$axios.$post('/tw/check_in');
          console.log(res);
          if (res.code === 0) {
            this.points = res.data.points;
            this.isBubble = true;
            setTimeout(() => {
              this.isBubble = false;
            }, 2000);
            /* this.$message({
              type: 'success',
              message: this.$t('personal.po', { points: res.data.points })
            }); */
            this.$store.dispatch('handleGetStatistics');
            this.handleSignStatus();
          }
        }, 1000);
      }
    },

    async handleSignStatus() {
      const res = await this.$axios.$post('/tw/check_in_status');
      console.log(res);
      clearTimeout(this.timerSign);
      if (res.code === 0) {
        const { nowTime, nextCheckIn, status } = res.data;
        this.isSign = status;
        this.nowTime = nowTime;
        this.nextCheckIn = nextCheckIn;
        if (this.isSign) {
          this.strSign = this.$t('personal.today');
          this.numTime = nextCheckIn - nowTime;
          this.handleCountTime();
        } else {
          this.strSign = this.$t('personal.daily');
        }
      }
    },
    handleCountTime() {
      this.numTime--;
      // console.log(this.numTime);
      let h, m, s;
      if (this.numTime >= 0) {
        h = Math.floor((this.numTime / 60 / 60) % 24);
        m = Math.floor((this.numTime / 60) % 60);
        s = Math.floor(this.numTime % 60);
      }
      h = h >= 10 ? h : `0${h}`;
      m = m >= 10 ? m : `0${m}`;
      s = s >= 10 ? s : `0${s}`;
      this.strTime = `${h}:${m}:${s}`;
      this.timerSign = setTimeout(this.handleCountTime, 1000);
    },
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
      if (res.code === 0) {
        if (res.data.rets.length) {
          this.arrTask = res.data.rets;
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
                  } else if (res.code === -415) {
                    //  done();
                    instance.confirmButtonLoading = false;
                    instance.confirmButtonText = this.$t('personal.forwarded');
                    this.$message({
                      showClose: true,
                      type: 'warning',
                      message: res.message
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
