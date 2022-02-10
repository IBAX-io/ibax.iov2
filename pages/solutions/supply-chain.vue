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
                {{ $t('solutions.financial') }}
              </h6>
              <h2 class="bass-h2 animated fadeInUp">
                {{ $t('solutions.supply') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('solutions.service') }}
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
            <!-- <el-col :xs="23" :lg="12">
              <div class="home-new-img">
                <img
                src="../../assets/images/supply-3.png" alt="supply-3"
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
            <el-col :xs="24" :lg="7">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1s"
              >
                {{ $t('solutions.issuance') }}
              </div>
            </el-col>
            <el-col :xs="24" :lg="7">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 1.5s"
              >
                {{ $t('solutions.early') }}
              </div>
            </el-col>
            <el-col :xs="24" :lg="7">
              <div
                class="other-ease wow fadeIn"
                style="animation-duration: 1s; animation-delay: 2s"
              >
                {{ $t('solutions.destruction') }}
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
                  {{ $t('solutions.digital') }}
                </span>
              </p>
              <h2 class="bass-h2 wow fadeInUp">
                {{ $t('solutions.issuance') }}
              </h2>
              <p class="wow fadeInUp">
                {{ $t('solutions.credit') }}
              </p>
              <div
                class="home-new-bottom link wow fadeInUp"
                style="display: none"
              >
                <span> {{ $t('home.using') }}</span>
                <i class="el-icon-right"></i>
              </div>
            </el-col>
            <el-col :xs="24" :lg="12">
              <div class="home-new-img wow fadeInUp">
                <img src="../../assets/images/supply-2.jpg" alt="supply-2" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="fully" class="other other-center">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="15">
          <div class="other-center-img wow fadeInUp">
            <i v-if="lang === 'zh'" class="iconfont el-technicaldomains_cn"></i>
            <i v-if="lang === 'en'" class="iconfont el-technicaldomains"></i>
            <i v-if="lang === 'tw'" class="iconfont el-technicaldomains_zh"></i>
          </div>
          <div class="other-center-box wow fadeInUp">
            <strong class="other-center-box-strong">
              {{ $t('solutions.fully') }}
            </strong>
            <span> {{ $t('solutions.build') }}</span>
          </div>
          <!--   <div class="global-h6">Stuart Nichols</div>
          <div class="global-h6">IBAX CEO</div> -->
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
                  <img src="../../assets/images/supply-3.png" alt="supply-3" />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <p class="home-new-title wow fadeInUp">
                  <i class="el-iconfont iconfont el-a-019"></i>
                  <span class="home-new-title-text">
                    {{ $t('solutions.flexible') }}</span
                  >
                </p>
                <h2 class="bass-h2 wow fadeInUp">
                  {{ $t('solutions.early') }}
                </h2>
                <p class="wow fadeInUp">
                  {{ $t('solutions.suppliers') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="12" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img src="../../assets/images/supply-3.png" alt="supply-3" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="assist" class="media-b">
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
                    {{ $t('solutions.assist') }}
                  </span>
                </p>
                <h2 class="bass-h2 wow fadeInUp">
                  {{ $t('solutions.destruction') }}
                </h2>
                <p class="wow fadeInUp">
                  {{ $t('solutions.after') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="12">
                <div class="home-new-img wow fadeInUp">
                  <img src="../../assets/images/supply-4.png" alt="supply-4" />
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
          <a class="btn btn-primary" style="display: none">
            {{ $t('solutions.demo') }}</a
          >
          <nuxt-link to="/login" class="btn btn-default">
            {{ $t('nav.sign') }}</nuxt-link
          >
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
        label: 'footer.blockchain',
        text: 'footer.check',
        path: 'https://github.com/IBAX-io/documentation'
      }
    };
  },
  head() {
    return {
      title: `${this.$t('solutions.supply')}-IBAX`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('solutions.supply')} | IBAX Network`
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
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('solutions.supply')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `IBAX events here and you can earn great rewards`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,SupplyChainFinance'
        },
        {
          hid: 'description',
          name: 'description',
          content: `IBAX events here and you can earn great rewards`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `IBAX events here and you can earn great rewards`
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
    this.domGlobal.addEventListener('scroll', this.handleFullyScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleFullyScroll, true);
  },
  methods: {
    handleFullyScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('fully')
        .getBoundingClientRect().bottom;
      this.numArchiteBottom = document
        .getElementById('assist')
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
