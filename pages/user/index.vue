<template>
  <div class="user-center">
    <div class="user-center-box">
      <user-follow></user-follow>
      <!-- sign in  -->
      <div class="user-center-sign">
        <!-- <div class="user-center-sign-box">
          <div class="user-center-sign-box-top">
            <div class="user-center-sign-box-time">{{ strTime }}</div>
            <div class="user-center-sign-box-text">
              {{ $t('personal.time') }}
            </div>
          </div>
          <div
            ref="sign"
            class="user-center-sign-chest"
            :class="{
              'animated tada': isTaba,
              'user-center-sign-close': !isSign,
              'user-center-sign-open': isSign
            }"
            @click="handleSign"
          ></div> -->
        <div class="user-center-sign-left" @click="handleSign">
          <div class="user-center-sign-left-img">
            <img :src="isSign ? signNo : sign" alt="sign" />
          </div>
          <div class="user-center-sign-left-text">
            <div>{{ $t('personal.getpoint') }}</div>
            <div v-if="isSign" class="user-center-sign-left-time">
              {{ strTime }}
            </div>
          </div>
        </div>
        <div class="user-center-sign-right">
          {{ $t('personal.tuned') }}
        </div>
        <div
          v-show="isBubble"
          class="user-center-sign-box-num"
          :class="{
            'animated fadeInUp': isBubble
          }"
        >
          + {{ points }}
          <!-- </div> -->
        </div>
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
            >{{ $t('personal.week') }}
            {{ money_format(statistics.weekAmount) }}</span
          >
          <i class="el-icon-arrow-right"></i>
        </nuxt-link>
      </div>
      <user-share></user-share>
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
        <p>{{ $t('personal.been') }}</p>
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
import { handleGetLang } from '../../assets/js/public';
const sign = require('../../assets/images/login/sign.png');
const signNo = require('../../assets/images/login/sign-no.png');
export default {
  props: {},
  data() {
    return {
      sign,
      signNo,
      objForward: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 1,
        type: 2
      },
      arrTask: [],
      taskTotal: 1,
      strTime: '',
      strSign: this.$t('personal.daily'),
      isSign: false,
      isTaba: false,
      nowTime: 0,
      nextCheckIn: 0,
      timerSign: null,
      isBubble: false,
      points: 0,
      statisParams: {
        language: 'en'
      }
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
  watch: {
    lang() {
      this.statisParams.language = this.lang;
      this.$store.dispatch('handleGetStatistics', this.statisParams);
    }
  },
  created() {},
  beforeDestroy() {
    clearTimeout(this.timerSign);
  },
  mounted() {
    const lang = handleGetLang();
    this.statisParams.language = lang;
    this.handleGetForward(this.objForward);
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
            this.$store.dispatch('handleGetStatistics', this.statisParams);
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
          this.strTime = `00:00:00`;
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
    async handleGetForward(params) {
      const res = await this.$axios.$post('/tw/get_activity', params);
      console.log(res);
      if (res.code === 0) {
        if (res.data.rets) {
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
          confirmButtonText: this.$t('personal.finished'),
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
                    this.$store.dispatch(
                      'handleGetStatistics',
                      this.statisParams
                    );
                    this.$message({
                      showClose: true,
                      type: 'success',
                      message: this.$t('personal.finished'),
                      onClose: () => {
                        done();
                      }
                    });
                  } else if (res.code === -415) {
                    //  done();
                    instance.confirmButtonLoading = false;
                    instance.confirmButtonText = this.$t('personal.finished');
                    this.$message({
                      showClose: true,
                      type: 'warning',
                      message: res.message
                    });
                  } else {
                    //  done();
                    instance.confirmButtonLoading = false;
                    instance.confirmButtonText = this.$t('personal.finished');
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
