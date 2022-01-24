<template>
  <div :class="{ nav: isTop, 'nav-white': !isTop }">
    <div class="nav-index">
      <nuxt-link :to="{ name: 'index' }">
        <i class="iconfont el-logo1" :style="{ color: colorText }"></i>
      </nuxt-link>
    </div>
    <el-menu
      router
      :collapse-transition="!boo"
      :default-active="activeIndex"
      class="el-menu-nav"
      mode="horizontal"
      @select="handleSelect"
    >
      <template v-for="items in arrNav">
        <el-submenu
          v-if="items.children"
          :key="items.key"
          :index="items.path"
          :popper-class="domClass"
          :popper-append-to-body="boo"
        >
          <template slot="title">{{ $t(items.title) }}</template>
          <div class="nav-child">
            <div
              v-for="child in items.children"
              :key="child.key"
              class="nav-child-item"
            >
              <div v-if="child.title" class="nav-child-title">
                {{ $t(child.title) }}
              </div>
              <template v-for="item in child.content">
                <el-menu-item
                  v-if="item.path"
                  :key="item.key"
                  :index="item.path"
                  class="el-menu-nav-item"
                >
                  <div class="nav-child-item-content">
                    <div class="nav-child-item-content-img">
                      <i :class="item.icon"></i>
                    </div>
                    <div class="nav-child-item-content-title">
                      <div class="nav-child-item-content-title-text">
                        {{ $t(item.title) }}
                      </div>
                      <div
                        v-if="item.describe"
                        class="nav-child-item-content-title-text-small"
                      >
                        {{ $t(item.describe) }}
                      </div>
                    </div>
                  </div>
                </el-menu-item>
                <el-menu-item v-else :key="item.key" class="el-menu-nav-item">
                  <a
                    :href="item.link"
                    target="_blank"
                    class="nav-child-item-content"
                  >
                    <div class="nav-child-item-content-img">
                      <i :class="item.icon"></i>
                    </div>
                    <div class="nav-child-item-content-title">
                      <div class="nav-child-item-content-title-text">
                        {{ $t(item.title) }}
                      </div>
                    </div>
                  </a>
                </el-menu-item>
              </template>
            </div>
          </div>
        </el-submenu>
        <template v-else>
          <el-menu-item
            v-if="items.path !== '/'"
            :key="items.path"
            :index="items.path"
          >
            {{ $t(items.title) }}
          </el-menu-item>
          <el-menu-item
            v-else
            :key="items.path"
            :index="items.path"
            style="display: none"
          >
            {{ $t(items.title) }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <div class="nav-right">
      <div class="nav-right-dropdown" style="display: none">
        <!--   <div class="nav-right-dropdown"> -->
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="iconfont el-translate" :style="{ color: colorText }"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in arrLang"
              :key="item.lang"
              :command="item.lang"
            >
              {{ item.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <nuxt-link
        v-if="userInfo && userInfo.name"
        :to="{ name: 'user' }"
        class="nav-link"
      >
        <el-dropdown v-if="userInfo" @command="handleSignOut">
          <div
            class="el-dropdown-span nav-link-head-box"
            :style="{ color: colorText }"
          >
            <img :src="userInfo.image_url" alt="head" />
            <span>{{ userInfo.name }}</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="out">
              <div class="nav-link-head-box">
                <i class="iconfont el-out"></i>
                {{ $t('nav.out') }}
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </nuxt-link>
      <div v-else class="nav-join">
        <nuxt-link
          :to="{
            name: 'login'
          }"
          class="nav-link nav-link-middle"
          :style="{ color: colorText }"
          >{{ $t('nav.log') }}</nuxt-link
        >
        <nuxt-link :to="{ name: 'login' }" class="btn btn-primary"
          >Join Airdrop</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { handleGetLang } from '../assets/js/public.js';
export default {
  props: {},
  data() {
    return {
      boo: true,
      isRouter: true,
      activeIndex: '1',
      strLang: 'English',
      num: 0,
      arrNav: [
        {
          title: 'nav.home',
          path: '/'
        },
        {
          title: 'nav.features',
          path: '/feature',
          key: '1',
          children: [
            {
              title: 'nav.performance',
              key: '1-1',
              content: [
                {
                  title: 'nav.high',
                  describe: 'nav.use',
                  icon: 'iconfont el-technology',
                  path: '/feature/architecture',
                  key: '1-1-1'
                },
                {
                  title: 'nav.security',
                  describe: 'nav.encryption',
                  icon: 'iconfont el-protection',
                  path: '/feature/security-privacy',
                  key: '1-1-2'
                },
                {
                  title: 'nav.virtual',
                  describe: 'nav.eth',
                  icon: 'iconfont el-private',
                  path: '/feature/virtual-macine',
                  key: '1-1-3'
                }
              ]
            },
            {
              title: 'nav.break',
              key: '1-2',
              content: [
                {
                  title: 'nav.chain',
                  describe: 'nav.cross-chain',
                  icon: 'iconfont el-cloud-computing',
                  path: '/feature/cross-chain',
                  key: '1-2-1'
                },
                {
                  title: 'nav.tran',
                  describe: 'nav.improve',
                  icon: 'iconfont el-elastic',
                  path: '/feature/sharding',
                  key: '1-2-2'
                },

                {
                  title: 'nav.clb',
                  describe: 'nav.basis',
                  icon: 'iconfont el-transfer',
                  path: '/feature/clb',
                  key: '1-2-3'
                }
              ]
            },
            {
              title: 'nav.user',
              key: '1-3',
              content: [
                {
                  title: 'nav.multi',
                  describe: 'nav.ledger',
                  icon: 'iconfont el-algorithm',
                  path: '/feature/multisig',
                  key: '1-3-1'
                },
                {
                  title: 'nav.private',
                  describe: 'nav.fouds',
                  icon: 'iconfont el-private',
                  path: '/feature/privite-transaction',
                  key: '1-3-2'
                },
                {
                  title: 'nav.self',
                  describe: 'nav.gas',
                  icon: 'iconfont el-cloud-computing',
                  path: '/feature/ecolib-governance',
                  key: '1-3-3'
                }
              ]
            }
          ]
        },
        {
          title: 'nav.bass',
          path: '/baas-marketplace',
          key: '2'
        },
        {
          title: 'nav.resource',
          path: '/resource',
          key: '3',
          children: [
            {
              // title: 'resource.project',
              key: '3-1',
              content: [
                {
                  title: 'resource.team',
                  icon: 'iconfont el-a-teamintroduction',
                  path: '/resource/team',
                  key: '3-1-1'
                },
                {
                  title: 'resource.white',
                  icon: 'iconfont el-whitepaper',
                  link: 'https://bit.ly/3pZHrj4',
                  key: '3-1-2'
                },
                {
                  title: 'resource.video',
                  icon: 'iconfont el-video',
                  path: '/resource/video-resources',
                  key: '3-1-3'
                },
                {
                  title: 'resource.document',
                  icon: 'iconfont el-document',
                  link: 'https://github.com/IBAX-io/documentation',
                  key: '3-1-4'
                }
              ]
            },
            {
              key: '3-2',
              content: [
                {
                  title: 'resource.news',
                  icon: 'iconfont el-news',
                  path: '/resource/news',
                  key: '3-2-1'
                },

                {
                  title: 'resource.community',
                  icon: 'iconfont el-communities',
                  link: 'https://github.com/IBAX-io/go-ibax/discussions',
                  key: '3-2-2'
                },
                {
                  title: 'resource.download',
                  icon: 'iconfont el-Download',
                  link: 'https://github.com/orgs/IBAX-io/repositories',
                  key: '3-2-3'
                }
              ]
            },
            {
              key: '3-3',
              content: [
                {
                  title: 'resource.activity',
                  icon: 'iconfont el-activity1',
                  path: '/resource/events',
                  key: '3-3-1'
                }
              ]
            }
          ]
        },
        {
          title: 'nav.solution',
          path: '/solutions',
          key: '4',
          children: [
            {
              key: '4-1',
              content: [
                {
                  title: 'nav.supply',
                  icon: 'iconfont el-supply-chain',
                  path: '/solutions/supply-chain',
                  key: '4-1-1'
                }
              ]
            },
            {
              key: '4-2',
              content: [
                {
                  title: 'nav.copyright',
                  icon: 'iconfont el-copyright',
                  path: '/solutions/copyright',
                  key: '4-2-1'
                }
              ]
            },
            {
              key: '4-3',
              content: [
                {
                  title: 'nav.assets',
                  icon: 'iconfont el-asset-management',
                  path: '/solutions/assets',
                  key: '4-3-1'
                }
              ]
            }
          ]
        },
        {
          title: 'nav.development',
          path: '/developer',
          key: '5',
          children: [
            {
              key: '5-1',
              content: [
                {
                  title: 'personal.resources',
                  icon: 'iconfont el-Resources',
                  path: '/developer/developer-tools',
                  key: '5-1-1'
                },
                {
                  title: 'personal.ecosystem',
                  icon: 'iconfont el-Ecology1',
                  path: '/developer/ecosystems',
                  key: '5-1-2'
                }
              ]
            },
            {
              key: '5-2',
              content: [
                {
                  title: 'personal.bounty',
                  icon: 'iconfont el-a-Offerareward',
                  path: '/developer/engineering-bounty',
                  key: '5-2-1'
                }
              ]
            },
            {
              key: '5-3',
              content: [
                {
                  title: 'personal.honor',
                  icon: 'iconfont el-a-HonoraryDeveloper',
                  path: '/developer/honor-developers',
                  key: '5-3-1'
                }
              ]
            }
          ]
        },
        {
          title: 'nav.about',
          path: '/contact',
          key: '6'
        }
      ]
    };
  },
  computed: {},
  watch: {
    $route: {
      handler() {
        const { name } = this.$route;
        const arrIntercept = [
          'login',
          'user',
          'user-github-rules',
          'user-points',
          'user-receive',
          'user-retweet',
          'user-airdrop-rules',
          'user-link-github',
          'user-share',
          'user-redeem',
          'user-commits'
        ];
        const boo = arrIntercept.includes(name);
        //  console.log(name);
        if (name === 'resource-news-id') {
          this.activeIndex = '/resource/news';
        } else if (name === 'resource-events-id') {
          this.activeIndex = '/resource/events';
        } else if (name === 'baas-marketplace-ecolibs') {
          this.activeIndex = '/baas-marketplace';
        } else if (name === 'developer-github-rules') {
          this.activeIndex = '/developer/engineering-bounty';
        } else if (boo) {
          this.activeIndex = '/';
        } else {
          this.activeIndex = this.$route.path;
        }
      },
      immediate: true
    }
  },
  created() {
    const val = handleGetLang();
    this.arrLang.map((item) => {
      if (val === item.lang) {
        this.strLang = item.label;
      }
    });
    this.$store.commit('handleChangeLang', val);
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
    handleSelect(path, keyPath) {
      console.log(path, keyPath);
    }
  }
};
</script>
