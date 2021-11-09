<!--
 * @Author: abc
 * @Date: 2021-08-17 11:00:37
 * @LastEditors: abc
 * @LastEditTime: 2021-11-09 10:52:21
 * @Description: mobile nav
-->
<template>
  <div class="m-nav">
    <nuxt-link :to="{ name: 'index' }" class="m-nav-index">
      <i class="iconfont el-logo1" :style="{ color: colorText }"></i>
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
          'el-gongnenghe': !isAside,
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
        <el-collapse-item
          v-for="item in arrNav"
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
          v-for="item in arrSingle"
          :key="item.key"
          :to="item.path"
          :style="{ color: colorText }"
          class="m-nav-aside-title-single"
          >{{ $t(item.title) }}</nuxt-link
        >
      </el-collapse>
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
      arrSingle: [
        {
          title: 'nav.bass',
          path: '/baas-marketplace',
          key: 'm-2'
        },
        {
          title: 'nav.development',
          path: '/developer',
          key: 'm-5'
        },
        {
          title: 'nav.about',
          path: '/about',
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
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleOpenNav() {
      this.isAside = !this.isAside;
      this.activeName = '';
      if (this.isAside) {
        this.$store.commit('handleIsFixed', true);
      }
    }
  }
};
</script>
