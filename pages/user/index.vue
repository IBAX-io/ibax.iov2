<!--
 * @Author: abc
 * @Date: 2021-08-19 14:16:42
 * @LastEditors: abc
 * @LastEditTime: 2021-11-20 18:43:10
 * @Description: personal
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
                      :src="`${baseUrl}${item.image}`"
                      alt="task"
                      :onerror="defaultImg"
                    />
                  </div>
                  <div class="personal-tabs-task-btn">
                    <button
                      v-if="isMobile"
                      class="btn btn-primary"
                      @click="handleForwardNext('task')"
                    >
                      {{ $t('footer.more') }}
                    </button>
                    <el-pagination
                      v-else
                      hide-on-single-page
                      background
                      :page-size="objForward.limit"
                      layout="prev, pager, next"
                      :total="taskTotal"
                      @current-change="handleCurrentChange($event, 'task')"
                    >
                    </el-pagination>
                  </div>
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
                <points-rules></points-rules>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :label="$t('personal.record')" name="fourth">
            <div class="personal-tabs-record">
              <el-row type="flex" justify="center">
                <el-col :sm="22" :lg="18" :md="20">
                  <div
                    v-if="pointRecord.length === 0"
                    class="personal-tabs-record-img"
                  >
                    <img
                      src="../../assets/images/login/no-data.png"
                      alt="no-data"
                    />
                  </div>
                  <div v-else class="personal-tabs-record-box">
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
                    <div class="personal-tabs-task-btn">
                      <button
                        v-if="isMobile"
                        class="btn btn-primary"
                        @click="handleForwardNext('record')"
                      >
                        {{ $t('footer.more') }}
                      </button>
                      <el-pagination
                        v-else
                        background
                        hide-on-single-page
                        :page-size="objRocrad.limit"
                        layout="prev, pager, next"
                        :total="recordTotal"
                        @current-change="handleCurrentChange($event, 'record')"
                      >
                      </el-pagination>
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
import PointsRules from '~/components/PointsRules.vue';
export default {
  components: { PointsRules },
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
      objRocrad: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 10
      },
      arrTask: [],
      showFollow: {},
      pointRecord: [],
      taskTotal: 1,
      recordTotal: 1
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
    setTimeout(() => {
      this.handlePointsAlready();
      this.handleGetFollow(this.objFollow);
      this.handleGetForward(this.objForward);
    }, 5000);
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
      //  console.log(res);
      if (res.code === 0 && res.data.rets) {
        this.showFollow = res.data.rets[0];
      } else {
        this.showFollow = {};
      }
    },
    async handleGetForward(params) {
      const res = await this.$axios.$post('/tw/get_activity', params);
      console.log(res);
      if (res.code === 0) {
        if (res.data.rets.length) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.arrTask = res.data.rets;
            } else {
              const arrTask = this.handleReduce([
                ...this.arrTask,
                ...res.data.rets
              ]);
              this.arrTask = [...arrTask];
            }
          } else {
            this.arrTask = res.data.rets;
            this.taskTotal = res.data.total;
          }
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
    handleForwardNext(str) {
      if (str === 'task') {
        this.objForward.page = ++this.objForward.page;
        this.handleGetForward(this.objForward);
      } else if (str === 'record') {
        this.objRocrad.page = ++this.objRocrad.page;
        this.handlePointRecord(this.objRocrad);
      }
    },
    handleCurrentChange($event, str) {
      if (str === 'task') {
        this.objForward.page = $event;
        this.handleGetForward(this.objForward);
      } else if (str === 'record') {
        this.objRocrad.page = $event;
        this.handlePointRecord(this.objRocrad);
      }
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
        this.objRocrad.page = 1;
        this.handlePointRecord(this.objRocrad);
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
    async handlePointRecord(params) {
      const res = await this.$axios.$post('/tw/get_points_record', params);
      // console.log(res);
      if (res.code === 0) {
        if (res.data.rets.length) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.pointRecord = res.data.rets;
            } else {
              const pointRecord = this.handleReduce([
                ...this.pointRecord,
                ...res.data.rets
              ]);
              this.pointRecord = [...pointRecord];
            }
          } else {
            this.pointRecord = res.data.rets;
            this.recordTotal = res.data.total;
          }
        } else {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        }
      } else {
        this.pointRecord = [];
      }
    },
    handleTimeShow(millisecond) {
      return this.dayjs.utc(parseInt(millisecond)).format('LLL');
    }
  }
};
</script>
