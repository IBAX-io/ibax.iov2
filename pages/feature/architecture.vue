<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="home-new" style="margin-top: 30px">
          <el-row type="flex" :justify="isMobile ? 'center' : 'space-between'">
            <el-col :xs="21" :lg="18">
              <p class="home-new-text animated fadeInUp">
                {{ $t('high.technical') }}
              </p>
              <h2 class="title-h2 animated fadeInUp">{{ $t('high.chain') }}</h2>
              <p class="home-new-p animated fadeInUp">{{ $t('high.low') }}</p>
              <p class="home-new-bottom animated fadeIn">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('high.start') }}</a
                >
              </p>
            </el-col>
            <!-- <el-col :xs="23" :lg="6">
              <div
                class="home-new-img animated fadeIn"
                style="animation-duration: 3s"
              >
                <img src="@/assets/image/diamond.svg" mode="powerful" />
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
            <el-col :xs="21" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 0.5s"
              >
                <div class="other-easeplus-strong">
                  {{ $t('high.globalization') }}
                </div>
                <div>{{ $t('high.to') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="7">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                <div class="other-easeplus-strong">{{ $t('high.compat') }}</div>
                <div>{{ $t('high.rich') }}</div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="8">
              <div
                class="other-easeplus wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                <div class="other-easeplus-strong">{{ $t('high.use') }}</div>
                <div>{{ $t('high.provide') }}</div>
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
            <el-col :xs="24" :lg="10">
              <p class="home-new-title wow fadeInUp">
                <i class="el-iconfont iconfont el-a-011"></i>
                <span class="home-new-text">
                  {{ $t('high.innovation') }}
                </span>
              </p>
              <h2 class="title-h2 wow fadeInUp">{{ $t('high.database') }}</h2>
              <p class="wow fadeInUp">{{ $t('high.postgreSQL') }}</p>
            </el-col>
            <el-col :xs="24" :lg="10">
              <div class="home-new-img wow fadeInUp">
                <img
                  src="../../assets/images/architecture-1.jpg"
                  alt="architecture-1"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="archite" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-techinsights_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-techinsights"></i>
            <i v-if="lang === 'tw'" class="iconfont el-techinsights_zh"></i>
          </div>
          <!--  <div class="global-h6 wow fadeInUp">
            {{ $t('high.insights') }}
          </div> -->
          <div class="other-center-box wow fadeInUp">
            <strong class="other-center-box-strong">{{
              $t('high.team')
            }}</strong>
            <span>{{ $t('high.never') }}</span>
          </div>
          <div class="other-center-bottom wow fadeInUp">
            <strong class="other-center-bottom-strong">Stuart Nichols</strong>
            <span class="other-center-bottom-text">IBAX CEO</span>
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
                  <img
                    src="../../assets/images/architecture-2.png"
                    alt="architecture-2"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="10">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-019"></i>
                  <span class="home-new-text">
                    {{ $t('high.high') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('high.storage') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('feature.high') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('feature.we') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="10" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="../../assets/images/architecture-2.png"
                    alt="architecture-2"
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
              <el-col :xs="24" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('feature.hor') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('feature.honor') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('feature.any') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14">
                <div class="home-new-img wow fadeInUp">
                  <img src="../../assets/images/node-1.jpg" alt="node-1" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="mdeia media-a">
      <el-row type="flex" justify="center" class="el-row-wrap">
        <el-col :xs="24" :lg="18">
          <p
            class="home-new-title wow fadeInUp"
            :style="{ 'justify-content': isMobile ? 'flex-start' : 'center' }"
          >
            <i class="el-iconfont iconfont el-a-035"></i>
            <span class="home-new-text"> {{ $t('feature.node') }} </span>
          </p>
          <h2
            class="title-h2 wow fadeInUp"
            :style="{ 'text-align': isMobile ? 'left' : 'center' }"
          >
            {{ $t('feature.guard') }}
          </h2>
          <p class="wow fadeInUp">
            {{ $t('feature.as') }}
          </p>
          <p class="wow fadeInUp">
            {{ $t('feature.ecological') }}
          </p>
          <div class="media-a-img wow fadeInUp">
            <img src="../../assets/images/node-2.jpg" alt="node-2" />
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
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">
                  {{ $t('feature.casting') }}
                </h2>
                <p class="wow fadeInUp">
                  {{ $t('high.etc') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('high.reward') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('high.running') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14">
                <div class="home-new-img wow fadeInUp">
                  <img src="../../assets/images/node-3.jpg" alt="node-3" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="home-new wow fadeInUp">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="14" class="hidden-sm-and-down">
                <div class="home-new-img">
                  <img src="../../assets/images/node-4.png" alt="node4" />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('high.sub') }}</h2>
                <p class="wow fadeInUp">{{ $t('high.node') }}</p>
                <p class="wow fadeInUp">{{ $t('high.can') }}</p>
              </el-col>
              <el-col :xs="24" :lg="14" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img src="../../assets/images/node-4.png" alt="node-4" />
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
                  <i class="el-iconfont iconfont el-a-035"></i>
                  <span class="home-new-text">
                    {{ $t('feature.node') }}
                  </span>
                </p>
                <h2 class="title-h2 wow fadeInUp">{{ $t('nav.cross') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('high.of') }}
                </p>
                <p class="wow fadeInUp">{{ $t('high.runs') }}</p>
                <p class="wow fadeInUp">{{ $t('high.meet') }}</p>
              </el-col>
              <el-col :xs="24" :lg="14">
                <div class="home-new-img wow fadeInUp">
                  <img src="../../assets/images/node-5.jpg" alt="node-1" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="architeBottom" class="media-a high-bottom home-architecture">
      <!-- computer -->
      <el-row v-if="!isMobile" type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h3 class="global-h4 wow fadeInUp">{{ $t('feature.about') }}</h3>
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
        <client-only>
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
        </client-only>
      </template>
    </div>
    <!-- bottom -->
    <page-bottom class="lime"></page-bottom>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      arrMore: [
        {
          icon: 'el-a-007',
          title: 'nav.tran',
          text: 'high.divides',
          link: '/feature/sharding'
        },
        {
          icon: 'el-a-042',
          title: 'nav.multi',
          text: 'nav.dec',
          link: '/feature/multisig'
        },
        {
          icon: 'el-a-056',
          title: 'high.cross-chain',
          text: 'nav.decen',
          link: '/feature/cross-chain'
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('nav.high')} | IBAX`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.$t('nav.high')} | IBAX`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BaaS,Mining,PostgreSQL, Honor Node,Guardian Node,Mint Node,Sub Nodes, CLB (CROSS LEDGERS BASE),Smart contracts,ecoLib,ecoGroup, Weaver'
        },
        {
          hid: 'description',
          name: 'description',
          content: `Use database to improve execution efficiency`
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
          content: `Use database to improve execution efficiency`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('nav.high')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `Use database to improve execution efficiency`
        }
      ],
      numArchite: 0,
      numArchiteBottom: 0
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
    this.domGlobal.addEventListener('scroll', this.handleArchiteScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener(
      'scroll',
      this.handleArchiteScroll,
      true
    );
  },
  methods: {
    handleArchiteScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('archite')
        .getBoundingClientRect().bottom;
      this.numArchiteBottom = document
        .getElementById('architeBottom')
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
