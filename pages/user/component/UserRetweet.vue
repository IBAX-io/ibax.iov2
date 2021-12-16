<template>
  <el-tabs v-model="activeName" @tab-click="handleRetweet">
    <el-tab-pane :label="$t('personal.task')" name="first">
      <el-row type="flex" justify="center">
        <el-col :sm="22" :lg="18" :md="20">
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
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane :label="$t('personal.redeem')" name="second">
      <div class="personal-tabs-record">
        <el-row type="flex" justify="center">
          <el-col :sm="22" :lg="18" :md="20">
            <div class="personal-redeem">
              <p>
                {{ $t('personal.will') }}
              </p>
              <p>{{ $t('personal.points') }} {{ statistics }}</p>
              <div
                v-if="binding.status && binding.blockId"
                class="personal-redeem-share-box"
              >
                <p class="personal-redeem-box-text">
                  {{ $t('personal.address') }} {{ binding.account }}
                </p>
                <p class="personal-redeem-box-text">
                  {{ $t('personal.storage') }} {{ binding.blockId }}
                </p>
                <a
                  class="btn btn-primary"
                  :href="`https://scan.ibax.io/transaction/${binding.hash}`"
                  target="_blank"
                >
                  <span>{{ $t('personal.view') }}</span>
                  <i class="el-icon-right"></i>
                </a>
              </div>
              <div v-else class="personal-redeem-box">
                <p class="personal-redeem-box-text">
                  {{ $t('personal.once') }}
                </p>
                <div class="personal-redeem-content">
                  <el-input
                    v-model="address"
                    :disabled="binding.status"
                    :placeholder="$t('personal.your')"
                  ></el-input>
                  <div>
                    <button
                      class="btn btn-primary"
                      :disabled="binding.status"
                      @click="handleAdress"
                    >
                      {{ $t('personal.submit') }}
                    </button>
                  </div>
                  <a
                    class="home-new-bottom link"
                    href="https://weaver.ibax.io/"
                    target="_blank"
                  >
                    <span>{{ $t('personal.werver') }}</span>
                    <i class="el-icon-right"></i>
                  </a>
                </div>
              </div>
              <div
                id="widthVideo"
                ref="widthVideo"
                class="personal-redeem-vidoe"
              >
                <h6 class="title-h6">
                  {{ $t('personal.how') }}
                </h6>
                <client-only>
                  <youtube
                    ref="introduce"
                    :resize="isResize"
                    :fit-parent="isResize"
                    :player-vars="playerVars"
                    video-id="kOWd-uIGwa4"
                    @ended="videoEndedIntroduce"
                    @error="videoErrorIntroduce"
                  ></youtube>
                </client-only>
              </div>
            </div>
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
              <img src="@/assets/images/login/no-data.png" alt="no-data" />
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
                  <span v-if="item.type === 3">{{ $t('personal.not') }}</span>
                </div>
                <div class="personal-tabs-record-head-text">
                  {{ item.points }}
                </div>
              </div>
            </div>
            <div v-if="pointRecord.length !== 0" class="personal-tabs-task-btn">
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
                width="400"
                hide-on-single-page
                :page-size="objRocrad.limit"
                layout="prev, pager, next"
                :total="recordTotal"
                @current-change="handleCurrentChange($event, 'record')"
              >
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  layout: 'newsLayouts',
  props: {
    statistics: {
      type: Number,
      default: () => 0
    },
    binding: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isOpen: false,
      isResize: true,
      isIntroduce: false,
      isSourceview: false,
      address: '',
      playerVars: {},
      activeName: 'first',
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
        'this.src="' +
        require('../../../assets/images/login/task-error.png') +
        '"'
      );
    },
    playerIntroduce() {
      return this.$refs.introduce.player;
    }
  },
  watch: {
    'binding.status': {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
        console.log(this.binding);
        this.address = this.binding.account;
      },
      immediate: true
    }
  },
  created() {},
  mounted() {
    this.handleGetForward(this.objForward);
  },
  methods: {
    handleAdress() {
      const address = /^\d{4}-\d{4}-\d{4}-\d{4}-\d{4}$/;
      if (address.test(this.address)) {
        const h = this.$createElement;
        this.$msgbox({
          title: '',
          message: h('p', null, [
            h(
              'span',
              null,
              this.$t('personal.submitted', { address: this.address })
            )
          ]),
          showCancelButton: true,
          distinguishCancelAndClose: true,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          center: true,
          confirmButtonClass: 'link-btn',
          confirmButtonText: this.$t('personal.submit'),
          cancelButtonText: this.$t('personal.cancel'),
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              const params = {
                keyId: this.address
              };
              // console.log(params);
              this.$axios.$post('/tw/save_key', params).then((res) => {
                // console.log(res);
                if (res.code === 0) {
                  instance.confirmButtonLoading = false;
                  instance.confirmButtonText = this.$t('personal.submit');
                  this.$emit('coins');
                  this.$message({
                    showClose: true,
                    type: 'success',
                    message: res.message,
                    onClose: () => {
                      done();
                    }
                  });
                } else {
                  done();
                  instance.confirmButtonLoading = false;
                  instance.confirmButtonText = this.$t('personal.submit');
                  this.$message({
                    showClose: true,
                    type: 'warning',
                    message: res.message
                  });
                }
              });
            } else {
              done();
            }
          }
        })
          .then((action) => {})
          .catch((action) => {});
      } else {
        this.$message({
          showClose: true,
          type: 'warning',
          message: 'Please enter the correct wallet address'
        });
      }
    },
    videoEndedIntroduce() {
      this.playerIntroduce.playVideo();
    },
    videoErrorIntroduce() {
      this.isIntroduce = false;
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
    async handleGetUser() {
      const res = await this.$axios.$post('/tw/getuser');
      if (res.code === 0) {
        this.$store.commit('handleUserInfo', res.data);
      }
    },
    handleRetweet(tab, event) {
      if (tab.name === 'first') {
        this.objForward.page = 1;
        this.handleGetForward(this.objForward);
      } else if (tab.name === 'fourth') {
        this.objRocrad.page = 1;
        this.handlePointRecord(this.objRocrad);
      } else if (tab.name === 'second') {
        //   this.address = '';
        this.$emit('coins');
        //  console.log(this.playerIntroduce);
        // this.playerIntroduce.playVideo();
      }
      // console.log(tab, event);
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
                    this.$emit('points');
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
