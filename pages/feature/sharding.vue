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
                {{ $t('high.technical') }}
              </p>
              <h2 class="title-h2 animated fadeInUp">
                {{ $t('bass.improve') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('bass.transaction') }}
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
          </el-row>
        </div>
        <div class="other other-middle">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            class="el-row-wrap"
          >
            <el-col :xs="24" :lg="6">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 0.5s"
              >
                {{ $t('bass.registered') }}
              </div>
            </el-col>
            <el-col :xs="24" :lg="6">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                {{ $t('bass.sharding') }}
              </div>
            </el-col>
            <el-col :xs="24" :lg="6">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                {{ $t('bass.shards') }}
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
                <i class="el-iconfont iconfont el-a-049"></i>
                <span class="home-new-title-text"> {{ $t('bass.work') }} </span>
              </p>
              <h2 class="title-h2 wow fadeInUp">{{ $t('bass.prove') }}</h2>
              <p>
                {{ $t('bass.global') }}
              </p>
            </el-col>
            <el-col :xs="24" :lg="11">
              <div class="home-new-img wow fadeInUp">
                <img
                  src="@/assets/images/fragmentation.png"
                  alt="fragmentation"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="solve" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-efficiency_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-efficiency"></i>
            <i v-if="lang === 'tw'" class="iconfont el-efficiency_zh"></i>
          </div>
          <div class="other-center-box wow fadeInUp">
            <span class="other-center-box-strong">{{ $t('bass.solve') }}</span>
            <span>{{ $t('bass.thinking') }}</span>
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
              <el-col :xs="24" :lg="11" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/transaction.png"
                    alt="transaction"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="11">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-007"></i>
                  <span class="home-new-text">
                    {{ $t('bass.actions') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('bass.not') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.whether') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="11" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/transaction.png"
                    alt="transaction"
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
        <el-col :xs="24" :lg="18">
          <div class="home-new">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="11">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-031"></i>
                  <span class="home-new-text">
                    {{ $t('bass.same') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('bass.controls') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.principle') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="11">
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
    <div id="multi" class="media-a high-bottom home-architecture">
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
const img1 = require('../../assets/images/chain-1.png');
const img2 = require('../../assets/images/chain-2.png');
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrTags: [
        {
          label: 'bass.honor',
          name: 'first',
          img: img1
        },
        {
          label: 'nav.tran',
          name: 'second',
          img: img2
        }
      ],
      arrMore: [
        {
          icon: 'el-a-031',
          title: 'nav.multi',
          text: 'nav.dec',
          link: '/feature/virtual-macine'
        },
        {
          icon: 'el-a-038',
          title: 'nav.with',
          text: 'nav.smart',
          link: '/feature/virtual-macine'
        },
        {
          icon: 'el-a-010',
          title: 'nav.security',
          text: 'feature.encryption',
          link: '/feature/security-privacy'
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('nav.tran')} | IBAX Network`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain BaaS,Mining,Sharding'
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
          content: `${this.$t('nav.tran')} | IBAX Network`
        },
        {
          hid: 'description',
          name: 'description',
          content: `Improve transaction efficiency`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Improve transaction efficiency`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('nav.tran')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `Improve transaction efficiency`
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
    this.domGlobal.addEventListener('scroll', this.handleSolveScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleSolveScroll, true);
  },
  methods: {
    handleSolveScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('solve')
        .getBoundingClientRect().bottom;
      console.log(this.numArchite);
      this.numArchiteBottom = document
        .getElementById('multi')
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
