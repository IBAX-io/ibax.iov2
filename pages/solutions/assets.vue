<!--
 * @Author: abc
 * @Date: 2021-08-19 12:00:46
 * @LastEditors: abc
 * @LastEditTime: 2021-11-09 17:43:14
 * @Description: architecture
-->
<template>
  <div class="other">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            class="el-row-wrap"
          >
            <el-col :xs="24" :lg="18">
              <h6 class="global-h6 animated fadeInUp">
                {{ $t('solutions.diversified') }}
              </h6>
              <h2 class="bass-h2 animated fadeInUp">
                {{ $t('solutions.asset') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('solutions.credible') }}
              </p>
              <p class="home-new-bottom animated fadeInUp">
                <a
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-primary"
                  >{{ $t('solutions.watch') }}</a
                >
                <a
                  style="display: none"
                  href="https://weaver.ibax.io/"
                  target="_blank"
                  class="btn btn-default"
                  >{{ $t('nav.sign') }}</a
                >
              </p>
            </el-col>
            <!-- <el-col :xs="24" :lg="12">
              <div class="home-new-img animated fadeInUp">
                <img
                  src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/hero-retention.png"
                  mode="powerful"
                />
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
                style="animation-duration: 1s; animation-delay: 1s"
              >
                {{ $t('solutions.management') }}
              </div>
            </el-col>
            <el-col :xs="24" :lg="6">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                {{ $t('solutions.smart') }}
              </div>
            </el-col>
            <el-col :xs="24" :lg="6">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 2s"
              >
                {{ $t('solutions.real') }}
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
                <span class="home-new-title-text">
                  {{ $t('solutions.time') }}
                </span>
              </p>
              <h2 class="bass-h2 wow fadeInUp">
                {{ $t('solutions.management') }}
              </h2>
              <p class="wow fadeInUp">
                {{ $t('solutions.including') }}
              </p>
              <div class="home-new-bottom link wow fadeInUp">
                <span> {{ $t('home.using') }}</span>
                <i class="el-icon-right"></i>
              </div>
            </el-col>
            <el-col :xs="24" :lg="12">
              <div class="home-new-img wow fadeInUp">
                <img src="@/assets/images/assets-2.png" alt="assets-2" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="risk" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-technicaldomains_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-technicaldomains"></i>
            <i v-if="lang === 'tw'" class="iconfont el-technicaldomains_zh"></i>
          </div>
          <div class="other-center-box wow fadeInUp">
            <strong class="other-center-box-strong">
              {{ $t('solutions.risk') }}</strong
            >
            <span>{{ $t('solutions.structured') }}</span>
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
              <el-col :xs="24" :lg="12" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img src="@/assets/images/assets-3.png" alt="assets-3" />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-019"></i>
                  <span class="home-new-title-text">
                    {{ $t('solutions.privacy') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">
                  {{ $t('solutions.smart') }}
                </h2>
                <p class="wow fadeInUp">
                  {{ $t('solutions.realize') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="12" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img src="@/assets/images/assets-3.png" alt="assets-3" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="second" class="media-b">
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
                  <span class="home-new-title-text">
                    {{ $t('solutions.second') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">{{ $t('solutions.real') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('solutions.relying') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="12">
                <div class="home-new-img wow fadeInUp">
                  <img src="@/assets/images/assets-4.png" alt="assets-4" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <page-bottom class="lime" :obj="obj">
      <template #btn>
        <div class="btns-list solutions-btn">
          <a class="btn btn-primary"> {{ $t('solutions.demo') }}</a>
          <a class="btn btn-default"> {{ $t('nav.sign') }}</a>
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
      obj: {
        title: 'footer.create',
        label: 'nav.it',
        text: 'footer.check',
        path: 'https://github.com/IBAX-io/documentation'
      }
    };
  },
  head() {
    return {
      title: `${this.$t('nav.assets')}-IBAX`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.$t('nav.assets')} | IBAX Network`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.$t('nav.assets')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `A flexible, credible and diversified asset management platform built on IBAX Network`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,copyright'
        },
        {
          hid: 'description',
          name: 'description',
          content: `A flexible, credible and diversified asset management platform built on IBAX Network`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `A flexible, credible and diversified asset management platform built on IBAX Network`
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
        this.handleThrottle(this.handleAlwaysScroll, 100);
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
        .getElementById('risk')
        .getBoundingClientRect().bottom;
      console.log(this.numArchite);
      this.numArchiteBottom = document
        .getElementById('second')
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
