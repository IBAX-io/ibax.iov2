<template>
  <div class="m-nav">
    <nuxt-link :to="{ name: 'index' }" class="m-nav-index">
      <i
        class="iconfont el-logo1"
        :style="{ color: colorText }"
        @click="handleCloseNav"
      ></i>
    </nuxt-link>
    <div class="m-nav-icon">
      <div class="nav-right-dropdown" style="display: none">
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
      <i
        class="iconfont"
        :class="{
          'el-a-FunctionBox': !isAside,
          'el-icon-close': isAside
        }"
        :style="{ color: colorText }"
        @click="handleOpenNav"
      ></i>
    </div>
    <aside
      class="m-nav-aside"
      :style="{ background: headerColor }"
      :class="{
        'm-nav-width': isAside
      }"
    >
      <el-collapse v-model="activeName" accordion>
        <template v-for="item in arrNavAll">
          <el-collapse-item
            v-if="item.children"
            :key="item.key"
            :name="item.key"
          >
            <template slot="title">
              <div class="m-nav-aside-title" :style="{ color: colorText }">
                {{ $t(item.title) }}
              </div>
            </template>
            <div
              v-for="child in item.children"
              :key="child.key"
              class="m-nav-aside-box"
            >
              <div v-if="child.title" class="m-nav-aside-box-label">
                {{ $t(child.title) }}
              </div>
              <template v-for="content in child.content">
                <nuxt-link
                  v-if="content.path"
                  :key="content.key"
                  :to="content.path"
                  class="m-nav-aside-box-content"
                  @click.native="handleOpenNav"
                >
                  <i :class="content.icon"></i>
                  <div class="m-nav-aside-box-other">
                    <div
                      class="m-nav-aside-box-content-title"
                      :style="{ color: colorText }"
                    >
                      {{ $t(content.title) }}
                    </div>
                    <div
                      v-if="content.describe"
                      class="m-nav-aside-box-content-text"
                      :style="{ color: colorText }"
                    >
                      {{ $t(content.describe) }}
                    </div>
                  </div>
                </nuxt-link>
                <a
                  v-if="content.link"
                  :key="content.key"
                  :href="content.link"
                  target="_blank"
                  class="m-nav-aside-box-content"
                  @click="handleOpenNav"
                >
                  <i :class="content.icon"></i>
                  <div class="m-nav-aside-box-other">
                    <div
                      class="m-nav-aside-box-content-title"
                      :style="{ color: colorText }"
                    >
                      {{ $t(content.title) }}
                    </div>
                    <div
                      v-if="content.describe"
                      class="m-nav-aside-box-content-text"
                    >
                      {{ $t(content.describe) }}
                    </div>
                  </div>
                </a>
              </template>
            </div>
          </el-collapse-item>
          <nuxt-link
            v-else
            :key="item.key"
            :to="item.path"
            :style="{ color: colorText }"
            class="m-nav-aside-title-single"
            @click.native="handleOpenNav"
            >{{ $t(item.title) }}</nuxt-link
          >
        </template>
      </el-collapse>
      <div
        v-if="userInfo && userInfo.name"
        class="m-nav-login"
        :style="{ color: colorText, background: headerColor }"
        @click="handleOpenNav"
      >
        <nuxt-link
          :to="{ name: 'user' }"
          class="nav-link-head"
          :style="{ color: colorText }"
        >
          <img :src="userInfo.image_url" alt="head" />
        </nuxt-link>
        <div class="nav-link-head-out" @click="handleSignOut('out')">
          <i class="iconfont el-out"></i>
          <span>{{ $t('nav.out') }}</span>
        </div>
      </div>
      <div
        v-else
        class="m-nav-login m-nav-login-item"
        :style="{ color: colorText, background: headerColor }"
        @click="handleOpenNav"
      >
        <nuxt-link
          :to="{ name: 'login' }"
          :style="{
            color: colorText
          }"
        >
          {{ $t('nav.log') }}
        </nuxt-link>
        <nuxt-link :to="{ name: 'login' }" class="nav-login-primary btn-primary"
          >Join Airdrop</nuxt-link
        >
      </div>
    </aside>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      isAside: false,
      activeName: '',
      arrNavAll: [],
      arrSingle: [
        {
          title: 'nav.bass',
          path: '/baas-marketplace',
          key: 'm-2'
        },
        /*  {
          title: 'nav.development',
          path: '/developer',
          key: 'm-5'
        }, */
        {
          title: 'nav.about',
          path: '/contact',
          key: 'm-6'
        }
      ],
      arrNav: [
        {
          title: 'nav.features',
          path: '/feature',
          key: 'm-1',
          children: [
            {
              title: 'nav.performance',
              key: 'm-1-1',
              content: [
                {
                  title: 'nav.high',
                  describe: 'nav.use',
                  icon: 'iconfont el-technology',
                  path: '/feature/architecture',
                  key: 'm-1-1-1'
                },
                {
                  title: 'nav.security',
                  describe: 'nav.encryption',
                  icon: 'iconfont el-protection',
                  path: '/feature/security-privacy',
                  key: 'm-1-1-2'
                },
                {
                  title: 'nav.virtual',
                  describe: 'nav.eth',
                  icon: 'iconfont el-private',
                  path: '/feature/virtual-macine',
                  key: 'm-1-1-3'
                }
              ]
            },
            {
              title: 'nav.break',
              key: 'm-1-2',
              content: [
                {
                  title: 'nav.chain',
                  describe: 'nav.cross-chain',
                  icon: 'iconfont el-cloud-computing',
                  path: '/feature/cross-chain',
                  key: 'm-1-2-1'
                },
                {
                  title: 'nav.tran',
                  describe: 'nav.improve',
                  icon: 'iconfont el-elastic',
                  path: '/feature/sharding',
                  key: 'm-1-2-2'
                },

                {
                  title: 'nav.clb',
                  describe: 'nav.basis',
                  icon: 'iconfont el-transfer',
                  path: '/feature/clb',
                  key: 'm-1-2-3'
                }
              ]
            },
            {
              title: 'nav.user',
              key: 'm-1-3',
              content: [
                {
                  title: 'nav.multi',
                  describe: 'nav.ledger',
                  icon: 'iconfont el-algorithm',
                  path: '/feature/multisig',
                  key: 'm-1-3-1'
                },
                {
                  title: 'nav.private',
                  describe: 'nav.fouds',
                  icon: 'iconfont el-private',
                  path: '/feature/privite-transaction',
                  key: 'm-1-3-2'
                },
                {
                  title: 'nav.self',
                  describe: 'nav.gas',
                  icon: 'iconfont el-cloud-computing',
                  path: '/feature/ecolib-governance',
                  key: 'm-1-3-3'
                }
              ]
            }
          ]
        },
        {
          title: 'nav.resource',
          path: '/resource',
          key: 'm-3',
          children: [
            {
              // title: 'resource.project',
              key: 'm-3-1',
              content: [
                {
                  title: 'resource.team',
                  icon: 'iconfont el-a-teamintroduction',
                  path: '/resource/team',
                  key: 'm-3-1-1'
                },
                {
                  title: 'resource.white',
                  icon: 'iconfont el-whitepaper',
                  link: 'https://bit.ly/3pZHrj4',
                  key: 'm-3-1-2'
                },
                {
                  title: 'resource.video',
                  icon: 'iconfont el-video',
                  path: '/resource/video-resources',
                  key: 'm-3-1-3'
                },
                {
                  title: 'resource.document',
                  icon: 'iconfont el-document',
                  link: 'https://github.com/IBAX-io/documentation',
                  key: 'm-3-1-4'
                }
              ]
            },
            {
              // title: 'resource.external',
              key: 'm-3-2',
              content: [
                {
                  title: 'resource.news',
                  icon: 'iconfont el-news',
                  path: '/resource/news',
                  key: 'm-3-2-1'
                },
                /* {
                  title: 'resource.economic',
                  icon: 'iconfont el-algorithm',
                  path: '/resource/economic-model',
                  alt: 'resource.economic'
                }, */
                {
                  title: 'resource.community',
                  icon: 'iconfont el-communities',
                  link: 'https://github.com/IBAX-io/go-ibax/discussions',
                  key: 'm-3-2-2'
                },
                {
                  title: 'resource.download',
                  icon: 'iconfont el-Download',
                  link: 'https://github.com/orgs/IBAX-io/repositories',
                  key: 'm-3-2-3'
                },
                {
                  title: 'resource.economic',
                  icon: 'iconfont el-performance',
                  link: 'https://bit.ly/3Ek5vBM',
                  key: 'm-3-2-4'
                }
              ]
            },
            {
              //  title: 'resource.more',
              key: 'm-3-3',
              content: [
                {
                  title: 'resource.activity',
                  icon: 'iconfont el-activity1',
                  path: '/resource/events',
                  key: 'm-3-3-1'
                }
                /* {
                  title: 'resource.partner',
                  icon: 'iconfont el-partner',
                  path: '/resource/partners',
                  alt: 'resource.partner',
                  key: 'm-3-3-2'
                } */
              ]
            }
          ]
        },
        {
          title: 'nav.solution',
          path: '/solutions',
          key: 'm-4',
          children: [
            {
              key: 'm-4-1',
              content: [
                {
                  title: 'nav.supply',
                  icon: 'iconfont el-supply-chain',
                  path: '/solutions/supply-chain',
                  key: 'm-4-1-1'
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
                  key: 'm-4-2-1'
                }
              ]
            },
            {
              key: 'm-4-3',
              content: [
                {
                  title: 'nav.assets',
                  icon: 'iconfont el-asset-management',
                  path: '/solutions/assets',
                  key: 'm-4-3-1'
                }
              ]
            }
          ]
        },
        {
          title: 'nav.development',
          path: '/solutions',
          key: 'm-5',
          children: [
            {
              key: 'm-5-1',
              content: [
                {
                  title: 'personal.resources',
                  icon: 'iconfont el-supply-chain',
                  path: '/developer/developer-tools',
                  key: 'm-5-1-1'
                }
              ]
            },
            {
              key: 'm-5-2',
              content: [
                {
                  title: 'personal.ecosystem',
                  icon: 'iconfont el-asset-management',
                  path: '/developer/ecosystems',
                  key: 'm-5-2-1'
                }
              ]
            },
            {
              key: 'm-5-3',
              content: [
                {
                  title: 'personal.bounty',
                  icon: 'iconfont el-copyright',
                  path: '/developer/engineering-bounty',
                  key: 'm-5-3-1'
                }
              ]
            },
            {
              key: 'm-5-4',
              content: [
                {
                  title: 'personal.honor',
                  icon: 'iconfont el-copyright',
                  path: '/developer/honor-developers',
                  key: 'm-5-4-1'
                }
              ]
            }
          ]
        },
        {
          title: 'nav.bass',
          path: '/baas-marketplace',
          key: 'm-2'
        },
        {
          title: 'nav.about',
          path: '/contact',
          key: 'm-6'
        }
      ],
      arrUserNav: [
        {
          title: 'personal.center',
          key: 'm-7',
          children: [
            {
              key: 'm-7-1',
              content: [
                {
                  title: 'personal.user',
                  icon: 'iconfont el-gerenzhuye',
                  path: '/user',
                  key: 'm-7-1-1'
                }
              ]
            },
            {
              title: 'personal.airdrop',
              key: 'm-7-2',
              content: [
                {
                  title: 'personal.ret',
                  icon: 'iconfont el-xuanzhuan',
                  path: '/user/retweet',
                  key: 'm-7-2-1'
                },
                {
                  title: 'personal.referrals',
                  icon: 'iconfont el-a-xingzhuang1',
                  path: '/user/share',
                  key: 'm-7-2-2'
                },
                {
                  title: 'personal.ruless',
                  icon: 'iconfont el-guize1',
                  path: '/user/airdrop-rules',
                  key: 'm-7-2-3'
                }
              ]
            },
            {
              title: 'personal.git',
              key: 'm-7-3',
              content: [
                {
                  title: 'personal.account',
                  icon: 'iconfont el-supply-chain',
                  path: '/user/link-github',
                  key: 'm-7-3-1'
                },
                {
                  title: 'personal.commits',
                  icon: 'iconfont el-supply-chain',
                  path: '/user/commits',
                  key: 'm-7-3-2'
                },
                {
                  title: 'personal.gr',
                  icon: 'iconfont el-supply-chain',
                  path: '/user/github-rules',
                  key: 'm-7-3-3'
                }
              ]
            },
            {
              key: 'm-7-4',
              content: [
                {
                  title: 'personal.geti',
                  icon: 'iconfont el-a-xingzhuang1',
                  key: 'm-7-4-1',
                  path: '/user/redeem'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.token);
    if (this.token) {
      this.arrNavAll = this.arrNav.concat(this.arrUserNav);
    } else {
      this.arrNavAll = this.arrNav;
    }
  },
  methods: {
    handleOpenNav() {
      this.isAside = !this.isAside;
      this.activeName = '';
      if (this.isAside) {
        this.$store.commit('handleIsFixed', true);
      }
    },
    handleCloseNav() {
      this.isAside = false;
      this.activeName = '';
    }
  }
};
</script>
