<template>
  <div class="user">
    <el-row type="flex" justify="center">
      <!-- PC nav -->
      <el-col :sm="24" :lg="18" :md="24" class="el-row-wrap">
        <div v-if="isMobile" class="user-left-info user-mobile-info">
          <p class="user-left-info-item">
            {{ statistics.level_name }}
          </p>
          <p class="user-left-info-item">
            <span> {{ $t('personal.retweetpoint') }}</span>
            <span> {{ money_format(statistics.points) }}</span>
          </p>
          <p class="user-left-info-item">
            <span>{{ $t('personal.referral') }}</span>
            <span>{{ money_format(statistics.amount) }} IBXC</span>
          </p>
          <p class="user-left-info-item">
            <span>{{ $t('personal.gitHubCoin') }}</span>
            <span>{{ money_format(statistics.gitAmount) }} IBXC</span>
          </p>
        </div>
        <div class="user-box">
          <div v-if="!isMobile" class="user-left">
            <div :class="{ 'user-left-fixed': userFixed }">
              <img
                :src="`${baseUrl}${statistics.level_icon}`"
                alt="head"
                :onerror="defaultImg"
                class="user-left-head"
              />
              <div class="user-left-info">
                <p class="user-left-info-item">
                  {{ statistics.level_name }}
                </p>
                <p class="user-left-info-item">
                  <span> {{ $t('personal.retweetpoint') }}: </span>
                  <span> {{ money_format(statistics.points) }}</span>
                </p>
                <p class="user-left-info-item">
                  <span>{{ $t('personal.referral') }}: </span>
                  <span>{{ money_format(statistics.amount) }} IBXC</span>
                </p>
                <p class="user-left-info-item">
                  <span>{{ $t('personal.gitHubCoin') }}: </span>
                  <span>{{ money_format(statistics.gitAmount) }} IBXC</span>
                </p>
              </div>
              <div class="user-left-link">
                <div class="user-left-link-personal">
                  <nuxt-link :to="{ path: '/user' }">
                    {{ $t('personal.user') }}
                  </nuxt-link>
                  <div class="user-left-link-box">
                    <div
                      class="user-left-link-box-left"
                      :style="{
                        '--height': heightVar,
                        '--top': topVal,
                        '--isShow': isShow
                      }"
                    ></div>
                    <div class="user-left-link-box-right">
                      <div v-for="item in arrUserNav" :key="item.key">
                        <div v-if="item.children">
                          <div
                            class="user-left-link-title"
                            :style="{ color: item.isSelect ? '#715df2' : '' }"
                          >
                            {{ $t(item.title) }}
                          </div>
                          <div
                            v-for="ele in item.children"
                            :key="ele.key"
                            class="user-left-link-small"
                          >
                            <nuxt-link :to="{ path: ele.path }">
                              <i :class="ele.icon"></i>
                              {{ $t(ele.title) }}</nuxt-link
                            >
                          </div>
                        </div>
                        <div v-else class="user-left-link-title">
                          <nuxt-link :to="{ path: item.path }">
                            <i :class="item.icon"></i>
                            {{ $t(item.title) }}</nuxt-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="user-right">
            <nuxt-child />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { handleGetLang } from '../assets/js/public';
