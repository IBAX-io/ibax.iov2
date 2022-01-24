<template>
  <div class="user-github">
    <div ref="userGithub" class="user-github-box">
      <div v-if="!isMobile" class="user-github-box-content">
        <div v-if="isGithub" class="user-github-box-link">
          <div class="user-github-box-link-btn">
            <i class="iconfont el-github"></i>
            <span>{{ $t('personal.project') }}</span>
          </div>
          <div class="user-github-box-link-text">{{ $t('personal.keep') }}</div>
          <div class="user-github-box-link-btn user-github-box-link-btn-box">
            <a
              class="user-github-box-link-git"
              :href="objStar.link"
              :target="objStar.target"
              :style="{
                backgroundColor: objStatus.star ? '#707070' : '#fff'
              }"
              @click="handleStar"
            >
              <i class="iconfont el-github"></i>
              <div
                class="user-github-box-link-fork-text"
                :style="{ color: objStatus.star ? '#fff' : '#707070' }"
              >
                <p>Star</p>
                <p v-if="objStatus.star">+1,500</p>
              </div>
            </a>
            <a
              class="user-github-box-link-git user-github-box-link-fork"
              :href="objFork.link"
              :target="objFork.target"
              :style="{
                backgroundColor: objStatus.fork ? '#707070' : '#fff'
              }"
              @click="handleFork"
            >
              <i class="iconfont el-github"></i>
              <div
                class="user-github-box-link-fork-text"
                :style="{ color: objStatus.fork ? '#fff' : '#707070' }"
              >
                <p>Fork</p>
                <p v-if="objStatus.fork">+1,500</p>
              </div>
            </a>
          </div>
        </div>
        <div v-else class="user-github-box-link">
          <div class="user-github-box-link-btn" @click="handleGithubLink">
            <i class="iconfont el-github"></i>
            <span>{{ $t('personal.account') }}</span>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div class="user-github-box-link-text">{{ $t('personal.fork') }}</div>
        </div>
        <div
          class="user-github-box-email"
          :style="{ color: userInfo.email ? '#707070' : '#715df2' }"
          @click="handleEmail"
        >
          E
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="user-github-box-content">
      <div v-if="isGithub" class="user-github-box-link">
        <div class="user-github-box-link-btn">
          <i class="iconfont el-github"></i>
          <span>{{ $t('personal.project') }}</span>
        </div>
        <div class="user-github-box-link-text">{{ $t('personal.keep') }}</div>
        <div class="user-github-box-link-btn user-github-box-link-btn-box">
          <a
            class="user-github-box-link-git"
            :href="objStar.link"
            :target="objStar.target"
            :style="{
              backgroundColor: objStatus.star ? '#707070' : '#fff'
            }"
            @click="handleStar"
          >
            <i class="iconfont el-github"></i>
            <div
              class="user-github-box-link-fork-text"
              :style="{ color: objStatus.star ? '#fff' : '#707070' }"
            >
              <p>Star</p>
              <p v-if="objStatus.star">+1,500</p>
            </div>
          </a>
          <a
            class="user-github-box-link-git user-github-box-link-fork"
            :href="objFork.link"
            :target="objFork.target"
            :style="{
              backgroundColor: objStatus.fork ? '#707070' : '#fff'
            }"
            @click="handleFork"
          >
            <i class="iconfont el-github"></i>
            <div
              class="user-github-box-link-fork-text"
              :style="{ color: objStatus.fork ? '#fff' : '#707070' }"
            >
              <p>Fork</p>
              <p v-if="objStatus.fork">+1,500</p>
            </div>
          </a>
        </div>
      </div>
      <div v-else class="user-github-box-link">
        <div class="user-github-box-link-btn" @click="handleGithubLink">
          <i class="iconfont el-github"></i>
          <span>{{ $t('personal.account') }}</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="user-github-box-link-text">{{ $t('personal.fork') }}</div>
      </div>
      <div
        class="user-github-box-email"
        :style="{ color: userInfo.email ? '#707070' : '#715df2' }"
        @click="handleEmail"
      >
        E
      </div>
    </div>
    <div class="user-github-discuss">
      {{ $t('personal.area') }}
    </div>
    <div class="develop-wonder">
      <div
        v-for="item in arrDiscussion"
        :key="item.id"
        class="develop-wonder-item"
      >
        <div class="develop-wonder-item-left">
          <img :src="item.author_icon" alt="author" :onerror="defaultImg" />
          <div class="develop-wonder-item-middle-box">
            <p class="title-h7">
              {{ item.sub_title }}
            </p>
            <el-button v-if="item.type === 1">{{
              $t('develope.discuss')
            }}</el-button>
            <el-button v-if="item.type === 2">BUG</el-button>
          </div>
        </div>
        <div class="develop-wonder-item-middle">
          <h6 class="title-h6">{{ item.title }}</h6>
          <el-input
            v-if="item.content.length >= 300"
            v-model="item.content"
            class="develop-textarea"
            type="textarea"
            :placeholder="$t('develope.issue')"
            readonly
          >
          </el-input>
          <div v-else class="develop-textarea-text" v-html="item.content"></div>
          <div class="develop-wonder-item-middle-bottom">
            <a
              :href="item.author_url"
              target="_blank"
              class="develop-wonder-item-middle-bottom-name"
              >{{ item.author }}
            </a>
            <span>{{ $t('develope.on') }} </span>
            <span
              v-if="item.author_created !== 0"
              class="develop-wonder-item-middle-bottom-time"
              >{{ handleMillisecondShow(item.author_created) }}</span
            >
            <span v-if="item.author_created !== 0"
              >{{ $t('develope.on') }}
            </span>
            <a
              :href="item.category_url"
              target="_blank"
              class="develop-wonder-item-middle-bottom-name"
            >
              # {{ item.category }}</a
            >
            <span>{{ $t('develope.mentioned') }}</span>
            <span
              v-if="item.labels"
              class="develop-wonder-item-middle-bottom-auto"
              ># {{ item.labels }}</span
            >
          </div>
        </div>
        <div class="develop-wonder-item-right">
          <p class="develop-wonder-item-right-replies">
            {{ money_format(item.comments) }}
            {{ $t('develope.replies') }}
          </p>
          <a
            :href="item.link"
            target="_blank"
            class="develop-wonder-item-right-join"
          >
            {{ $t('develope.join') }}
            <i class="el-icon-caret-right"></i>
          </a>
          <div class="develop-wonder-item-middle-bottom-item">
            <i class="iconfont el-Pionts"></i>
            <span class="develop-wonder-item-middle-bottom-number">{{
              money_format(item.points)
            }}</span>
          </div>
          <a
            :href="`${browserUrl}/transaction/${item.hash}`"
            target="_blank"
            class="develop-wonder-item-middle-bottom-name develop-wonder-item-middle-bottom-item"
          >
            <i class="iconfont el-Block"></i>
            {{ item.block_id }}</a
          >
        </div>
      </div>
    </div>
    <!-- page -->
    <div v-if="arrDiscussion.length !== 0" class="personal-tabs-task-btn">
      <button
        v-if="isMobile"
        v-show="isMore"
        class="btn btn-primary"
        @click="handleMoreNext"
      >
        {{ $t('footer.more') }}
      </button>
      <el-pagination
        v-else
        background
        width="400"
        hide-on-single-page
        :page-size="objActivity.limit"
        layout="prev, pager, next"
        :total="activityTotal"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <user-email :is-email="isEmail" @close="handleCloseEmail"></user-email>
    <user-bind-email
      :obj-bind="objBind"
      @bind="handleCloseBind"
    ></user-bind-email>
  </div>
