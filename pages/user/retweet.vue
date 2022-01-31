<template>
  <div class="user-retweet">
    <div class="user-retweet-top">
      <img
        src="@/assets/images/login/all.png"
        alt="retweet"
        class="user-center-share-img"
      />
      <span class="user-center-share-text">{{ $t('personal.for') }}</span>
    </div>
    <p class="user-end">{{ $t('personal.liquidating') }}</p>
    <div class="user-retweet-flip" style="display: none">
      <client-only>
        <flip-countdown
          v-if="endTime"
          :nowline="nowTime"
          :deadline="endTime"
        ></flip-countdown>
      </client-only>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleRetweet">
      <div class="user-retweet-text">
        {{ $t('personal.tasks') }}
      </div>
      <el-tab-pane :label="$t('personal.campaign')" name="first">
        <div v-if="arrTask.length === 0" class="personal-tabs-record-img">
          <img src="@/assets/images/login/no-data.png" alt="no-data" />
        </div>
        <template v-else>
          <div
            v-for="item in arrTask"
            :key="item.id"
            class="personal-tabs-task"
          >
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
        <div v-if="arrTask.length !== 0" class="personal-tabs-task-btn">
          <button
            v-if="isMobile"
            v-show="isMore"
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
      </el-tab-pane>
      <el-tab-pane :label="$t('personal.redeemed')" name="second">
        <user-rercord v-if="activeName === 'second'"></user-rercord>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  components: {},
  layout: 'newsLayouts',
  props: {},
  data() {
    return {
      isOpen: false,
      isResize: true,
      isSourceview: false,
      address: '',
      playerVars: {},
      activeName: 'first',
      isMore: false,
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
      taskTotal: 1,
      recordTotal: 1,
      nowTime: 0,
      endTime: 0,
      timerSign: null,
      strTime: ''
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
    this.handleEndActivityTime();
  },
  beforeDestroy() {
    clearTimeout(this.timerSign);
  },
  methods: {
    async handleEndActivityTime() {
      const res = await this.$axios.$get('/end_activity_time');
      // console.log(res);
      const { nowTime, endTime } = res.data;
      this.nowTime = this.dayjs(parseInt(nowTime) * 1000).format(
        'YYYY-MM-DD HH:mm:ss'
      );
      console.log(this.nowTime);
      this.endTime = this.dayjs(parseInt(endTime) * 1000).format(
        'YYYY-MM-DD HH:mm:ss'
      );
    },
    async handleGetForward(params) {
      const res = await this.$axios.$post('/tw/get_activity', params);
      console.log(res);
      if (res.code === 0) {
        if (res.data.rets.length) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.arrTask = res.data.rets;
              this.isMore = res.data.total > res.data.rets.length;
            } else {
              const arrTask = this.handleReduce([
                ...this.arrTask,
                ...res.data.rets
              ]);
              this.arrTask = [...arrTask];
              this.isMore = res.data.total > this.arrTask;
            }
          } else {
            this.arrTask = res.data.rets;
            this.taskTotal = res.data.total;
          }
        } else if (params.page !== 1) {
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
      console.log(str);
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
    /* async handleGetUser() {
      const res = await this.$axios.$post('/tw/getuser');
      if (res.code === 0) {
        this.$store.commit('handleUserInfo', res.data);
      }
    }, */
    handleRetweet(tab, event) {
      if (tab.name === 'first') {
        this.objForward.page = 1;
        this.handleGetForward(this.objForward);
      } else if (tab.name === 'second') {
        this.objRocrad.page = 1;
        this.handlePointRecord(this.objRocrad);
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
                    //  this.objForward.page = 1;
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
        } else if (params.page !== 1) {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        }
      } else {
        this.pointRecord = [];
      }
    }
  }
};
</script>
