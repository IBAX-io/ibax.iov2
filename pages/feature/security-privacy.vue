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
                {{ $t('bass.privacy') }}
              </p>
              <h2 class="title-h2 animated fadeInUp">{{ $t('bass.go') }}</h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('bass.key') }}
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
            <el-col :xs="23" :lg="7">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 0.5s"
              >
                {{ $t('bass.keep') }}
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                {{ $t('bass.comply') }}
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                {{ $t('bass.data') }}
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
            <el-col :xs="23" :lg="12">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-010"></i>
                <span class="home-new-text"> {{ $t('nav.security') }} </span>
              </p>
              <h2 class="title-h2 wow fadeInUp">{{ $t('bass.bank') }}</h2>
              <p class="wow fadeInUp">
                {{ $t('bass.attribute') }}
              </p>
            </el-col>
            <el-col :xs="23" :lg="10">
              <div class="home-new-img wow fadeInUp">
                <img src="@/assets/images/security.jpg" alt="security" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="security" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-efficiency_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-efficiency"></i>
            <i v-if="lang === 'tw'" class="iconfont el-efficiency_zh"></i>
          </div>
          <!--  <div class="global-h6 wow fadeInUp">
            {{ $t('high.insights') }}
          </div> -->
          <div class="other-center-box wow fadeInUp">
            <strong class="other-center-box-strong">{{
              $t('bass.spire')
            }}</strong>
            {{ $t('bass.attach') }}
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
        <el-col :xs="24" :lg="18">
          <div class="home-new">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="10" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img src="@/assets/images/safe.png" alt="safe" />
                </div>
              </el-col>
              <el-col :xs="24" :lg="12">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-010"></i>
                  <span class="home-new-title-text">
                    {{ $t('bass.built') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('bass.your') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.symmetric') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="10" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img src="@/assets/images/safe.png" alt="safe" />
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
              <el-col :xs="24" :lg="12">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-010"></i>
                  <span class="home-new-text">
                    {{ $t('bass.committed') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('bass.multi') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('bass.own') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="10">
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
    <div id="privacy" class="media-a high-bottom home-architecture">
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
const img1 = require('../../assets/images/guarantee-1.png');
const img2 = require('../../assets/images/guarantee-2.png');
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrTags: [
        {
          label: 'high.authentication',
          name: 'first',
          img: img1
        },
        {
          label: 'high.validation',
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
          icon: 'el-a-007',
          title: 'nav.tran',
          text: 'high.divides',
          link: '/feature/sharding'
        },
        {
          icon: 'el-a-038',
          title: 'nav.with',
          text: 'nav.smart',
          link: '/feature/virtual-macine'
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('nav.security')} | IBAX Network`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('nav.security')} | IBAX Network`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,Mining,Security,Secret,dataSecurity'
        },
        {
          hid: 'description',
          name: 'description',
          content: `Encryption machine to ensure the safety of funds and communicationsThe security of funds and communication is ensured by the encryption machine`
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
          content: `Encryption machine to ensure the safety of funds and communicationsThe security of funds and communication is ensured by the encryption machine`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('nav.security')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `Encryption machine to ensure the safety of funds and communicationsThe security of funds and communication is ensured by the encryption machine`
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
    this.domGlobal.addEventListener('scroll', this.handleSecurityScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener(
      'scroll',
      this.handleSecurityScroll,
      true
    );
  },
  methods: {
    handleSecurityScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('security')
        .getBoundingClientRect().bottom;
      console.log(this.numArchite);
      this.numArchiteBottom = document
        .getElementById('privacy')
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
