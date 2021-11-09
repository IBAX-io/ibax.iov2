<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-11-09 18:25:36
 * @Description:
-->
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
                {{ $t('featrue.ecolog') }}
              </p>
              <h2 class="title-h2 animated fadeInUp">
                {{ $t('feature.realize') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('feature.take') }}
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
            <!--  <el-col :xs="23" :lg="6">
              <div class="home-new-img animated fadeInUp">
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
                  {{ $t('feature.consensus') }}
                </div>
                <div>{{ $t('feature.costs') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('feature.issuing') }}
                </div>
                <div>{{ $t('feature.economic') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('feature.mining') }}
                </div>
                <div>{{ $t('feature.incentives') }}</div>
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
            <el-col :xs="23" :lg="8">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-054"></i>
                <span class="home-new-text">
                  {{ $t('feature.model') }}
                </span>
              </p>
              <h2 class="title-h2 wow fadeInUp">{{ $t('feature.eco') }}</h2>
              <p class="wow fadeInUp">
                {{ $t('feature.choose') }}
              </p>
            </el-col>
            <el-col :xs="23" :lg="14">
              <div class="home-new-img wow fadeInUp">
                <img
                  src="@/assets/images/governance-1.jpg"
                  alt="governance-1"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="implement" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-efficiency_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-efficiency"></i>
            <i v-if="lang === 'tw'" class="iconfont el-efficiency_zh"></i>
          </div>
          <div class="other-center-box wow fadeInUp">
            <strong class="other-center-box-strong">{{
              $t('feature.business')
            }}</strong>
            <span>{{ $t('feature.tokens') }}</span>
          </div>
          <div class="other-center-bottom wow fadeInUp">
            <strong class="other-center-bottom-strong">Priscilla Wang</strong>
            <span class="other-center-bottom-text">{{
              $t('resourse.public')
            }}</span>
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
              <el-col :xs="23" :lg="14" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/governance-2.jpg"
                    alt="governance-2"
                  />
                </div>
              </el-col>
              <el-col :xs="23" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-024"></i>
                  <span class="home-new-text">
                    {{ $t('feature.economy') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('feature.gas') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('feature.transactions') }}
                </p>
              </el-col>
              <el-col :xs="23" :lg="14" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/governance-2.jpg"
                    alt="governance-2"
                  />
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
              <el-col :xs="23" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-010"></i>
                  <span class="home-new-text">
                    {{ $t('feature.expansion') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('feature.based') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('feature.use') }}
                </p>
              </el-col>
              <el-col :xs="23" :lg="14">
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
    <div id="refBottom" class="media-a high-bottom home-architecture">
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
const img1 = require('../../assets/images/governance-3-1.jpg');
const img2 = require('../../assets/images/governance-3-2.jpg');
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrTags: [
        {
          label: 'feature.ecology',
          name: 'first',
          img: img1
        },
        {
          label: 'feature.governance',
          name: 'second',
          img: img2
        }
      ],
      refBottom: '',
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
      title: `${this.$t('nav.self')} | IBAX Network`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,DAO,GAS,ecoLib'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.$t('nav.self')} | IBAX Network`
        },
        {
          hid: 'description',
          name: 'description',
          content: `Ecological Self-Governance (DAO) and Gas Charge`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `Ecological Self-Governance (DAO) and Gas Charge`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.$t('nav.self')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Ecological Self-Governance (DAO) and Gas Charge`
        }
      ],
      numImplement: 0,
      numBottom: 0
    };
  },
  computed: {},
  watch: {},
  created() {},
  beforeDestroy() {
    this.domGlobal.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.$nextTick(() => {
      this.domGlobal.addEventListener('scroll', () => {
        this.handleThrottle(this.handleAlwaysScroll, 250);
      });
    });
  },
  methods: {
    handleAlwaysScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('implement')
        .getBoundingClientRect().bottom;
      console.log(this.numArchite);
      this.numArchiteBottom = document
        .getElementById('refBottom')
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
