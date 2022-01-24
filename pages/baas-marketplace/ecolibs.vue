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
                {{ $t('market.reward') }}
              </h6>
              <h3 class="title-h3 animated fadeInUp">
                {{ $t('market.colorful') }}
              </h3>
              <p class="home-new-p animated fadeInUp">
                {{ $t('market.foundation') }}
              </p>
              <p class="home-new-bottom animated fadeInUp">
                <a href="/resource/events" class="btn btn-primary">
                  {{ $t('market.join') }}
                </a>
              </p>
            </el-col>
            <!--   <el-col :xs="23" :lg="6">
              <div class="home-new-img">
                <img src="@/assets/image/diamond.svg" mode="powerful" />
              </div>
            </el-col> -->
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div class="bass-center">
      <el-row type="flex" justify="center" style="display: none">
        <el-col :xs="24" :sm="22" :md="20" :lg="18" class="el-row-wrap">
          <el-row type="flex" justify="space-between" style="flex-wrap: wrap">
            <el-col
              v-for="(item, index) in arrHeading"
              :key="index"
              :xs="24"
              :lg="10"
            >
              <div class="bass-center-box">
                <div class="bass-center-box-img wow fadeInUp">
                  <img
                    src="../../assets/images/funnel-report-1.png"
                    alt="heart-off"
                  />
                </div>
                <div class="bass-center-box-text wow fadeInUp">
                  <h5 class="bass-h5">
                    {{ $t('market.heading') }} {{ index + 1 }}
                  </h5>
                  <p>
                    {{ $t('market.foundation') }}
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <p class="bass-center-text wow fadeInUp" style="display: none">
        {{ $t('market.want') }}
      </p>
      <div id="img" class="bass-center-img"></div>
    </div>
    <div class="bass-appeared" style="display: none">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18">
          <ul class="bass-list">
            <li v-for="(item, index) in arrImg" :key="index">
              <img
                :src="item.img"
                class="attachment-large wow fadeInUp"
                :alt="item.alt"
              />
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="media-b" style="background: #fcfcfc">
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
                <h3 class="title-h3 wow fadeInUp">
                  {{ $t('market.creative') }}
                </h3>
                <p class="wow fadeInUp">
                  {{ $t('market.ideas') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="10">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/ecolibs-application.png"
                    mode="ecolibs-application"
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
              <el-col :xs="24" :lg="12" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/ecolibs-furtrue.png"
                    alt="ecolibs-furtrue"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <h2 class="bass-h2 wow fadeInUp">
                  {{ $t('market.ecological') }}
                </h2>
                <p class="wow fadeInUp">
                  {{ $t('market.development') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="12" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/ecolibs-furtrue.png"
                    alt="ecolibs-furtrue"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="mdeia media-a">
      <el-row
        type="flex"
        justify="center"
        :style="{
          'padding-bottom': isMobile ? '0' : '100px'
        }"
      >
        <el-col :xs="24" :lg="12" class="el-row-wrap">
          <h2 class="bass-h2 wow fadeInUp">
            <a
              href="https://weaver.ibax.io"
              target="_blank"
              style="color: #1f1f24"
            >
              {{ $t('market.wonderful') }}
            </a>
          </h2>
          <p class="wow fadeInUp">
            {{ $t('market.blockchain') }}
          </p>
          <div class="other-center-bottom wow fadeInUp">
            <div class="other-center-bottom-strong">Simon Hemmrich</div>
            <div class="other-center-bottom-text">Senior Consultant</div>
          </div>
          <nuxt-link
            to="/resource/video-resources"
            class="home-new-bottom link"
            style="justify-content: center"
          >
            <span>{{ $t('market.videos') }}</span>
            <i class="el-icon-right"></i>
          </nuxt-link>
        </el-col>
      </el-row>
    </div>
    <div class="media-b" style="background: #fcfcfc">
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
                <h3 class="title-h3 wow fadeInUp">
                  {{ $t('market.rewards') }}
                </h3>
                <p class="wow fadeInUp">
                  {{ $t('market.order') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="10">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/ecolibs-corn.png"
                    alt="ecolibs-corn"
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
              <el-col :xs="24" :lg="12" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/ecolibs-tearm.png"
                    alt="ecolibs-tearm"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <h2 class="bass-h2 wow fadeInUp">{{ $t('market.team') }}</h2>
                <p class="wow fadeInUp">
                  {{ $t('market.have') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="12" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/ecolibs-tearm.png"
                    alt="ecolibs-tearm"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div
      class="mdeia media-a"
      :style="{
        'padding-bottom': isMobile ? '0' : '100px'
      }"
    >
      <el-row type="flex" justify="center" class="el-row-wrap">
        <el-col :xs="24" :lg="14">
          <h2 class="bass-h2 wow fadeInUp">{{ $t('market.excellent') }}</h2>
          <p class="wow fadeInUp">
            {{ $t('market.exploring') }}
          </p>
          <div class="media-a-img wow fadeInUp">
            <img src="@/assets/images/ecolibs-nice.png" alt="ecolibs-nice" />
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="much" class="bass-case">
      <el-row type="flex" justify="center" align="middle" class="el-row-wrap">
        <el-col :xs="24" :lg="18">
          <h3 class="title-h3 wow fadeInUp">{{ $t('market.much') }}</h3>
          <div class="bass-case-box">
            <div
              v-for="(item, index) in arrCase"
              :key="index"
              class="bass-case-box-item"
            >
              <a :href="item.url" target="_blank" class="bass-case-box-card">
                <div class="bass-case-box-card-img">
                  <img
                    :src="item.img"
                    class="attachment-large wow fadeInUp"
                    alt="Preview Image 1 (2)"
                  />
                </div>
                <div class="bass-case-box-item-content">
                  <h3 class="card-title wow fadeInUp">{{ $t(item.title) }}</h3>
                  <p class="bass-case-box-item-content-text wow fadeInUp">
                    {{ $t(item.content) }}
                  </p>
                </div>
                <div class="home-new-bottom link wow fadeInUp">
                  <span>{{ $t(item.small) }}</span>
                  <i class="el-icon-right"></i>
                </div>
              </a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <page-bottom class="lime">
      <template #btn>
        <div class="btns-list solutions-btn">
          <a
            href="https://weaver.ibax.io/"
            target="_blank"
            class="btn btn-primary"
            >{{ $t('footer.now') }}</a
          >
        </div>
      </template>
    </page-bottom>
  </div>
</template>
<script>
const img1 = require('../../assets/images/ecolibs-case.jpg');
const img2 = require('../../assets/images/gif/ecolibs-weaver.gif');
const img3 = require('../../assets/images/ecolibs-chat.jpg');
const jblue = require('../../assets/images/jblue.png');
export default {
  props: {},
  data() {
    return {
      tabPosition: 'bottom',
      activeName: 'first',
      arrHeading: [
        {
          head: 'market.heading',
          content: 'market.foundation'
        },
        {
          head: 'market.heading',
          content: 'market.foundation'
        },
        {
          head: 'market.heading',
          content: 'market.foundation'
        },
        {
          head: 'market.heading',
          content: 'market.foundation'
        }
      ],
      arrImg: [
        {
          img: jblue,
          alt: 'clari'
        }
      ],
      arrCase: [
        {
          url: 'https://github.com/orgs/IBAX-io/repositories',
          img: img1,
          title: 'market.eco',
          content: 'market.based',
          small: 'market.download'
        },
        {
          url: 'https://weaver.ibax.io/',
          img: img2,
          title: 'market.management',
          content: 'market.Weaver',
          small: 'home.using'
        },
        {
          url: 'https://weaver.ibax.io/',
          img: img3,
          title: 'market.information',
          content: 'market.tool',
          small: 'market.learn'
        }
      ]
    };
  },
  head() {
    return {
      title: `${this.$t('home.ecological')} | IBAX Network`,
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
          content: `The IBAX Foundation has created a variety of ecoLib incentive plans. You can join the corresponding project team according to the team size and application type, and these activities are held regularly on time`
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
          content: `${this.$t('home.ecological')} | IBAX Network`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `The IBAX Foundation has created a variety of ecoLib incentive plans. You can join the corresponding project team according to the team size and application type, and these activities are held regularly on time`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('home.ecological')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `The IBAX Foundation has created a variety of ecoLib incentive plans. You can join the corresponding project team according to the team size and application type, and these activities are held regularly on time`
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
    this.domGlobal.addEventListener('scroll', this.handleImgScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleImgScroll, true);
  },
  methods: {
    handleImgScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('img')
        .getBoundingClientRect().bottom;
      console.log(this.numArchite);
      this.numArchiteBottom = document
        .getElementById('much')
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
