<template>
  <div class="personal">
    <div class="personal-img">
      <!-- <img src="../../assets/images/login/personal.png" alt="personal" /> -->
    </div>
    <div class="personal-score">
      <el-row type="flex" justify="center">
        <el-col :sm="22" :lg="18" :md="20">
          <div class="personal-box">
            <div class="personal-top">
              <h6 class="title-h6">
                <span v-if="isTabs" style="margin-right: 10px">{{
                  $t('personal.own')
                }}</span>
                <span v-else style="margin-right: 10px">{{
                  $t('personal.coins')
                }}</span>
                <span>{{ money_format(statistics) }}</span>
                <span v-if="!isTabs">IBXC</span>
              </h6>
              <div v-if="isTabs" class="personal-score-text">
                <a
                  v-if="showFollow.status"
                  href="https://twitter.com/IbaxNetwork"
                  target="_blank"
                  class="personal-score-text-link"
                >
                  <span class="personal-score-text-link-text"
                    >{{ $t('personal.fol') }}:</span
                  >
                  @{{ showFollow.followsUserName }}
                </a>
                <span v-else> {{ $t('personal.get') }} </span>
                <a
                  v-if="!showFollow.status"
                  :href="showFollow.link"
                  target=" _blank"
                  class="personal-score-link"
                  @click="handleIsFollow(showFollow)"
                >
                  {{ $t('personal.go') }}
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
              <div v-else class="personal-score-text">
                <span>
                  {{ $t('personal.invite') }}
                </span>
              </div>
            </div>
            <div class="personal-right">
              <button
                class="personal-right-btn"
                :class="{ 'personal-right-active': isTabs }"
                :disabled="isTabs"
                @click="handleChangetabs('retweet')"
              >
                {{ $t('personal.retweets') }}
              </button>
              <span class="personal-right-middle">/</span>
              <button
                class="personal-right-btn"
                :class="{ 'personal-right-active': !isTabs }"
                :disabled="!isTabs"
                @click="handleChangetabs('share')"
              >
                {{ $t('personal.share') }}
              </button>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- retweet -->
      <div class="personal-tabs" :class="{ 'personal-share': !isTabs }">
        <el-row type="flex" justify="center">
          <el-col :sm="22" :lg="18" :md="20" class="personal-code">
            <client-only>
              <share-left
                v-show="!isMobile && strURL"
                :data-url="strURL"
              ></share-left>
            </client-only>
            <user-retweet
              v-if="isTabs"
              :binding="objBinding"
              :statistics="statistics"
              @points="handlePoints"
              @coins="handleCoins"
            ></user-retweet>
            <!-- share -->
            <user-share
              v-if="!isTabs"
              :statistics="statistics"
              :binding="objBinding"
              @coins="handleCoins"
            ></user-share>
            <client-only>
              <share-left
                v-show="isMobile && strURL"
                :data-url="strURL"
              ></share-left>
            </client-only>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import UserRetweet from './component/UserRetweet.vue';
import UserShare from './component/UserShare.vue';
import ShareLeft from './component/ShareLeft.vue';
export default {
  components: { UserRetweet, UserShare, ShareLeft },
  layout: 'newsLayouts',
  props: {},
  data() {
    return {
      isTabs: true,
      strTabs: 'retweet',
      objFollow: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 5,
        type: 1
      },
      strURL: '',
      statistics: 0,
      showFollow: {},
      objBinding: {
        status: false,
        account: '',
        blockId: 0
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.handlePointsAlready();
    this.handleGetFollow(this.objFollow);
    const invitecode = localStorage.getItem('invitecode');
    this.strURL = `${this.baseUrl}/login?code=${invitecode}`;
    //  this.handleGetBlock();
  },
  methods: {
    async handleGetBlock() {
      const res = await this.$axios.$post('/tw/get_binding_status');
      console.log(res);
      if (res.code === 0) {
        this.objBinding = res.data;
        if (res.data.status && res.data.blockId === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: 'Pending'
          });
        }
      }
    },
    handleChangetabs(str) {
      if (str === 'retweet') {
        this.isTabs = true;
        this.strTabs = 'retweet';
        this.handlePointsAlready();
        this.handleGetFollow(this.objFollow);
      } else {
        this.isTabs = false;
        this.strTabs = 'share';
        this.handleInviteStatistics();
      }
    },
    async handlePointsAlready() {
      const res = await this.$axios.$post('/tw/get_points_statistics');
      console.log(res);
      if (res.code === 0) {
        this.statistics = res.data.statistics;
      } else {
        this.statistics = 0;
      }
    },
    async handleInviteStatistics() {
      const res = await this.$axios.$post('/tw/get_invite_statistics');
      // console.log(res);
      if (res.code === 0) {
        this.statistics = res.data.statistics;
      } else {
        this.statistics = 0;
      }
    },
    async handleGetFollow(params) {
      const res = await this.$axios.$post('/tw/get_activity', params);
      //  console.log(res);
      if (res.code === 0 && res.data.rets) {
        this.showFollow = res.data.rets[0];
      } else {
        this.showFollow = {};
      }
    },
    handlePoints() {
      this.handlePointsAlready();
    },
    handleCoins() {
      this.handleGetBlock();
    },
    // twitter Follow
    handleIsFollow(obj) {
      if (obj.status) {
        this.$message({
          type: 'success',
          message: this.$t('personal.followed')
        });
      } else {
        const h = this.$createElement;
        this.$msgbox({
          title: this.$t('personal.on'),
          customClass: 'personal-custom',
          message: h('p', null, [h('span', null, this.$t('personal.please'))]),
          showCancelButton: true,
          distinguishCancelAndClose: true,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          center: true,
          confirmButtonClass: 'link-btn',
          confirmButtonText: this.$t('personal.followed'),
          cancelButtonText: this.$t('personal.not'),
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              console.log(this.userInfo);
              const params = {
                userName: this.userInfo.username,
                followUserName: obj.followsUserName
              };
              setTimeout(() => {
                this.$axios.$post('/tw/getFollowing', params).then((res) => {
                  console.log(res);
                  if (res.code === 0 && res.data.status) {
                    // done();
                    instance.confirmButtonLoading = false;
                    this.handleGetFollow(this.objFollow);
                    this.handlePointsAlready();
                    this.$message({
                      showClose: true,
                      type: 'success',
                      message: this.$t('personal.followed'),
                      onClose: () => {
                        done();
                      }
                    });
                  } else {
                    // done();
                    instance.confirmButtonLoading = false;
                    instance.confirmButtonText = this.$t('personal.followed');
                    this.$message({
                      showClose: true,
                      type: 'warning',
                      message: 'Please try again later'
                    });
                  }
                });
              }, 10000);
              // console.log(params);
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
