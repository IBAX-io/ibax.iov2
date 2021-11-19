<!--
 * @Author: abc
 * @Date: 2021-08-19 12:24:26
 * @LastEditors: abc
 * @LastEditTime: 2021-11-19 19:50:31
 * @Description: 
-->
<template>
  <div class="bass">
    <div id="anyone" style="background: #274235">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18">
          <div class="bass-top">
            <div class="bass-top-text animated fadeInUp">
              {{ $t('bass.anyone') }}
            </div>
            <h1 class="title-h1 animated fadeInUp">{{ $t('bass.create') }}</h1>
          </div>
          <div class="bass-top-warp">
            <el-row type="flex" justify="space-between" class="el-row-wrap">
              <el-col :xs="24" :lg="7">
                <div class="bass-top-box">
                  <div class="bass-top-box-title">
                    <span class="animated fadeInUp">{{
                      $t('bass.quickly')
                    }}</span>
                  </div>
                  <div class="bass-top-box-content">
                    <h2 class="bass-h2 animated fadeInUp">
                      {{ $t('bass.ecology') }}
                    </h2>
                    <p class="bass-top-box-content-text animated fadeInUp">
                      {{ $t('bass.without') }}
                    </p>
                    <div class="bass-top-box-content-btn animated fadeInUp">
                      <a
                        href="https://weaver.ibax.io/"
                        target="_blank"
                        class="btn btn-primary"
                        >{{ $t('bass.ecolog') }}</a
                      >
                    </div>
                    <div class="bass-top-box-content-blod">
                      <div
                        class="bass-top-box-content-blod-box animated fadeInUp"
                      >
                        <span>{{ $t('bass.creator') }}</span>
                        <strong>{{ $t('bass.identity') }}</strong>
                      </div>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span> {{ $t('bass.obtain') }} </span>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span>{{ $t('bass.define') }}</span>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span>{{ $t('bass.set') }}</span>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span>{{ $t('bass.give') }}</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :lg="7">
                <div class="bass-top-box">
                  <div class="bass-top-box-title">
                    <span class="animated fadeInUp">{{
                      $t('bass.circulation')
                    }}</span>
                  </div>
                  <div class="bass-top-box-content">
                    <h2 class="bass-h2 animated fadeInUp">
                      {{ $t('bass.issue') }}
                    </h2>
                    <p class="bass-top-box-content-text animated fadeInUp">
                      {{ $t('bass.customize') }}
                    </p>
                    <div class="bass-top-box-content-btn animated fadeInUp">
                      <a
                        href="https://weaver.ibax.io/"
                        target="_blank"
                        class="btn btn-primary"
                      >
                        {{ $t('bass.issuance') }}
                      </a>
                    </div>
                    <div class="bass-top-box-content-blod">
                      <div
                        class="bass-top-box-content-blod-box animated fadeInUp"
                      >
                        <span>{{ $t('bass.can') }}</span>
                        <strong>{{ $t('bass.collect') }}</strong>
                      </div>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span> {{ $t('bass.naming') }} </span>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span>{{ $t('bass.logo') }}</span>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span>{{ $t('bass.number') }}</span>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span>{{ $t('bass.incentives') }}</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :lg="7">
                <div class="bass-top-box">
                  <div class="bass-top-box-title">
                    <span>{{ $t('bass.smart') }}</span>
                  </div>
                  <div class="bass-top-box-content">
                    <h2 class="bass-h2 animated fadeInUp">
                      {{ $t('bass.contract') }}
                    </h2>
                    <p class="bass-top-box-content-text animated fadeInUp">
                      {{ $t('bass.use') }}
                    </p>
                    <div class="bass-top-box-content-btn animated fadeInUp">
                      <a
                        href="https://weaver.ibax.io/"
                        target="_blank"
                        class="btn btn-primary"
                      >
                        {{ $t('bass.add') }}
                      </a>
                    </div>
                    <div class="bass-top-box-content-blod">
                      <div
                        class="bass-top-box-content-blod-box animated fadeInUp"
                      >
                        <span>{{ $t('bass.one') }}</span>
                        <strong>{{ $t('bass.contracts') }}</strong>
                      </div>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span> {{ $t('bass.reference') }} </span>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span>{{ $t('bass.write') }}</span>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span>{{ $t('bass.eco') }}</span>
                    </div>
                    <div class="bass-top-box-content-line animated fadeInUp">
                      <span>{{ $t('bass.manage') }}</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <div class="bass-top-warp-box">
              <el-row
                type="flex"
                justify="space-between"
                align="middle"
                class="el-row-wrap"
              >
                <el-col :xs="23" :lg="17">
                  <h4 class="title-h4 wow fadeInUp">
                    {{ $t('bass.incentive') }}
                  </h4>
                  <div class="wow fadeInUp">
                    {{ $t('bass.encourages') }}
                  </div>
                </el-col>
                <el-col :xs="23" :lg="4">
                  <nuxt-link
                    to="/baas-marketplace/ecolibs"
                    class="btn btn-primary wow fadeInUp"
                    >{{ $t('bass.learn') }}</nuxt-link
                  >
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="what" class="bass-white">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="bass-white-content">
            <strong class="block-title lg wow fadeInUp">{{
              $t('bass.what')
            }}</strong>
            <h2 class="title-h2 wow fadeInUp">{{ $t('bass.how') }}</h2>
            <p class="wow fadeInUp">{{ $t('bass.materials') }}</p>
            <el-row
              type="flex"
              justify="space-between"
              class="el-row-wrap-flex"
            >
              <el-col :xs="24" :lg="11" class="el-row-wrap-content">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-white-title wow fadeInUp">
                      <i
                        class="bass-white-icon iconfont el-a-customerservice"
                      ></i>
                      {{ $t('bass.manual') }}
                    </h4>
                    <p class="wow fadeInUp">{{ $t('market.help') }}</p>
                  </div>
                  <div class="bass-white-bottom wow fadeInUp">
                    <span>{{ $t('market.view') }}</span>
                    <i class="el-icon-right"></i>
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :lg="11" class="el-row-wrap-content">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <h4 class="bass-white-title wow fadeInUp">
                      <i class="bass-white-icon iconfont el-video"> </i>
                      {{ $t('market.video') }}
                    </h4>
                    <p class="wow fadeInUp">{{ $t('market.watch') }}</p>
                  </div>
                  <div class="bass-white-bottom wow fadeInUp">
                    <span>{{ $t('market.view') }}</span>
                    <i class="el-icon-right"></i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div id="application" class="bass-white-apply">
            <h2 class="title-h2 wow fadeInUp">
              {{ $t('market.application') }}
            </h2>
            <el-row
              type="flex"
              justify="space-between"
              class="el-row-wrap-flex"
            >
              <el-col :xs="24" :lg="7">
                <div class="bass-white-three wow fadeInUp">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.token') }}</h5>
                  <p>
                    {{ $t('market.create') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="24" :lg="7">
                <div class="bass-white-three wow fadeInUp">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.point') }}</h5>
                  <p>
                    {{ $t('market.each') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="24" :lg="7">
                <div class="bass-white-three wow fadeInUp">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.vote') }}</h5>
                  <p>
                    {{ $t('market.multiple') }}
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row
              type="flex"
              justify="space-between"
              class="el-row-wrap-flex"
            >
              <el-col :xs="24" :lg="7">
                <div class="bass-white-three wow fadeInUp">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.supply') }}</h5>
                  <p>
                    {{ $t('market.provide') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="24" :lg="7">
                <div class="bass-white-three wow fadeInUp">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.defi') }}</h5>
                  <p>
                    {{ $t('market.the') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="24" :lg="7">
                <div class="bass-white-three wow fadeInUp">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.member') }}</h5>
                  <p>
                    {{ $t('market.govern') }}
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row
              type="flex"
              justify="space-between"
              class="el-row-wrap-flex"
            >
              <el-col :xs="24" :lg="7">
                <div class="bass-white-three wow fadeInUp">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.network') }}</h5>
                  <p>
                    {{ $t('market.display') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="24" :lg="7">
                <div class="bass-white-three wow fadeInUp">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.cyber') }}</h5>
                  <p>
                    {{ $t('market.secure') }}
                  </p>
                </div>
              </el-col>
              <el-col :xs="24" :lg="7">
                <div class="bass-white-three wow fadeInUp">
                  <div class="bass-white-three-icon"></div>
                  <h5 class="bass-h5">{{ $t('market.decentralized') }}</h5>
                  <p>
                    {{ $t('market.chat') }}
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="asked" class="bass-answer">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <h2 class="title-h2 wow fadeInUp">{{ $t('market.asked') }}</h2>
          <h6 class="home-new-bottom wow fadeInUp">
            <span>{{ $t('market.more') }}</span>
            <i class="el-icon-right"></i>
          </h6>
          <el-row type="flex" justify="space-between" style="flex-wrap: wrap">
            <el-col
              v-for="(item, index) in arrAsked"
              :key="index"
              :xs="24"
              :lg="11"
              class="bass-col"
            >
              <h4 class="bass-col-h4 wow fadeInUp">{{ $t(item.title) }}</h4>
              <p class="wow fadeInUp">
                {{ $t(item.contentOne) }}
              </p>
              <p v-if="item.contentTwo" class="wow fadeInUp">
                {{ $t(item.contentTwo) }}
              </p>
              <p v-if="item.contentThree" class="wow fadeInUp">
                {{ $t(item.contentThree) }}
              </p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <page-bottom class="gray" :obj="obj">
      <template #btn>
        <div class="btns-list solutions-btn">
          <a
            href="https://weaver.ibax.io/"
            target="_blank"
            class="btn btn-primary"
            >{{ $t('footer.now') }}</a
          >
          <nuxt-link
            v-if="obj.path === '/about'"
            :to="obj.path"
            class="btn btn-default"
            >{{ $t(obj.text) }}</nuxt-link
          >
          <a v-else :href="obj.path" target="_blank" class="btn btn-default">{{
            $t(obj.text)
          }}</a>
        </div>
      </template>
    </page-bottom>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      arrAsked: [
        {
          title: 'market.built',
          contentOne: 'market.one',
          contentTwo: 'market.two',
          contentThree: 'market.three'
        },
        {
          title: 'market.real',
          contentOne: 'market.exist',
          contentTwo: 'market.public'
        },
        {
          title: 'market.ia',
          contentOne: 'market.integrate'
        },
        {
          title: 'market.low',
          contentOne: 'market.has'
        }
      ],
      obj: {
        title: 'bass.now',
        label: 'footer.fast',
        text: 'nav.about',
        path: '/about'
      }
    };
  },
  head() {
    return {
      title: `${this.$t('nav.bass')} | IBAX Network`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,DAO,Token,contract,LowCode,Reward'
        },
        {
          hid: 'description',
          name: 'description',
          content: `How To Create An EcoLib Quickly and Effectively on IBAX Network`
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
          content: `How To Create An EcoLib Quickly and Effectively on IBAX Network`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('nav.bass')} | IBAX Network`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('nav.bass')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `How To Create An EcoLib Quickly and Effectively on IBAX Network`
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
    this.domGlobal.addEventListener('scroll', this.handleBassScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleBassScroll, true);
  },
  methods: {
    handleBassScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('anyone')
        .getBoundingClientRect().bottom;
      this.numWhat = document
        .getElementById('what')
        .getBoundingClientRect().bottom;
      this.numArchiteBottom = document
        .getElementById('asked')
        .getBoundingClientRect().bottom;
      if (this.numArchite <= 0 && this.numWhat > 0) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else if (this.numWhat <= 0 && this.numArchiteBottom > 0) {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      } else if (this.numArchiteBottom <= 0) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
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