</template>
<script>
import UserEmail from '../../components/user/UserEmail';
import UserBindEmail from '../../components/user/UserBindEmail';
export default {
  components: {
    UserEmail,
    UserBindEmail
  },
  props: {},
  data() {
    return {
      isGithub: false,
      activityTotal: 1,
      bugsTotal: 1,
      isMore: false,
      objActivity: {
        page: 1,
        limit: 5,
        order: 'id desc',
        type: 1,
        language_type: 1
      },
      arrDiscussion: [],
      isEmail: false,
      objStatus: {},
      objStar: {
        link: 'https://github.com/IBAX-io/go-ibax',
        target: '_blank'
      },
      objBind: {
        isBind: false,
        email: 'XXXXXXXXXXXXX@gmail.com'
      },
      objFork: {
        link: 'https://github.com/IBAX-io/go-ibax/fork',
        target: '_blank'
      }
    };
  },
  computed: {
    defaultImg() {
      return (
        'this.src="' + require('../../assets/images/login/default.jpg') + '"'
      );
    },
    statistics() {
      return this.$store.getters.handleStatistics;
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      const w = this.$refs.userGithub.offsetWidth;
      console.log(w);
      this.$refs.userGithub.style.height = w * (600 / 1135) + 'px';
    });
    this.handleGithubInfo();
    this.objActivity.page = 1;
    this.handleGithubActivity(this.objActivity);
    this.$store.dispatch('handleGetTwitterUser');
  },
  methods: {
    handleStar() {
      if (this.objStatus.star) {
        this.objStar = {
          link: 'javascript:;',
          target: '_self'
        };
        this.$message({
          type: 'success',
          message: 'Already Star'
        });
      } else {
        this.objStar = {
          link: 'https://github.com/IBAX-io/go-ibax',
          target: '_blank'
        };
        const h = this.$createElement;
        this.$msgbox({
          title: this.$t('personal.star'),
          message: h('p', null, [
            h('span', null, this.$t('personal.repository'))
          ]),
          showCancelButton: true,
          distinguishCancelAndClose: true,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          center: true,
          confirmButtonClass: 'link-btn',
          confirmButtonText: this.$t('personal.finish'),
          cancelButtonText: this.$t('personal.notf'),
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              const params = {
                repositories: ''
              };
              setTimeout(() => {
                // console.log(params);
                this.$axios.$post('/github/get_star', params).then((res) => {
                  console.log(res);
                  if (res.code === 0 && res.data.status) {
                    instance.confirmButtonLoading = false;
                    this.handleStatus();
                    this.$store.dispatch('handleGetStatistics');
                    this.$message({
                      showClose: true,
                      type: 'success',
                      message: 'Already Star',
                      onClose: () => {
                        done();
                      }
                    });
                  } else {
                    //  done();
                    instance.confirmButtonLoading = false;
                    instance.confirmButtonText = this.$t('personal.finish');
                    this.$message({
                      showClose: true,
                      type: 'warning',
                      message: 'Please try again later'
                    });
                  }
                });
              }, 3000);
            } else {
              done();
            }
          }
        })
          .then((action) => {})
          .catch((action) => {});
      }
    },
    handleFork() {
      if (this.objStatus.fork) {
        this.objFork = {
          link: 'javascript:;',
          target: '_self'
        };
        this.$message({
          type: 'success',
          message: 'Already fork'
        });
      } else {
        this.objFork = {
          link: 'https://github.com/IBAX-io/go-ibax/fork',
          target: '_blank'
        };
        const h = this.$createElement;
        this.$msgbox({
          title: this.$t('personal.forkto'),
          message: h('p', null, [h('span', null, this.$t('personal.gofork'))]),
          showCancelButton: true,
          distinguishCancelAndClose: true,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          center: true,
          confirmButtonClass: 'link-btn',
          confirmButtonText: this.$t('personal.finish'),
          cancelButtonText: this.$t('personal.notf'),
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              const params = {
                repositories: ''
              };
              setTimeout(() => {
                // console.log(params);
                this.$axios.$post('/github/get_fork', params).then((res) => {
                  console.log(res);
                  if (res.code === 0 && res.data.status) {
                    instance.confirmButtonLoading = false;
                    this.handleStatus();
                    this.$store.dispatch('handleGetStatistics');
                    this.$message({
                      showClose: true,
                      type: 'success',
                      message: 'Already fork',
                      onClose: () => {
                        done();
                      }
                    });
                  } else {
                    //  done();
                    instance.confirmButtonLoading = false;
                    instance.confirmButtonText = this.$t('personal.finish');
                    this.$message({
                      showClose: true,
                      type: 'warning',
                      message: 'Please try again later'
                    });
                  }
                });
              }, 3000);
            } else {
              done();
            }
          }
        })
          .then((action) => {})
          .catch((action) => {});
      }
    },
    handleEmail() {
      console.log(this.userInfo.email);
      if (this.userInfo.email) {
        this.objBind.isBind = true;
        this.objBind.email = this.userInfo.email;
      } else {
        this.isEmail = true;
        console.log(this.userInfo.email);
      }
      // this.objBind.isBind = true;
    },
    handleCloseEmail() {
      this.isEmail = false;
    },
    handleCloseBind() {
      this.objBind.isBind = false;
    },
    async handleStatus() {
      const res = await this.$axios.$get('/github/star_fork_status');
      console.log(res);
      if (res.code === 0) {
        console.log(res);
        this.objStatus = res.data;
      } else {
        this.$message({
          type: 'warning',
          message: 'The request failed. Please handle it later'
        });
      }
    },
    async handleGithubLink() {
      const res = await this.$axios.$get('/github_redirect');
      console.log(res);
      if (res.code === 0) {
        console.log(res);
        window.location.href = res.data.url;
      } else {
        this.$message({
          type: 'warning',
          message: 'The request failed. Please handle it later'
        });
      }
    },
    async handleGithubInfo() {
      const res = await this.$axios.$post('/github/getuser');
      console.log(res);
      if (res.code === 0) {
        this.isGithub = true;
        this.handleStatus();
      } else {
        this.isGithub = false;
      }
    },
    handleCurrentChange(page) {
      console.log(page);
      this.objActivity.page = page;
      this.handleGithubActivity(this.objActivity);
    },
    async handleGithubActivity(params) {
      const res = await this.$axios.$post(
        '/github_discussion_activity',
        params
      );
      // console.log(JSON.stringify(res));
      if (res.code === 0) {
        if (res.data.rets.length) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.arrDiscussion = res.data.rets;
              this.isMore = res.data.total > res.data.rets.length;
            } else {
              const arrDiscussion = this.handleReduce([
                ...this.arrDiscussion,
                ...res.data.rets
              ]);
              this.arrDiscussion = [...arrDiscussion];
              this.isMore = res.data.total > this.arrDiscussion.length;
            }
          } else {
            this.arrDiscussion = res.data.rets;
            this.activityTotal = res.data.total;
          }
        } else if (params.page !== 1) {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        }
      } else {
        this.arrDiscussion = [];
      }
    },
    handleMoreNext() {
      this.objActivity.page++;
      this.handleGithubActivity(this.objActivity);
    }
  }
};
</script>
