<template>
  <div class="user-retweet">
    <div class="user-center-box">
      <div class="user-retweet-top">
        <img
          src="@/assets/images/login/share-4.png"
          alt="retweet"
          class="user-center-share-img"
        />
        <span class="user-center-share-text">{{
          $t('personal.together')
        }}</span>
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
        style="width: 200px"
        class="personal-code-left-img"
        @click="handleHtml2canvas"
      >
        <img src="@/assets/images/login/back.png" alt="back" />
        <img
          :src="strImgUrl"
          alt="code"
          class="personal-code-left-img-small"
          style="width: 50px; left: 5px"
        />
      </div>
    </div>
    <el-tabs v-model="shareName" @tab-click="handleTabsShare">
      <div class="user-retweet-text">
        {{ $t('personal.refer') }}
      </div>
      <el-tab-pane :label="$t('personal.sharer')" name="one">
        <div v-if="arrHistory.length === 0" class="personal-tabs-record-img">
          <img src="@/assets/images/login/no-data.png" alt="no-data" />
        </div>
        <div v-else class="personal-tabs-record-box">
          <div class="personal-tabs-record-head">
            <div>{{ $t('personal.id') }}</div>
            <div>{{ $t('personal.join') }}</div>
            <div>{{ $t('personal.ge') }}</div>
          </div>
          <div
            v-for="(item, index) in arrHistory"
            :key="index"
            class="personal-tabs-record-even"
            :class="{ 'personal-tabs-record-odd': (index + 1) % 2 !== 0 }"
          >
            <div class="personal-tabs-record-head-text">
              {{ item.username }}
            </div>
            <div class="personal-tabs-record-head-text">
              {{ handleTimeShow(item.time) }}
            </div>
            <div class="personal-tabs-record-head-text">
              {{ item.ibxc }}&nbsp;&nbsp;IBXC
            </div>
          </div>
          <div v-if="arrHistory.length !== 0" class="personal-tabs-task-btn">
            <button
              v-if="isMobile"
              v-show="isMore"
              class="btn btn-primary"
              @click="handleShareNext('history')"
            >
              {{ $t('footer.more') }}
            </button>
            <el-pagination
              v-else
              background
              hide-on-single-page
              :page-size="objInvite.limit"
              layout="prev, pager, next"
              :total="historyTotal"
              @current-change="handleCurrentShare($event, 'history')"
            >
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="$t('personal.ranking')" name="two">
        <div v-if="arrRanking.length === 0" class="personal-tabs-record-img">
          <img src="@/assets/images/login/no-data.png" alt="no-data" />
        </div>
        <div v-else class="personal-share-ranking">
          <h6 class="title-h6">End Time: Feb 1st, 2022 EST</h6>
          <div
            v-for="(item, index) in arrRanking"
            :key="index"
            class="personal-tabs-record-even"
            :class="{ 'personal-tabs-record-odd': (index + 1) % 2 !== 0 }"
          >
            <div class="personal-tabs-record-head-text">
              {{ item.username }}
            </div>
            <div class="personal-tabs-record-head-text">
              {{ item.award }}&nbsp;&nbsp;IBXC
            </div>
            <div class="personal-tabs-record-head-text">
              {{ item.number }}&nbsp;&nbsp;people
            </div>
          </div>
        </div>
        <!--  <div>
          {{ $t('personal.friends') }}
        </div> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
export default {
  props: {},
  data() {
    return {
      shareName: 'one',
      arrRanking: [],
      arrHistory: [],
      isResize: true,
      playerVars: {},
      isMore: false,
      objInvite: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 10
      },
      historyTotal: 1,
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
    playerIntroduce() {
      return this.$refs.introduce.player;
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.objInvite.page = 1;
    this.handleInvite(this.objInvite);
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
    handleTabsShare(tabs) {
      const { name } = tabs;
      if (name === 'one') {
        this.objInvite.page = 1;
        this.handleInvite(this.objInvite);
      } else if (name === 'two') {
        this.handleLeaderBoard();
      }
    },
    async handleLeaderBoard() {
      const res = await this.$axios.$post('/tw/get_invite_leaderboard');
      console.log(res);
      if (res.code === 0 && res.data) {
        this.arrRanking = res.data;
      } else {
        this.arrRanking = [];
      }
    },
    async handleInvite(params) {
      const res = await this.$axios.$post('/tw/get_invite_list', params);
      console.log(JSON.stringify(res));
      if (res.code === 0) {
        if (res.data.rets.length) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.arrHistory = res.data.rets;
            } else {
              const arrHistory = this.handleReduce([
                ...this.arrHistory,
                ...res.data.rets
              ]);
              this.arrHistory = [...arrHistory];
            }
            this.isMore = res.data.total > res.data.rets.length;
          } else {
            this.arrHistory = res.data.rets;
            this.historyTotal = res.data.total;
          }
        } else if (params.page !== 1) {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        }
      } else {
        this.arrHistory = [];
      }
    },
    handleCurrentShare($event, str) {
      if (str === 'history') {
        this.objInvite.page = $event;
        this.handleInvite(this.objInvite);
      }
    },
    handleShareNext(str) {
      if (str === 'history') {
        this.objInvite.page = ++this.objInvite.page;
        this.handleInvite(this.objInvite);
      }
    },
    videoEndedIntroduce() {
      this.playerIntroduce.playVideo();
    },
    videoErrorIntroduce() {
      this.isIntroduce = false;
    }
  }
};
</script>
