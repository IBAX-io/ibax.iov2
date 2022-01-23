<template>
  <div class="develop">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            class="el-row-wrap"
          >
            <el-col :xs="24" :lg="10">
              <!-- <h6 class="home-new-text animated fadeInUp">
                {{ $t('develope.tool') }}
              </h6> -->
              <h2 class="title-h2 animated fadeInUp">
                {{ $t('develope.explore') }}
              </h2>
              <p class="animated fadeInUp">
                {{ $t('develope.enthusiast') }}
              </p>
              <p class="animated fadeInUp">
                {{ $t('develope.finder') }}
              </p>
              <p class="animated fadeInUp">
                {{ $t('develope.innovator') }}
              </p>
            </el-col>
            <el-col :xs="23" :lg="10">
              <div class="home-tag-img animated fadeInUp">
                <img src="../../assets/images/develop-1.png" alt="develop-1" />
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="develop-btn animated fadeInUp">
          <a
            class="btn btn-primary"
            href="https://github.com/IBAX-io/go-ibax/discussions"
            target="_blank"
          >
            {{ $t('develope.repository') }}
          </a>
          <nuxt-link class="home-new-bottom link" to="/developer/github-rules">
            <span>{{ $t('develope.topics') }}</span>
            <i class="el-icon-right"></i>
          </nuxt-link>
        </div>
        <div
          id="weaver"
          class="other other-center"
          style="padding-bottom: 100px"
        >
          <div class="develop-box">
            <div class="develop-box-item">
              <div class="develop-box-item-icon">
                <i class="iconfont el-Ecology"></i>
              </div>
              <p class="animated fadeInUp">{{ $t('develope.encourage') }}</p>
            </div>
            <div class="develop-box-item">
              <div class="develop-box-item-icon">
                <i class="iconfont el-Submit"></i>
              </div>
              <p class="animated fadeInUp">
                {{ $t('develope.submit') }}
              </p>
            </div>
            <div class="develop-box-item">
              <div class="develop-box-item-icon">
                <i class="iconfont el-a-BigData"></i>
              </div>
              <p class="animated fadeInUp">
                {{ $t('develope.excellent') }}
              </p>
            </div>
          </div>
          <div class="home-top-btn wow fadeInUp">
            <a
              href="https://github.com/IBAX-io/go-ibax/discussions/categories/ideas"
              target="_blank"
              class="btn btn-primary"
            >
              <span>{{ $t('develope.project') }}</span>
              <i class="el-icon-right"></i>
            </a>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="bass-white bass-white-top">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="bass-white-content el-row-wrap">
            <el-row type="flex" justify="space-between" style="flex-wrap: wrap">
              <el-col :xs="24" :lg="11" class="bass-white-fade">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <div class="bass-white-title wow fadeInUp">
                      <h4 class="title-h4">
                        {{ $t('develope.exciting') }}
                      </h4>
                    </div>
                    <p class="wow fadeInUp develop-white-text">
                      {{ $t('develope.encourages') }}
                    </p>
                  </div>
                  <a
                    href="https://github.com/IBAX-io/go-ibax/discussions/categories/ideas"
                    target="_blank"
                    class="develop-white-bottom wow fadeInUp"
                  >
                    <span>{{ $t('develope.wonderful') }}</span>
                    <i class="el-icon-right"></i>
                  </a>
                </div>
              </el-col>
              <el-col :xs="24" :lg="11" class="bass-white-fade">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <div class="bass-white-title wow fadeInUp">
                      <h4 class="title-h4 wow fadeInUp">
                        {{ $t('develope.reward') }}
                      </h4>
                    </div>
                    <p class="wow fadeInUp develop-white-text">
                      {{ $t('develope.get') }}
                    </p>
                  </div>
                  <a
                    href="https://github.com/IBAX-io/go-ibax/discussions/categories/bug-submission"
                    target="_blank"
                    class="develop-white-bottom wow fadeInUp"
                  >
                    <span>{{ $t('develope.receive') }}</span>
                    <i class="el-icon-right"></i>
                  </a>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- discuss -->
    <div class="media-b">
      <el-row type="flex" justify="center" class="el-row-wrap">
        <el-col :xs="24" :lg="18">
          <div class="home-new">
            <div class="develop-discuss">
              <img src="@/assets/images/develop-2.png" alt="develop-2" />
              <div class="develop-discuss-content">
                <span class="develop-discuss-content-text">{{
                  $t('develope.forum')
                }}</span>
                <span class="develop-discuss-content-line"></span>
              </div>
            </div>
            <div class="develop-wonder">
              <div
                v-for="item in arrDiscussion"
                :key="item.id"
                class="develop-wonder-item"
              >
                <div class="develop-wonder-item-left">
                  <!--  <h6 v-if="!isMobile" class="title-h6">sadasdasdas</h6> -->
                  <img
                    :src="item.author_icon"
                    alt="author"
                    :onerror="defaultImg"
                  />
                  <div class="develop-wonder-item-middle-box">
                    <p class="title-h7">
                      {{ item.sub_title }}
                    </p>
                    <el-button v-if="item.type === 1">{{
                      $t('develope.discuss')
                    }}</el-button>
                    <el-button v-if="item.type === 2">BUG</el-button>
                  </div>
                  <!-- <h6  class="title-h6">{{ item.title }}</h6> -->
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
                  <div
                    v-else
                    class="develop-textarea-text"
                    v-html="item.content"
                  ></div>
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
                    <span class="develop-wonder-item-middle-bottom-auto"
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
            <div
              v-if="arrDiscussion.length !== 0"
              class="personal-tabs-task-btn develop-tabs-task-btn"
            >
              <button
                v-if="isMobile"
                v-show="isMore"
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
                :page-size="objActivity.limit"
                layout="prev, pager, next"
                :total="activityTotal"
                @current-change="handleCurrentChange($event, 1)"
              >
              </el-pagination>
            </div>
            <div class="home-top-btn wow fadeInUp develop-top-btn">
              <a
                href="https://github.com/IBAX-io/go-ibax/discussions"
                target="_blank"
                class="btn btn-primary"
              >
                <span>{{ $t('develope.check') }}</span>
                <i class="el-icon-right"></i>
              </a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- bugs -->
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18" class="el-row-wrap">
          <div class="home-new">
            <div class="develop-discuss">
              <img src="@/assets/images/develop-7.png" alt="develop-7" />
              <div class="develop-discuss-content">
                <span class="develop-discuss-content-text">{{
                  $t('develope.bugs')
                }}</span>
                <span class="develop-discuss-content-line"></span>
              </div>
            </div>
          </div>
          <div class="develop-bugs develop-bugs-warp">
            <div class="develop-bugs-left">
              <div ref="bugsleft" class="develop-bugs-left-box">
                <div
                  v-for="item in arrBugs"
                  :key="item.id"
                  class="develop-bugs-item"
                >
                  <div class="develop-bugs-item-odd">
                    <h6 class="title-h6 develop-bugs-item-title">
                      <span>{{ item.title }}</span>
                      <a
                        :href="item.category_url"
                        target="_blank"
                        class="develop-wonder-item-middle-bottom-name"
                        ># {{ item.category }}</a
                      >
                    </h6>
                    <div class="develop-bugs-item-content">
                      <div class="develop-bugs-item-content-right">
                        <div># {{ item.labels }}</div>
                        <div>
                          <i class="iconfont el-Pionts"></i>
                          <span
                            class="develop-wonder-item-middle-bottom-number"
                            >{{ money_format(item.points) }}</span
                          >
                        </div>
                        <div>
                          <i class="iconfont el-Block"></i>
                          <a
                            :href="`${browserUrl}/transaction/${item.hash}`"
                            target="_blank"
                            class="develop-wonder-item-middle-bottom-name"
                            >{{ item.block_id }}</a
                          >
                        </div>
                      </div>
                      <div class="develop-bugs-item-content-textarea">
                        <el-input
                          v-if="item.content.length >= 300"
                          v-model="item.content"
                          class="develop-textarea"
                          type="textarea"
                          :placeholder="$t('develope.issue')"
                          readonly
                        >
                        </el-input>
                        <div
                          v-else
                          class="develop-textarea-text"
                          v-html="item.content"
                        ></div>
                        <div class="develop-bugs-item-content-textarea-bottom">
                          <img
                            class="develop-bugs-item-content-textarea-img"
                            :src="`${baseUrl}${item.level_icon}`"
                            alt="level_icon"
                          />
                          <span
                            class="develop-bugs-item-content-textarea-level"
                            >{{ item.level_name }}</span
                          >
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
                            >{{
                              handleMillisecondShow(item.author_created)
                            }}</span
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- bugs page -->
              <div
                v-if="arrBugs.length !== 0"
                class="personal-tabs-task-btn develop-tabs-task-btn"
              >
                <button
                  v-if="isMobile"
                  v-show="isMore"
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
                  :page-size="objBugs.limit"
                  layout="prev, pager, next"
                  :total="bugsTotal"
                  @current-change="handleCurrentChange($event, 2)"
                >
                </el-pagination>
              </div>
              <div class="home-top-btn wow fadeInUp develop-top-btn">
                <nuxt-link
                  :to="{ path: '/developer/honor-developers' }"
                  class="btn btn-primary"
                >
                  <span>{{ $t('develope.see') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </div>
            <div :ref="isMobile ? '' : 'bugsRight'" class="develop-bugs-right">
              <h6 class="title-h6 develop-bugs-item-title">
                <img src="@/assets/images/develop-8.png" alt="develop-8" />
                <span>{{ $t('develope.honor') }}</span>
              </h6>
              <p class="develop-bugs-right-text">{{ $t('develope.forget') }}</p>
              <el-collapse
                v-model="activeNames"
                accordion
                @change="handleCollapse"
              >
                <el-collapse-item
                  v-for="item in arrHonor"
                  :key="item.id"
                  :name="item.id"
                >
                  <template slot="title">
                    <div class="develop-bugs-right-header">
                      <div class="develop-bugs-right-header-name">
                        <span>{{ item.title }}</span>
                        <span>({{ money_format(item.title_count) }})</span>
                        <img
                          :src="`${baseUrl}${item.title_icon}`"
                          alt="title_icon"
                        />
                      </div>
                      <div class="develop-bugs-right-header-content">
                        {{ item.introduction }}
                      </div>
                    </div>
                  </template>
                  <div class="develop-bugs-box">
                    <div
                      v-for="ele in arrLeaderboard"
                      :key="ele.id"
                      class="develop-bugs-box-item"
                    >
                      <div class="develop-bugs-box-item-content">
                        <div class="develop-honor-person-item-img">
                          <img :src="ele.user_avatar" alt="user_avatar" />
                        </div>
                        <div class="develop-honor-person-item-text">
                          <p>{{ ele.username }}</p>
                          <p>
                            <i class="iconfont el-Pionts"></i>
                            <span>Points: {{ money_format(ele.points) }}</span>
                          </p>
                        </div>
                      </div>
                      <p>{{ ele.introduction }}</p>
                    </div>
                    <!-- bugs page -->
                    <div
                      v-if="arrLeaderboard.length !== 0"
                      class="personal-tabs-task-btn"
                    >
                      <button
                        v-if="isMobile"
                        v-show="isLead"
                        class="btn btn-primary"
                        @click="handleForwardNext('record')"
                      >
                        {{ $t('footer.more') }}
                      </button>
                      <el-pagination
                        v-else
                        background
                        hide-on-single-page
                        :page-size="objLead.limit"
                        layout="prev, pager, next"
                        :total="leaderTotal"
                        @current-change="handleCurrentChange($event, 3)"
                      >
                      </el-pagination>
                    </div>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      textarea: '',
      tabPosition: 'bottom',
      count: 0,
      timer: null,
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
      objBugs: {
        page: 1,
        limit: 5,
        order: 'id desc',
        type: 2,
        language_type: 1
      },
      arrDiscussion: [],
      arrBugs: [],
      activeNames: '',
      arrHonor: [],
      objLead: {
        type: 1,
        source: '',
        limit: 5,
        page: 1,
        language_type: 1
      },
      arrLeaderboard: [],
      leaderTotal: 1,
      isLead: false,
      objLeader: {}
    };
  },
  head() {
    return {
      title: `${this.$t('nav.development')}-IBAX`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('nav.development')} | IBAX Network`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.baseUrl}${this.$route.path}`
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: `${this.baseUrl}${this.$route.path}`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('nav.development')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,Developer,Weaver,LowCode'
        },
        {
          hid: 'description',
          name: 'description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        }
      ]
    };
  },
  computed: {
    defaultImg() {
      return (
        'this.src="' + require('../../assets/images/login/default.jpg') + '"'
      );
    }
  },
  watch: {
    arrBugs: {
      handler(val) {
        this.$nextTick(() => {
          if (!this.isMobile) {
            const heightLeft = this.$refs.bugsleft.offsetHeight;
            console.log(heightLeft);
            this.$refs.bugsRight.style.height = heightLeft + 'px';
          }
        });
      },
      deep: true
    }
  },
  created() {
    this.objActivity.page = 1;
    this.handleGithubActivity(this.objActivity);
  },
  mounted() {
    const obj = { headerColor: '#274235', color: '#fff' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleIsTop', true);
    this.$store.commit('handleIsFixed', false);
    this.$store.commit('handleChangeClass', 'subMenu--horizontal');
    this.$nextTick(() => {
      /* const heightLeft = this.$refs.bugsleft.offsetHeight;
      this.$refs.bugsRight.style.height = heightLeft + 'px'; */

      this.objBugs.page = 1;
      this.handleGithubBugs(this.objBugs);
      this.handleGithubTitleList();
      const wow = new this.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        scrollContainer: '.el-scrollbar__wrap',
        offset: 0,
        mobile: true,
        live: false
      });
      wow.init();
    });
    this.domGlobal.addEventListener('scroll', this.handleArchiteScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener(
      'scroll',
      this.handleArchiteScroll,
      true
    );
  },
  methods: {
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
            } else {
              const arrDiscussion = this.handleReduce([
                ...this.arrDiscussion,
                ...res.data.rets
              ]);
              this.arrDiscussion = [...arrDiscussion];
            }
            this.isMore = res.data.total > res.data.rets.length;
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
    async handleGithubBugs(params) {
      const res = await this.$axios.$post(
        '/github_discussion_activity',
        params
      );
      // console.log(JSON.stringify(res));
      if (res.code === 0) {
        if (res.data.rets.length) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.arrBugs = res.data.rets;
            } else {
              const arrBugs = this.handleReduce([
                ...this.arrBugs,
                ...res.data.rets
              ]);
              this.arrBugs = [...arrBugs];
            }
            this.isMore = res.data.total > res.data.rets.length;
          } else {
            this.arrBugs = res.data.rets;
            this.bugsTotal = res.data.total;
          }
        } else if (params.page !== 1) {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        }
      } else {
        this.arrBugs = [];
      }
    },
    /* page */
    handleCurrentChange($event, type) {
      if (type === 1) {
        this.objActivity.page = $event;
        this.handleGithubActivity(this.objActivity);
      } else if (type === 2) {
        this.objBugs.page = $event;
        this.handleGithubBugs(this.objBugs);
      } else {
        this.handleGithubLeaderboard(this.objLeader.title, $event);
      }
    },
    handleCollapse(name) {
      console.log(name);
      if (name) {
        this.objLeader = this.arrHonor.find((item) => item.id === name);
        console.log(this.objLeader);
        this.handleGithubLeaderboard(this.objLeader.title);
      }
    },
    async handleGithubTitleList() {
      const res = await this.$axios.$get('/github_title_list/1');
      console.log(JSON.stringify(res));
      if (res.code === 0 && res.data) {
        this.arrHonor = res.data;
      } else {
        this.arrHonor = [];
      }
    },
    handleArchiteScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('weaver')
        .getBoundingClientRect().bottom;
      if (this.numArchite <= 0) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      }
    },
    async handleGithubLeaderboard(title, page = 1) {
      console.log(title);
      this.objLead.source = title;
      this.objLead.page = page;
      const params = this.objLead;
      const res = await this.$axios.$post('/github_leaderboard', params);
      console.log(JSON.stringify(res));
      if (res.code === 0) {
        if (res.data.rets) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.arrLeaderboard = res.data.rets;
            } else {
              const arrLeaderboard = this.handleReduce([
                ...this.arrLeaderboard,
                ...res.data.rets
              ]);
              this.arrLeaderboard = [...arrLeaderboard];
            }
            this.isLead = res.data.total > res.data.rets.length;
          } else {
            this.arrLeaderboard = res.data.rets;
            this.leaderTotal = res.data.total;
          }
        } else if (params.page !== 1) {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        } else {
          this.arrLeaderboard = [];
          this.leaderTotal = 1;
        }
      } else {
        this.arrLeaderboard = [];
      }
    }
  }
};
</script>
