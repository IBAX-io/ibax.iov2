<!--
 * @Author: abc
 * @Date: 2021-08-19 14:16:42
 * @LastEditors: abc
 * @LastEditTime: 2021-11-16 15:38:03
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
          <h6 class="title-h6">Points already: {{ statistics }}</h6>
          <div class="personal-score-text">
            <span v-if="showFollow.status"
              >{{ $t('personal.followed') }}:{{
                showFollow.followsUserName
              }}</span
            >
            <span v-else> Follow IBXA to get 2000 points </span>
            <a
              v-if="showFollow.id"
              :href="
                showFollow.status ? 'javascript:void(0);' : showFollow.link
              "
              :target="showFollow.status ? '' : '_blank'"
              class="personal-score-link"
              @click="handleIsFollow(showFollow)"
            >
              Go to follow
              <i class="el-icon-arrow-right"></i>
            </a>
          </div>
        </el-col>
      </el-row>
      <div class="personal-tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Integral task" name="first">
            <el-row type="flex" justify="center">
              <el-col :sm="22" :lg="18" :md="20">
                <div
                  v-for="item in arrTask"
                  :key="item.id"
                  class="personal-tabs-task"
                >
                  <a
                    class="personal-tabs-task-left"
                    :href="item.status ? 'javascript:void(0);' : item.link"
                    :target="item.status ? '' : '_blank'"
                    @click="handleForwardTask(item)"
                  >
                    <div>Go to retweet</div>
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
                  <div v-if="item.status" class="personal-tabs-task-show">
                    Has been pushed
                  </div>
                </div>
                <div class="personal-tabs-task-btn">
                  <button class="btn btn-primary" click="handleForwardNext">
                    See more tasks
                  </button>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="Redeem points" name="second">
            <div class="personal-tabs-points">
              <el-row type="flex" justify="center">
                <el-col :sm="22" :lg="18" :md="20">
                  <div class="personal-tabs-points-img">
                    <img
                      src="../../assets/images/login/points.png"
                      alt="points"
                    />
                  </div>
                  <p class="title-h6">The event is still in progress</p>
                  <p class="title-h6">please redeem after the event ends</p>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Points rules" name="third"
            >Points rules</el-tab-pane
          >
          <el-tab-pane label="Points record" name="fourth">
            <div class="personal-tabs-record">
              <el-row type="flex" justify="center">
                <el-col :sm="22" :lg="18" :md="20">
                  <div class="personal-tabs-record-head">
                    <div>Date</div>
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
      if (res.code === 0 && res.data) {
        this.arrTask = res.data;
        this.arrTask = this.handleReduce([...this.arrTask, ...res.data]);
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
