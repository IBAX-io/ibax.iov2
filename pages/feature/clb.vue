<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row
            type="flex"
            :justify="isMobile ? 'center' : 'space-between'"
            align="middle"
          >
            <el-col :xs="21" :lg="18">
              <p class="home-new-text animated fadeInUp">
                {{ $t('bass.off') }}
              </p>
              <h2 class="title-h2 animated fadeInUp">
                {{ $t('bass.closed') }}
              </h2>
              <p class="home-new-p animated fadeInUp">{{ $t('bass.order') }}</p>
              <p class="home-new-p animated fadeInUp">{{ $t('bass.also') }}</p>
              <p class="home-new-bottom animated fadeInUp">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('high.start') }}</a
                >
              </p>
            </el-col>
          </el-row>
        </div>
        <div class="other other-middle">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            class="el-row-wrap"
          >
            <el-col :xs="24" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 0.5s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('bass.in') }}
                </div>
                <div>{{ $t('bass.enrich') }}</div>
              </div>
            </el-col>
            <el-col :xs="24" :lg="7">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('bass.choices') }}
                </div>
                <div>{{ $t('bass.opportunities') }}</div>
              </div>
            </el-col>
            <el-col :xs="24" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('bass.support') }}
                </div>
                <div>{{ $t('bass.sup') }}</div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-new">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            class="el-row-wrap"
          >
            <el-col :xs="24" :lg="11">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-054"></i>
                <span class="home-new-text">
                  {{ $t('bass.diversification') }}
                </span>
              </p>
              <h2 class="title-h2 wow fadeInUp">{{ $t('bass.refer') }}</h2>
              <p class="wow fadeInUp">
                {{ $t('bass.weather') }}
              </p>
            </el-col>
            <el-col :xs="24" :lg="11">
              <div class="home-new-img wow fadeInUp">
                <img src="@/assets/images/data.jpg" alt="data" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="blockchain" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-efficiency_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-efficiency"></i>
            <i v-if="lang === 'tw'" class="iconfont el-efficiency_zh"></i>
          </div>
          <div class="other-center-box wow fadeInUp">
            <span class="other-center-box-strong">{{
              $t('bass.blockchain')
            }}</span>
            <span>{{ $t('bass.verification') }}</span>
          </div>
          <div class="other-center-bottom wow fadeInUp">
            <strong class="other-center-bottom-strong">Simon Hemmrich</strong>
            <span class="other-center-bottom-text">Senior Consultant</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="11" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img src="@/assets/images/light.png" alt="light" />
                </div>
              </el-col>
              <el-col :xs="24" :lg="11">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-024"></i>
                  <span class="home-new-title-text">
                    {{ $t('bass.light') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('bass.rapid') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.there') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="11" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img src="@/assets/images/light.png" alt="light" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <div class="home-new">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="23" :lg="11">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-010"></i>
                  <span class="home-new-text">
                    {{ $t('bass.en') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('bass.with') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.when') }}
                </p>
              </el-col>
              <el-col :xs="23" :lg="11">
                <div class="home-tag wow fadeInUp">
                  <el-tabs v-model="activeName" :tab-position="tabPosition">
                    <el-tab-pane
                      v-for="item in arrTags"
                      :key="item.name"
                      :label="$t(item.label)"
                      :name="item.name"
                    >
                      <div class="home-tag-img wow fadeInUp">
                        <img :src="item.img" :alt="item.label" />
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="decen" class="media-a high-bottom home-architecture">
      <!-- computer -->
      <el-row v-if="!isMobile" type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h3 class="global-h4">{{ $t('feature.about') }}</h3>
          <el-row type="flex" justify="space-between">
            <el-col
              v-for="(item, index) in arrMore"
              :key="index"
              :xs="23"
              :lg="7"
            >
              <div class="high-bottom-box">
                <div class="high-bottom-img wow fadeInUp">
                  <i class="el-iconfont iconfont" :class="item.icon"></i>
                </div>
                <h4 class="high-bottom-h4 wow fadeInUp">
                  {{ $t(item.title) }}
                </h4>
                <p class="high-bottom-h6 wow fadeInUp">
                  {{ $t(item.text) }}
                </p>
                <nuxt-link
                  class="high-bottom-more link wow fadeInUp"
                  :to="item.link"
                >
                  <span>{{ $t('bass.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- moblie -->
      <template v-else>
        <h4 class="global-h4">{{ $t('feature.about') }}</h4>
        <el-carousel indicator-position="outside" arrow="never">
          <el-carousel-item v-for="(item, index) in arrMore" :key="index">
            <div class="high-bottom-box">
              <div class="high-bottom-img wow fadeInUp">
                <i class="el-iconfont iconfont" :class="item.icon"></i>
              </div>
              <h4 class="high-bottom-h4 wow fadeInUp">
                {{ $t(item.title) }}
              </h4>
              <p class="high-bottom-h6 wow fadeInUp">
                {{ $t(item.text) }}
              </p>
              <nuxt-link
                class="high-bottom-more link wow fadeInUp"
                :to="item.link"
              >
                <span>{{ $t('bass.learn') }}</span>
                <i class="el-icon-right"></i>
              </nuxt-link>
            </div>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <!-- bottom -->
    <page-bottom class="lime"></page-bottom>
  </div>
</template>
<script>
const img1 = require('../../assets/images/clb-1.png');
const img2 = require('../../assets/images/clb-2.png');
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrTags: [
        {
          label: 'bass.oper',
          name: 'first',
          img: img1
        },
        {
          label: 'bass.on',
          name: 'second',
          img: img2
        }
      ],
      arrMore: [
        {
          icon: 'el-a-001',
          title: 'high.cross-chain',
          text: 'nav.decen',
          link: '/feature/cross-chain'
        },
        {
          icon: 'el-a-052',
          title: 'high.lead',
          text: 'nav.each',
          link: '/feature/architecture'
        },
        {
          icon: 'el-a-003',
          title: 'nav.private',
          text: 'nav.fouds',
          link: '/feature/privite-transaction'
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('nav.clb')} | IBAX Network`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,CLB,HybridSmartContracts'
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
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('nav.clb')} | IBAX Network`
        },
        {
          hid: 'description',
          name: 'description',
          content: `The CLB is a gateway for data to cross-chain as well as a bridge for assets to cross-chain, and you can use it to get data outside blockchain to use it inside blockchain`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `The CLB is a gateway for data to cross-chain as well as a bridge for assets to cross-chain, and you can use it to get data outside blockchain to use it inside blockchain`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('nav.clb')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `The CLB is a gateway for data to cross-chain as well as a bridge for assets to cross-chain, and you can use it to get data outside blockchain to use it inside blockchain`
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const obj = { headerColor: '#274235', color: '#fff' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleIsTop', true);
    this.$store.commit('handleIsFixed', false);
    this.$store.commit('handleChangeClass', 'subMenu--horizontal');
    this.$nextTick(() => {
      this.domGlobal = document.getElementById('global').firstChild;
      this.domHeaderTop = document.getElementById('headerTop');
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
    this.domGlobal.addEventListener('scroll', this.handleDecenScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleDecenScroll, true);
  },
  methods: {
    handleDecenScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('blockchain')
        .getBoundingClientRect().bottom;
      console.log(this.numArchite);
      this.numArchiteBottom = document
        .getElementById('decen')
        .getBoundingClientRect().bottom;
      if (this.numArchite <= 0 && this.numArchiteBottom > 0) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else if (this.numArchiteBottom <= 0) {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      } else {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      }
    }
  }
};
</script>
