<!--
 * @Author: abc
 * @Date: 2021-08-19 14:16:42
 * @LastEditors: abc
 * @LastEditTime: 2021-11-18 18:34:25
 * @Description: 
-->
<template>
  <div class="personal">
    <div class="personal-img">
      <img src="../../assets/images/login/personal.png" alt="personal" />
    </div>
    <div class="personal-score">
      <el-row type="flex" justify="center">
        <el-col :sm="22" :lg="18" :md="20">
          <h6 class="title-h6">
            <span style="margin-right: 10px">{{ $t('personal.own') }}</span
            >{{ money_format(statistics) }}
          </h6>
          <div class="personal-score-text">
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
        </el-col>
      </el-row>
      <div class="personal-tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="$t('personal.task')" name="first">
            <el-row type="flex" justify="center">
              <el-col :sm="22" :lg="18" :md="20">
                <div
                  v-for="item in arrTask"
                  :key="item.id"
                  class="personal-tabs-task"
                >
                  <div v-if="item.status" class="personal-tabs-task-finish">
                    <img
                      src="../../assets/images/login/finished.png"
                      alt="finished"
                    />
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
                      :src="`${linkBase}${item.image}`"
                      alt="task"
                      :onerror="defaultImg"
                    />
                  </div>
                </div>
                <div class="personal-tabs-task-btn">
                  <button class="btn btn-primary" @click="handleForwardNext">
                    {{ $t('footer.more') }}
                  </button>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :label="$t('personal.redeem')" name="second">
            <div class="personal-tabs-points">
              <el-row type="flex" justify="center">
                <el-col :sm="22" :lg="18" :md="20">
                  <div class="personal-tabs-points-img">
                    <img
                      src="../../assets/images/login/points.png"
                      alt="points"
                    />
                  </div>
                  <p class="title-h6">{{ $t('login.activities') }}</p>
                  <p class="title-h6">{{ $t('personal.still') }}</p>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('personal.rules')" name="third">
            <el-row type="flex" justify="center">
              <el-col :sm="22" :lg="18" :md="20">
                <div class="personal-rules">
                  <!-- box-1 -->
                  <div class="personal-rules-box">
                    <div class="personal-rules-left">
                      <h6 class="title-h7">1,000,000 IBXC Airdrop</h6>
                      <p>（Ongoing）</p>
                    </div>
                    <div class="personal-rules-right">
                      <h6 class="title-h7">
                        Dec. 1st, 2021 – Feb. 1st, 2022, Ends in 60 days
                      </h6>
                      <p>
                        1,000,000 IBXC Number of Winners 2000 + Participants
                        41,680
                      </p>
                      <p>
                        1,000,000 IBXC Number of Winners 2000 + Participants
                        41,680
                      </p>
                      <p>
                        IBAX is a blockchain-as-a-service infrastructure NETWORK
                        with a unique Metaverse NFT mining system that will be
                        the core foundation of the future Metaverse.
                      </p>
                      <h6 class="title-h7">
                        We are proud to announce the airdrop of our Testnet
                        between Dec 1st, 2021 and Feb. 1st, 2022.
                      </h6>
                      <p>
                        A total of 1,000,000 $IBXC will be airdropped to
                        participants!
                      </p>
                      <h6 class="personal-rules-right-item title-h7">
                        <span>
                          Jackpot A <br />
                          800,000 IBXC <br />
                          IBAX: Testnet Token <br />
                          IBXC: Main network Token
                        </span>
                        <span>
                          Jackpot B<br />
                          200,000 IBXC
                        </span>
                      </h6>
                      <p>
                        Participants can use IBAC to redeem IBXC after the
                        official launch of the main network.
                      </p>
                    </div>
                  </div>
                  <!-- box-2 -->
                  <div class="personal-rules-box">
                    <div class="personal-rules-left">
                      <h6 class="title-h7">How to Participate Jackpot A ？</h6>
                    </div>
                    <div class="personal-rules-right">
                      <p>
                        Starting on Dec . 1st 2021 at 15:00 GMT +8 , go to
                        Airdrop Page to join our airdrop campaign . You will be
                        able to earn IBXC by completing the different tasks
                        listed below.
                      </p>
                      <h6 class="title-h7">Jackpot B Coming next week.</h6>
                      <h6 class="personal-rules-right-item title-h7">
                        <span>
                          1 - Follow IBAX on Twitter +1000IBAX.<br />
                          2 - Join the IBAX Telegram group +1000IBA <br />
                          3 - Join the IBAX Discord channel +1000IB <br />
                        </span>
                        <span>
                          （on going）<br />
                          （on going）
                        </span>
                      </h6>
                      <p>
                        4 - Subscribe IBAX on YouTube channel +1000IBAX ( coming
                        soon)
                      </p>
                      <p>- Retweet the airdrop tweet on our Twitter</p>
                      <div>
                        (<a
                          href="https://twitter.com/IBAXNETWORK"
                          target="_blank"
                        >
                          https://twitter.com/IBAXNETWORK </a
                        >)
                      </div>
                      <p>
                        - Like & tag at least 3 of your friends. +200 each time.
                      </p>
                    </div>
                  </div>
                  <!-- box-3 -->
                  <div class="personal-rules-box">
                    <div class="personal-rules-left">
                      <h6 class="title-h7">Mainnet online rules</h6>
                    </div>
                    <div class="personal-rules-right">
                      <p>
                        Winners will receive 10% of the successfully redeemed
                        IBXC after the mainnet goes live , and the rest will be
                        automatically unlocked within 6 months after the mainnet
                        goes live or can be accelerated by staking mining.
                      </p>
                      <h6 class="title-h7">
                        Every 100 participants who collect more than 45,000
                        IBACs will generate a spot and a 50x special bonus will
                        be drawn from all users with more than 45,000 IBACs at
                        the end of the airdrop.
                      </h6>
                      <p>
                        (It’s ok if you cannot collect over 45,000IBAXs, all
                        participants have a right to share 1,000,000 IBXC tokens
                        together.)
                      </p>
                      <p>
                        Note: All bot and duplicate entries will be
                        automatically disqualified . This Event is for Real
                        Users
                      </p>
                      <h6 class="title-h7">Social Media Links:</h6>
                      <div class="personal-rules-right-link">
                        <a
                          href="https://twitter.com/IbaxNetwork"
                          target="_blank"
                        >
                          Twitter </a
                        >|
                        <a href="https://t.me/IBAXNetwork" target="_blank">
                          Telegram </a
                        >|
                        <a href="https://discord.gg/zRX6Mwafya" target="_blank">
                          Discord </a
                        >|
                        <a
                          href="https://www.youtube.com/channel/UC-oneUwzz01xaCkFTTyR0QQ/featured"
                          target="_blank"
                        >
                          YouTube Channel </a
                        >|
                        <a
                          href="https://www.linkedin.com/company/ibaxio/"
                          target="_blank"
                        >
                          LinkedIn </a
                        >|
                        <a href="https://t.me/IBAXNetwork" target="_blank">
                          Medium </a
                        >|
                        <a href="https://github.com/IBAX-io" target="_blank">
                          GitHub </a
                        >|
                        <a href="https://ibax.io" target="_blank"> Website </a>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :label="$t('personal.record')" name="fourth">
            <div class="personal-tabs-record">
              <el-row type="flex" justify="center">
                <el-col :sm="22" :lg="18" :md="20">
                  <div class="personal-tabs-record-box">
                    <div class="personal-tabs-record-head">
                      <div>Date (UTC)</div>
                      <div>Participate</div>
                      <div>Earn points</div>
                    </div>
                    <div
                      v-for="item in pointRecord"
                      :key="item.id"
                      class="personal-tabs-record-head"
                    >
                      <div class="personal-tabs-record-head-text">
                        {{ handleTimeShow(item.time) }}
                      </div>
                      <div class="personal-tabs-record-head-text">
                        <span v-if="item.type === 1">{{
                          $t('personal.followed')
                        }}</span>
                        <span v-if="item.type === 2">{{
                          $t('personal.forwarded')
                        }}</span>
                        <span v-if="item.type === 3">{{
                          $t('personal.not')
                        }}</span>
                      </div>
                      <div class="personal-tabs-record-head-text">
                        {{ item.points }}
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'newsLayouts',
  props: {},
  data() {
    return {
      activeName: 'first',
      objFollow: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 5,
        type: 1
      },
      statistics: 0,
      objForward: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 5,
        type: 2
      },
      arrTask: [],
      showFollow: {},
      pointRecord: []
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
    this.handlePointsAlready();
    this.handleGetFollow(this.objFollow);
    this.handleGetForward(this.objForward);
  },
  methods: {
    async handlePointsAlready() {
      const res = await this.$axios.$post('/tw/get_points_statistics');
      console.log(res);
      if (res.code === 0) {
        this.statistics = res.data.statistics;
      } else {
        this.statistics = 0;
      }
    },
    async handleGetFollow(params) {
      const res = await this.$axios.$post('/tw/get_activity', params);
      console.log(res);
      if (res.code === 0 && res.data) {
        this.showFollow = res.data[0];
      } else {
        this.showFollow = {};
      }
    },
    async handleGetForward(params) {
      const res = await this.$axios.$post('/tw/get_activity', params);
      console.log(res);
      if (res.code === 0) {
        if (res.data.length) {
          if (params.page === 1) {
            this.arrTask = res.data;
          } else {
            const arrTask = this.handleReduce([...this.arrTask, ...res.data]);
            this.arrTask = [...arrTask];
          }
          console.log(this.arrTask);
        } else {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        }
      } else {
        this.arrTask = [];
      }
    },
    handleForwardNext() {
      this.objForward.page = ++this.objForward.page;
      this.handleGetForward(this.objForward);
    },
    async handleGetUser() {
      const res = await this.$axios.$post('/tw/getuser');
      if (res.code === 0) {
        this.$store.commit('handleUserInfo', res.data);
      }
    },
    handleClick(tab, event) {
      if (tab.name === 'first') {
        this.objForward.page = 1;
        this.handleGetForward(this.objForward);
      } else if (tab.name === 'fourth') {
        this.handlePointRecord();
      }
      console.log(tab, event);
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
                    done();
                    instance.confirmButtonLoading = false;
                    this.handleGetFollow(this.objFollow);
                    this.handlePointsAlready();
                    this.$message({
                      type: 'success',
                      message: this.$t('personal.followed')
                    });
                  } else {
                    done();
                    instance.confirmButtonLoading = false;
                    this.$message({
                      type: 'warning',
                      message: this.$t('personal.not')
                    });
                  }
                });
              }, 5000);
              // console.log(params);
            } else {
              done();
            }
          }
        })
          .then((action) => {})
          .catch((action) => {});
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
                    done();
                    instance.confirmButtonLoading = false;
                    this.objForward.page = 1;
                    this.handleGetForward(this.objForward);
                    this.handlePointsAlready();
                    this.$message({
                      type: 'success',
                      message: this.$t('personal.forwarded')
                    });
                  } else {
                    done();
                    instance.confirmButtonLoading = false;
                    this.$message({
                      type: 'warning',
                      message: this.$t('personal.notf')
                    });
                  }
                });
              }, 5000);
            } else {
              done();
            }
          }
        })
          .then((action) => {})
          .catch((action) => {});
      }
    },
    async handlePointRecord() {
      const res = await this.$axios.$post('/tw/get_points_record');
      console.log(res);
      if (res.code === 0 && res.data) {
        this.pointRecord = res.data;
      } else {
        this.pointRecord = 0;
      }
    },
    handleTimeShow(millisecond) {
      return this.dayjs.utc(parseInt(millisecond)).format('LLL');
    }
  }
};
</script>
