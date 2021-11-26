<template>
  <div class="personal-tabs personal-share">
    <el-row type="flex" justify="center">
      <el-col :sm="22" :lg="18" :md="20" class="personal-code">
        <share-left v-if="!isMobile"></share-left>
        <el-tabs v-model="shareName" @tab-click="handleShare">
          <el-tab-pane :label="$t('personal.ranking')" name="one">
            <el-row type="flex" justify="center">
              <el-col :sm="22" :lg="18" :md="20">
                <div
                  v-if="arrRanking.length === 0"
                  class="personal-tabs-record-img"
                >
                  <img src="@/assets/images/login/no-data.png" alt="no-data" />
                </div>
                <div v-else class="personal-share-ranking">
                  <h6 class="title-h6">As of 2022-02-01 8:00 EST</h6>
                  <div
                    v-for="(item, index) in arrRanking"
                    :key="index"
                    class="personal-share-ranking-item"
                  >
                    <div
                      v-if="(index + 1) % 2 !== 0"
                      class="personal-share-ranking-white"
                    >
                      <span
                        >{{ index + 1 }}&nbsp;&nbsp;{{ item.username }}</span
                      >
                      <span>{{ item.award }}&nbsp;&nbsp;IBXC</span>
                      <span>{{ item.number }}&nbsp;&nbsp;people</span>
                    </div>
                    <div v-else class="personal-share-ranking-gray">
                      <span
                        >{{ index + 1 }}&nbsp;&nbsp;{{ item.username }}</span
                      >
                      <span>{{ item.award }}&nbsp;&nbsp;IBXC</span>
                      <span>{{ item.number }}&nbsp;&nbsp;people</span>
                    </div>
                  </div>
                </div>
                <div>
                  {{ $t('personal.friends') }}
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :label="$t('personal.history')" name="two">
            <el-row type="flex" justify="center">
              <el-col :sm="22" :lg="18" :md="20">
                <div
                  v-if="arrHistory.length === 0"
                  class="personal-tabs-record-img"
                >
                  <img src="@/assets/images/login/no-data.png" alt="no-data" />
                </div>
                <div v-else class="personal-share-ranking">
                  <div v-if="!isMobile" class="personal-share-ranking-white">
                    <span class="personal-share-ranking-white-color"
                      >Twitter name</span
                    >
                    <span>Join Date(UTC)</span>
                    <span>Get IBXC</span>
                  </div>
                  <div v-if="!isMobile" class="personal-share-history">
                    <div
                      v-for="(item, index) in arrHistory"
                      :key="index"
                      class="personal-share-history-item"
                    >
                      <span
                        >{{ index + 1 }}&nbsp;&nbsp;{{ item.username }}</span
                      >
                      <span>{{ handleTimeShow(item.time) }}&nbsp;&nbsp;</span>
                      <span>{{ item.ibxc }}&nbsp;&nbsp;IBXC</span>
                    </div>
                  </div>
                  <div v-if="isMobile" class="personal-share-history">
                    <div
                      v-for="(item, index) in arrHistory"
                      :key="index"
                      class="personal-share-history-item"
                    >
                      <div class="personal-share-history-item-single">
                        <span class="personal-share-ranking-white-color"
                          >Twitter name:
                        </span>
                        <span>{{ item.username }}</span>
                      </div>
                      <div class="personal-share-history-item-single">
                        <span class="personal-share-ranking-white-color"
                          >Join Date(UTC):
                        </span>
                        <span>{{ handleTimeShow(item.time) }}&nbsp;&nbsp;</span>
                      </div>
                      <div class="personal-share-history-item-single">
                        <span class="personal-share-ranking-white-color"
                          >Get:
                        </span>
                        <span>{{ item.ibxc }}&nbsp;&nbsp;IBXC</span>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="arrHistory.length !== 0"
                    class="personal-tabs-task-btn"
                  >
                    <button
                      v-if="isMobile"
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
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :label="$t('personal.rule')" name="three">
            <el-row type="flex" justify="center">
              <el-col :sm="22" :lg="18" :md="20">
                <share-rules></share-rules>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :label="$t('personal.redeems')" name="four">
            <el-row type="flex" justify="center">
              <el-col :sm="22" :lg="18" :md="20">
                <div class="personal-tabs-points-img">
                  <img src="@/assets/images/login/points.png" alt="points" />
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
        <share-left v-if="isMobile"></share-left>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ShareLeft from './ShareLeft.vue';
import ShareRules from './ShareRules.vue';
export default {
  components: { ShareRules, ShareLeft },
  props: {},
  data() {
    return {
      shareName: 'one',
      arrRanking: [],
      arrHistory: [],
      objInvite: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 10
      },
      historyTotal: 1
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.handleLeaderBoard();
  },
  methods: {
    handleShare(tabs) {
      const { name } = tabs;
      if (name === 'one') {
        this.handleLeaderBoard();
      } else if (name === 'two') {
        this.objInvite.page = 1;
        this.handleInvite(this.objInvite);
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
    }
  }
};
</script>
