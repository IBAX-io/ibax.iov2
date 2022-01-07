<template>
  <div class="user">
    <el-row type="flex" justify="center">
      <!-- PC nav -->
      <el-col :sm="24" :lg="18" :md="24" class="el-row-wrap">
        <div v-if="isMobile" class="user-left-info user-mobile-info">
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
            <img
              :src="userInfo.image_url"
              alt="head"
              :onerror="defaultImg"
              class="user-left-head"
            />
            <div class="user-left-info">
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
                <nuxt-link :to="{ path: '/user' }"
                  >{{ $t('personal.center') }}
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
                          :style="{ color: item.isSelect ? '#f3ac34' : '' }"
                        >
                          {{ $t(item.title) }}
                        </div>
                        <div
                          v-for="ele in item.children"
                          :key="ele.key"
                          class="user-left-link-small"
                        >
                          <nuxt-link :to="{ path: ele.path }">{{
                            $t(ele.title)
                          }}</nuxt-link>
                        </div>
                      </div>
                      <div v-else class="user-left-link-title">
                        <nuxt-link :to="{ path: item.path }">{{
                          $t(item.title)
                        }}</nuxt-link>
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
export default {
  layout: 'newsLayouts',
  props: {},
  data() {
    return {
      isActivity: false,
      heightVar: 0,
      topVal: 0,
      isShow: 0,
      numHeight: 0,
      arrUserNav: [
        {
          title: 'personal.airdrop',
          key: '1',
          isSelect: false,
          rules: ['/user/retweet', '/user/share', '/user/rules'],
          children: [
            {
              title: 'personal.ret',
              path: '/user/retweet',
              key: '1-1'
            },
            {
              title: 'personal.referrals',
              path: '/user/share',
              key: '1-2'
            },
            {
              title: 'personal.ruless',
              path: '/user/airdrop-rules',
              key: '1-3'
            }
          ]
        },
        {
          title: 'personal.git',
          key: '2',
          isSelect: false,
          rules: ['/user/account', '/user/record', '/user/github-rules'],
          children: [
            {
              title: 'personal.account',
              path: '/user/link-github',
              key: '2-1'
            },
            {
              title: 'personal.commits',
              path: '/user/commits',
              key: '2-2'
            },
            {
              title: 'personal.gr',
              path: '/user/github-rules',
              key: '2-3'
            }
          ]
        },
        {
          title: 'personal.geti',
          key: '3',
          path: '/user/redeem',
          rules: []
        }
      ]
    };
  },
  computed: {
    defaultImg() {
      return 'this.src="' + require('../assets/images/login/default.jpg') + '"';
    },
    statistics() {
      return this.$store.getters.handleStatistics;
    }
  },
  watch: {
    $route: {
      handler(val, oldVal) {
        console.log(val.name);
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
    this.$store.dispatch('handleGetStatistics');
  },
  mounted() {
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
        console.log(item);
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
          this.topVal = '52px';
          this.heightVar = this.isShow = 0;
          break;
        case '/user/retweet':
          this.heightVar = `80px`;
          this.topVal = '50px';
          this.isShow = 1;
          break;
        case '/user/share':
          this.heightVar = `120px`;
          this.topVal = '90px';
          this.isShow = 1;
          break;
        case '/user/airdrop-rules':
          this.heightVar = `150px`;
          this.topVal = '120px';
          this.isShow = 1;
          break;
        case '/user/link-github':
          this.heightVar = `240px`;
          this.topVal = '205px';
          this.isShow = 1;
          break;
        case '/user/commits':
          this.heightVar = `270px`;
          this.topVal = '240px';
          this.isShow = 1;
          break;
        case '/user/github-rules':
          this.heightVar = `300px`;
          this.topVal = '275px';
          this.isShow = 1;
          break;
        case '/user/redeem':
          this.heightVar = `100%`;
          this.topVal = '315px';
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
