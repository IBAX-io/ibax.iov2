<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-11-09 12:03:46
 * @Description: 
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="23" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row
            type="flex"
            :justify="isMobile ? 'center' : 'space-between'"
            align="middle"
          >
            <el-col :xs="21" :lg="18">
              <p class="home-new-text animated fadeInUp">
                {{ $t('bass.authority') }}
              </p>
              <h2 class="title-h2 animated fadeInUp">
                {{ $t('bass.permissions') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('bass.transferring') }}
              </p>
              <!--  <p>{{ $t('bass.downloaded') }}</p> -->
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
            <el-col :xs="24" :lg="8">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 0.5s"
              >
                {{ $t('bass.account') }}
              </div>
            </el-col>
            <el-col :xs="24" :lg="7">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                {{ $t('bass.centralized') }}
              </div>
            </el-col>
            <el-col :xs="24" :lg="8">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                {{ $t('bass.each') }}
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
                <i class="el-iconfont iconfont el-a-059"></i>
                <span class="home-new-text">
                  {{ $t('bass.secur') }}
                </span>
              </p>
              <h2 class="title-h2 wow fadeInUp">{{ $t('bass.wallet') }}</h2>
              <p class="wow fadeInUp">
                {{ $t('bass.insecure') }}
              </p>
            </el-col>
            <el-col :xs="24" :lg="14">
              <div class="home-new-img wow fadeInUp">
                <img src="@/assets/images/wallet.png" alt="wallet" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="concept" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-efficiency_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-efficiency"></i>
            <i v-if="lang === 'tw'" class="iconfont el-efficiency_zh"></i>
          </div>
          <div class="other-center-box wow fadeInUp">
            <span class="other-center-box-strong">{{
              $t('bass.concept')
            }}</span>
            <span>{{ $t('bass.maintains') }}</span>
          </div>
          <div class="other-center-bottom wow fadeInUp">
            <strong class="other-center-bottom-strong">Rakib Sajid</strong>
            <span class="other-center-bottom-text">{{
              $t('resourse.phd')
            }}</span>
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
                  <img src="@/assets/images/notice.png" alt="notice" />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-001"></i>
                  <span class="home-new-text">
                    {{ $t('bass.notifce') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('bass.signed') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.signature') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img src="@/assets/images/notice.png" alt="notice" />
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
                  <i class="el-iconfont iconfont el-a-034"></i>
                  <span class="home-new-text">
                    {{ $t('bass.to') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('bass.safer') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.compared') }}
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
    <div id="smart" class="media-a high-bottom home-architecture">
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
const img1 = require('../../assets/images/comparison-1.png');
const img2 = require('../../assets/images/comparison-2.png');
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrTags: [
        {
          label: 'bass.cold',
          name: 'first',
          img: img1
        },
        {
          label: 'bass.mul',
          name: 'second',
          img: img2
        }
      ],
      arrMore: [
        {
          icon: 'el-a-003',
          title: 'nav.private',
          text: 'nav.fouds',
          link: '/feature/privite-transaction'
        },
        {
          icon: 'el-a-038',
          title: 'nav.with',
          text: 'nav.smart',
          link: '/feature/virtual-macine'
        },
        {
          icon: 'el-a-007',
          title: 'nav.tran',
          text: 'high.divides',
          link: '/feature/sharding'
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('nav.multi')} | IBAX`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.$t('nav.multi')} | IBAX`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,Multisignature'
        },
        {
          hid: 'description',
          name: 'description',
          content: `Decentralized ledger authority`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `Decentralized ledger authority`
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
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
        .getElementById('concept')
        .getBoundingClientRect().bottom;
      this.numArchiteBottom = document
        .getElementById('smart')
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
