<template>
  <div>
    <el-row type="flex" justify="space-between" class="el-row-wrap">
      <el-col :xs="24" :lg="3">
        <div class="nav-index nav-logo">
          <nuxt-link :to="{ name: 'index' }">
            <i class="iconfont el-logo1"></i>
          </nuxt-link>
        </div>
      </el-col>
      <el-col :xs="12" :lg="5">
        <h6 class="title-h6">{{ $t('footer.feature') }}</h6>
        <div v-for="item in arrFeature" :key="item.key" class="footer-link">
          <nuxt-link :to="{ path: item.key }">
            {{ $t(item.title) }}
          </nuxt-link>
        </div>
      </el-col>
      <el-col :xs="12" :lg="5">
        <h6 class="title-h6">{{ $t('nav.bass') }}</h6>
        <div v-for="item in arrBass" :key="item.key" class="footer-link">
          <nuxt-link :to="{ path: item.key }">
            {{ $t(item.title) }}
          </nuxt-link>
        </div>
      </el-col>
      <el-col :xs="12" :lg="5">
        <h6 class="title-h6">{{ $t('nav.resource') }}</h6>
        <div v-for="item in arrResource" :key="item.key" class="footer-link">
          <nuxt-link v-if="item.path" :to="{ path: item.path }">
            {{ $t(item.title) }}
          </nuxt-link>
          <a v-if="item.link" :href="item.link" target="_blank">
            {{ $t(item.title) }}
          </a>
        </div>
      </el-col>
      <el-col :xs="12" :lg="5">
        <h6 class="title-h6">{{ $t('nav.solution') }}</h6>
        <div v-for="item in arrSolution" :key="item.path" class="footer-link">
          <nuxt-link :to="{ path: item.path }">
            {{ $t(item.title) }}
          </nuxt-link>
        </div>
      </el-col>
      <el-col :xs="12" :lg="5">
        <h6 class="title-h6">{{ $t('nav.development') }}</h6>
        <div v-for="item in arrDevelop" :key="item.path" class="footer-link">
          <nuxt-link :to="{ path: item.path }">
            {{ $t(item.title) }}
          </nuxt-link>
        </div>
      </el-col>
      <el-col :xs="12" :lg="5">
        <h6 class="title-h6">
          {{ $t('footer.more') }}
        </h6>
        <div v-for="item in arrAbout" :key="item.path" class="footer-link">
          <nuxt-link :to="{ path: item.path }">
            {{ $t(item.title) }}
          </nuxt-link>
        </div>
      </el-col>
    </el-row>
    <div class="footer-icon">
      <div class="footer-icon-content">
        <a href="https://www.facebook.com/IBAXNetwork" target="_blank">
          <i class="iconfont el-facebook"></i>
        </a>
        <a href="https://github.com/IBAX-io" target="_blank">
          <i class="iconfont el-github"></i>
        </a>
        <a href="https://medium.com/@ibaxnetwork" target="_blank">
          <i class="iconfont el-medium"></i>
        </a>
        <a href="https://twitter.com/IbaxNetwork" target="_blank">
          <i class="iconfont el-twitter"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC-oneUwzz01xaCkFTTyR0QQ/featured"
          target="_blank"
        >
          <i class="iconfont el-youtube"></i>
        </a>
        <a href="https://t.me/IBAXNetwork" target="_blank">
          <i class="iconfont el-telegram"></i>
        </a>
        <a href="https://www.linkedin.com/company/ibaxio/" target="_blank">
          <i class="iconfont el-linkedin"></i>
        </a>
        <a href="https://discord.gg/zRX6Mwafya" target="_blank">
          <i class="iconfont el-discord"></i>
        </a>
      </div>
      <div class="footer-icon-text">IBAX FOUNDATION © 2019 - 2022</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      arrFeature: [
        {
          title: 'nav.high',
          key: '/feature/architecture'
        },
        {
          title: 'nav.security',
          key: '/feature/security-privacy'
        },
        {
          title: 'nav.virtual',
          key: '/feature/virtual-macine'
        },
        {
          title: 'nav.chain',
          key: '/feature/cross-chain'
        },
        {
          title: 'nav.tran',
          key: '/feature/sharding'
        },
        {
          title: 'nav.clb',
          key: '/feature/clb'
        },
        {
          title: 'nav.multi',
          key: '/feature/multisig'
        },
        {
          title: 'nav.private',
          key: '/feature/privite-transaction'
        },
        {
          title: 'nav.self',
          key: '/feature/ecolib-governance'
        }
      ],
      arrBass: [
        {
          title: 'market.application',
          key: '/baas-marketplace'
        },
        {
          title: 'bass.ecological',
          key: '/baas-marketplace/ecolibs'
        }
      ],
      arrResource: [
        {
          title: 'resource.team',
          path: '/resource/team',
          key: '1'
        },
        {
          title: 'resource.white',
          // path: '/resource/white-paper',
          link: 'https://github.com/IBAX-io/whitepaper',
          key: '2'
        },
        {
          title: 'resource.video',
          path: '/resource/video-resources',
          key: '3'
        },
        {
          title: 'resource.document',
          // path: '/resource/document',
          link: 'https://github.com/IBAX-io/documentation',
          key: '4'
        },
        {
          title: 'resource.news',
          path: '/resource/news',
          key: '5'
        },
        {
          title: 'resource.community',

          // path: '/resource/community',
          link: 'https://github.com/orgs/IBAX-io/people',
          key: '6'
        },
        {
          title: 'resource.download',
          //  path: '/resource/download',
          link: 'https://github.com/orgs/IBAX-io/repositories',
          key: '7'
        },
        {
          title: 'resource.activity',
          path: '/resource/events',
          key: '8'
        },
        {
          title: 'resource.economic',
          link: 'https://github.com/IBAX-io/whitepaper',
          key: '9'
        }
      ],
      arrSolution: [
        {
          title: 'nav.supply',
          path: '/solutions/supply-chain',
          key: '1'
        },
        {
          title: 'nav.copyright',
          path: '/solutions/copyright',
          key: '2'
        },
        {
          title: 'nav.assets',
          path: '/solutions/assets',
          key: '3'
        }
      ],
      arrDevelop: [
        {
          title: 'personal.resources',
          path: '/developer/developer-tools',
          key: '5-1-1'
        },
        {
          title: 'personal.bounty',
          path: '/developer/engineering-bounty',
          key: '5-2-1'
        },
        {
          title: 'personal.honor',
          path: '/developer/honor-developers',
          key: '5-3-1'
        },
        {
          title: 'personal.ecosystem',
          path: '/developer/ecosystems',
          key: '5-1-2'
        }
      ],
      arrAbout: [
        {
          title: 'nav.about',
          path: '/contact',
          key: '1'
        },
        {
          title: 'server.privacy',
          path: '/server/privacy-policy',
          key: '2'
        },
        {
          title: 'server.term',
          path: '/server/terms-service',
          key: '3'
        },
        {
          title: 'Cookie',
          path: '/server/cookie',
          key: '4'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
