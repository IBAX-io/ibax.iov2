<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-11-19 19:12:45
 * @Description: virtual macine
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="home-new" style="margin-top: 30px">
          <el-row
            type="flex"
            :justify="isMobile ? 'center' : 'space-between'"
            align="middle"
          >
            <el-col :xs="21" :lg="18">
              <p class="home-new-text animated fadeInUp">
                {{ $t('high.technical') }}
              </p>
              <h2 class="title-h2 animated fadeInUp">
                {{ $t('home.multiple') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('nav.smart') }}
              </p>
              <p class="home-new-bottom animated fadeInUp">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('high.start') }}</a
                >
              </p>
            </el-col>
            <!-- <el-col :xs="23" :lg="6">
              <div class="home-new-img">
                <img src="../../assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col> -->
          </el-row>
        </div>
        <div class="other other-middle">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            class="el-row-wrap"
          >
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 0.5s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('high.most') }}
                </div>
                <div>{{ $t('high.engine') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                <div class="other-easeplus-strong">{{ $t('high.one') }}</div>
                <div>{{ $t('high.chains') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('high.contract') }}
                </div>
                <div>{{ $t('high.trigger') }}</div>
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
            <el-col :xs="24" :lg="8">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-042"></i>
                <span class="home-new-text">{{ $t('high.editor') }} </span>
              </p>
              <h2 class="title-h2 wow fadeInUp">{{ $t('high.simple') }}</h2>
              <p class="wow fadeInUp">
                {{ $t('home.system') }}
              </p>
            </el-col>
            <el-col :xs="24" :lg="14">
              <div class="home-new-img wow fadeInUp">
                <img src="../../assets/images/gif/edit.gif" alt="edit" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="most" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-viewpoint_zh"></i>
            <i v-if="lang === 'en'" class="iconfont el-viewpoint"></i>
            <i v-if="lang === 'tw'" class="iconfont el-viewpoint_tw"></i>
          </div>
          <div class="other-center-box wow fadeInUp">
            <strong class="other-center-box-strong">{{
              $t('home.basic')
            }}</strong>
            {{ $t('home.important') }}
          </div>
          <div class="other-center-bottom wow fadeInUp">
            <strong class="other-center-bottom-strong">Alan Mclvor</strong>
            <span class="other-center-bottom-text">COO</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="home-new">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="14" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img src="../../assets/images/gif/import.gif" alt="import" />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-051"></i>
                  <span class="home-new-text">
                    {{ $t('high.cont') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('high.from') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.weaver') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img src="../../assets/images/gif/import.gif" alt="import" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="home-new">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-043"></i>
                  <span class="home-new-title-text">
                    {{ $t('bass.manager') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('bass.panel') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.provides') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14">
                <div class="home-tag wow fadeInUp">
                  <el-tabs v-model="activeName" :tab-position="tabPosition">
                    <el-tab-pane
                      v-for="item in arrTags"
                      :key="item.name"
                      :label="$t(item.label)"
                      :name="item.name"
                    >
                      <div class="home-tag-img">
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
    <div id="lead" class="media-a high-bottom home-architecture">
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
const img1 = require('../../assets/images/virtual-3-1.jpg');
const img2 = require('../../assets/images/virtual-3-2.jpg');
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrTags: [
        {
          label: 'bass.local',
          name: 'first',
          img: img1
        },
        {
          label: 'bass.security',
          name: 'second',
          img: img2
        }
      ],
      arrMore: [
        {
          icon: 'el-a-052',
          title: 'high.lead',
          text: 'nav.each',
          link: '/feature/architecture'
        },
        {
          icon: 'el-a-001',
          title: 'high.cross-chain',
          text: 'nav.decen',
          link: '/feature/cross-chain'
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
      title: `${this.$t('nav.virtual')} | IBAX Network`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BaaS,Mining,PostgreSQL, Honor Node,Guardian Node,Mint Node,Sub Nodes, CLB (CROSS LEDGERS BASE),Smart contracts,ecoLib,ecoGroup, Weaver,Oracle,Solidity,Go,Rust,DAO'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('nav.virtual')} | IBAX Network`
        },
        {
          hid: 'description',
          name: 'description',
          content: `Smart contracts of Ethereum and Binance Chain are seamlessly connected`
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
          hid: 'og:description',
          property: 'og:description',
          content: `Smart contracts of Ethereum and Binance Chain are seamlessly connected`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('nav.virtual')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `Smart contracts of Ethereum and Binance Chain are seamlessly connected`
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
    this.domGlobal.addEventListener('scroll', this.handleMostScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleMostScroll, true);
  },
  methods: {
    handleMostScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('most')
        .getBoundingClientRect().bottom;
      this.numArchiteBottom = document
        .getElementById('lead')
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