export default {
  layout: 'userLayouts',
  props: {},
  data() {
    return {
      isActivity: false,
      heightVar: 0,
      topVal: 0,
      isShow: 0,
      numHeight: 0,
      statisParams: {
        language: 'en'
      },
      arrUserNav: [
        {
          title: 'personal.airdrop',
          key: '1',
          isSelect: false,
          rules: [
            '/user/link-github',
            '/user/retweet',
            '/user/commits',
            '/user/list',
            '/user/share',
            '/user/github-rules'
          ],
          children: [
            {
              title: 'personal.account',
              path: '/user/link-github',
              key: '1-1',
              icon: 'iconfont el-Associations'
            },
            {
              title: 'personal.ret',
              path: '/user/retweet',
              key: '1-2',
              icon: 'iconfont el-Forwarding'
            },
            {
              title: 'personal.commits',
              path: '/user/commits',
              key: '1-3',
              icon: 'iconfont el-Submit1'
            },
            {
              title: 'personal.list',
              path: '/user/list',
              key: '1-4',
              icon: 'iconfont el-qingdan'
            },
            {
              title: 'personal.rank',
              path: '/user/github-rules',
              key: '1-5',
              icon: 'iconfont el-a-EventRules1'
            }
          ]
        },
        {
          title: 'personal.referrals',
          path: '/user/share',
          key: '2',
          rules: []
        },
        {
          title: 'personal.geti',
          key: '3',
          path: '/user/redeem',
          rules: []
        },
        {
          title: 'personal.completed',
          key: '4',
          isSelect: false,
          rules: ['/user/airdrop-rules'],
          children: [
            {
              title: 'personal.finishend',
              path: '/user/finish',
              key: '4-2',
              icon: 'iconfont el-jieshu'
            },
            {
              title: 'personal.air',
              path: '/user/airdrop-rules',
              key: '4-1',
              icon: 'iconfont el-a-Airdroprules'
            }
          ]
        }
      ]
    };
  },
  computed: {
    defaultImg() {
      return 'this.src="' + require('../assets/images/login/default.png') + '"';
    },
    statistics() {
      console.log(this.$store.getters.handleStatistics);
      return this.$store.getters.handleStatistics;
    },
    userFixed() {
      console.log(this.$store.getters.handleUserFixed);
      return this.$store.getters.handleUserFixed;
    }
  },
  watch: {
    lang() {
      this.statisParams.language = this.lang;
      this.$store.dispatch('handleGetStatistics', this.statisParams);
    },
    $route: {
      handler(val, oldVal) {
        // console.log(val.name);
        const { path } = val;
        this.handleRoute(path);
      },
      immediate: true
    }
  },
  created() {
    // console.log(this.$route.name);
    const path = this.$route.path;
    this.handleRoute(path);
  },
  mounted() {
    const lang = handleGetLang();
    this.statisParams.language = lang;
    this.$store.dispatch('handleGetStatistics', this.statisParams);
    if (this.token) {
      const str = localStorage.getItem('user');
      if (str === 'twitter') {
        this.$store.dispatch('handleGetTwitterUser');
      } else {
        this.$store.dispatch('handleGetGithubUser');
      }
    }
  },
  methods: {
    handleChange($event) {
      console.log($event);
    },
    handleRoute(path) {
      const arr = this.arrUserNav.map((item) => {
        // console.log(item);
        if (item.rules.includes(path)) {
          item.isSelect = true;
        } else {
          item.isSelect = false;
        }
        return item;
      });
      this.arrUserNav = arr;
      switch (path) {
        case '/user':
          this.topVal = '60px';
          this.heightVar = this.isShow = 0;
          break;
        case '/user/link-github':
          this.heightVar = `80px`;
          this.topVal = '50px';
          this.isShow = 1;
          break;
        case '/user/retweet':
          this.heightVar = `115px`;
          this.topVal = '90px';
          this.isShow = 1;
          break;
        case '/user/commits':
          this.heightVar = `160px`;
          this.topVal = '135px';
          this.isShow = 1;
          break;
        case '/user/list':
          this.heightVar = `205px`;
          this.topVal = '175px';
          this.isShow = 1;
          break;
        case '/user/github-rules':
          this.heightVar = `255px`;
          this.topVal = '215px';
          this.isShow = 1;
          break;
        case '/user/share':
          this.heightVar = `285px`;
          this.topVal = '255px';
          this.isShow = 1;
          break;
        case '/user/redeem':
          this.heightVar = `325px`;
          this.topVal = '300px';
          this.isShow = 1;
          break;
        case '/user/finish':
          this.heightVar = `400px`;
          this.topVal = '380px';
          this.isShow = 1;
          break;
        case '/user/airdrop-rules':
          this.heightVar = `100%`;
          this.topVal = '420px';
          this.isShow = 1;
          break;
        default:
          this.topVal = '52px';
          this.heightVar = this.isShow = 0;
          break;
      }
    }
  }
};
</script>
