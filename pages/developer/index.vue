<!--
 * @Author: abc
 * @Date: 2021-08-19 12:32:02
 * @LastEditors: abc
 * @LastEditTime: 2021-11-19 20:17:35
 * @Description:
-->
<template>
  <div class="develop">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="home-new">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            class="el-row-wrap"
          >
            <el-col :xs="24" :lg="10">
              <h6 class="home-new-text animated fadeInUp">
                {{ $t('develope.tool') }}
              </h6>
              <h2 class="title-h2 animated fadeInUp">
                {{ $t('develope.functions') }}
              </h2>
              <p class="animated fadeInUp">
                {{ $t('develope.ecoLib') }}
              </p>
              <div
                class="bass-top-box-content-btn animated fadeInUp"
                style="margin-top: 50px"
              >
                <a
                  class="btn btn-primary"
                  href="https://www.youtube.com/watch?v=v6djILrPGbw"
                  target="_blank"
                >
                  {{ $t('develope.operation') }}
                </a>
              </div>
            </el-col>
            <el-col :xs="23" :lg="12">
              <div class="home-tag animated fadeInUp">
                <el-tabs
                  v-model="activeName"
                  :tab-position="tabPosition"
                  @tab-click="handleTabClick"
                >
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
    <div id="weaver" class="other other-center" style="padding-bottom: 100px">
      <h2 class="develop-h2 wow fadeInUp">{{ $t('develope.weaver') }}</h2>
      <p class="develop-text wow fadeInUp">
        {{ $t('develope.bass') }}
      </p>
      <div class="home-top-btn wow fadeInUp">
        <a
          href="https://weaver.ibax.io/"
          target="_blank"
          class="btn btn-primary"
          >{{ $t('home.using') }}</a
        >
      </div>
    </div>
    <div class="bass-white bass-white-top">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="bass-white-content el-row-wrap">
            <h2 class="title-h2 wow fadeInUp">
              {{ $t('develope.encounter') }}
            </h2>
            <p class="wow fadeInUp">
              {{ $t('develope.technology') }}
            </p>
            <el-row type="flex" justify="space-between" style="flex-wrap: wrap">
              <el-col :xs="24" :lg="11" class="bass-white-fade">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <div class="bass-white-title wow fadeInUp">
                      <i class="bass-white-icon iconfont el-developer"></i>
                      <h4 class="title-h4">
                        {{ $t('develope.document') }}
                      </h4>
                    </div>

                    <p class="wow fadeInUp">{{ $t('develope.use') }}</p>
                    <p class="wow fadeInUp">{{ $t('develope.doc') }}</p>
                  </div>
                  <a
                    href="https://docs.ibax.io"
                    target="_blank"
                    class="bass-white-bottom wow fadeInUp"
                  >
                    <span>{{ $t('home.go') }}</span>
                    <i class="el-icon-right"></i>
                  </a>
                </div>
              </el-col>
              <el-col :xs="24" :lg="11" class="bass-white-fade">
                <div class="bass-white-box">
                  <div class="bass-white-box-content">
                    <div class="bass-white-title wow fadeInUp">
                      <i class="bass-white-icon iconfont el-forum"></i>
                      <h4 class="title-h4 wow fadeInUp">
                        {{ $t('develope.engineer') }}
                      </h4>
                    </div>
                    <p class="wow fadeInUp">
                      {{ $t('develope.can') }}
                    </p>
                  </div>
                  <a
                    href="https://github.com/IBAX-io/go-ibax/issues"
                    target="_blank"
                    class="bass-white-bottom wow fadeInUp"
                  >
                    <span>{{ $t('develope.enter') }}</span>
                    <i class="el-icon-right"></i>
                  </a>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="develop-center">
      <el-row type="flex" justify="center">
        <el-col :xs="23" :lg="16">
          <h2 class="title-h2 wow fadeInUp">{{ $t('develope.open') }}</h2>
          <p class="wow fadeInUp">{{ $t('develope.has') }}</p>
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
                  <img
                    src="@/assets/images/gif/develop-more.gif"
                    alt="develop-more"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <div class="develop-title wow fadeInUp">
                  <i class="iconfont el-payment develop-title-icon"></i>
                  <h4 class="title-h4">
                    {{ $t('develope.paid') }}
                  </h4>
                </div>
                <p class="wow fadeInUp">
                  {{ $t('develope.there') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('develope.fees') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('develope.deducted') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('develope.deduction') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/gif/develop-more.gif"
                    alt="develop-more"
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
                <div class="develop-title wow fadeInUp">
                  <i class="iconfont el-code develop-title-icon"></i>
                  <h4 class="title-h4 wow fadeInUp">
                    {{ $t('develope.audit') }}
                  </h4>
                </div>
                <p class="wow fadeInUp">
                  {{ $t('develope.review') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/develop-code.jpg"
                    alt="develop-code"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div
      class="develop-center"
      :style="{ 'padding-top': isMobile ? '50px' : '100px' }"
    >
      <h2 class="title-h2 wow fadeInUp">{{ $t('develope.lowCode') }}</h2>
      <p class="wow fadeInUp">
        {{ $t('develope.code') }}
      </p>
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
                  <img
                    src="@/assets/images/gif/develop-manage.gif"
                    alt="develop-more"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <div class="develop-title wow fadeInUp">
                  <i class="iconfont el-ecological develop-title-icon"></i>
                  <h4 class="title-h4 wow fadeInUp">
                    {{ $t('develope.ecological') }}
                  </h4>
                </div>
                <p class="wow fadeInUp">
                  {{ $t('develope.quickly') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('develope.also') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="../../assets/images/gif/develop-manage.gif"
                    alt="develop-manage"
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
                <div class="develop-title wow fadeInUp">
                  <i class="iconfont el-contract develop-title-icon"></i>
                  <h4 class="title-h4">
                    {{ $t('develope.online') }}
                  </h4>
                </div>
                <p class="wow fadeInUp">
                  {{ $t('develope.frameworks') }}
                </p>
                <p class="wow fadeInUp">
                  {{ $t('develope.means') }}
                </p>
                <p class="wow fadeInUp">{{ $t('develope.drag') }}</p>
              </el-col>
              <el-col :xs="24" :lg="14">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="../../assets/images/gif/develop-online.gif"
                    alt="develop-online"
                  />
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
          <div class="home-new">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="14" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/gif/develop-template.gif"
                    alt="develop-template"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="8">
                <div class="develop-title wow fadeInUp">
                  <i class="iconfont el-templates develop-title-icon"></i>
                  <h4 class="title-h4">
                    {{ $t('develope.template') }}
                  </h4>
                </div>
                <p class="wow fadeInUp">
                  {{ $t('develope.number') }}
                </p>
              </el-col>
              <el-col :xs="24" :lg="14" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/gif/develop-template.gif"
                    alt="develop-template"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <!--  <page-bottom class="lime" :obj="obj"></page-bottom> -->
    <!-- Story wall -->
    <div id="empower" class="about-five">
      <el-row type="flex" justify="center">
        <el-col :md="16" :xs="24">
          <h2 class="about-five-title">{{ $t('develope.roadmap') }}</h2>
          <div class="about-five-box">
            <el-timeline>
              <el-timeline-item
                v-for="(item, index) in arrMap"
                :key="index"
                :timestamp="item.time"
                placement="top"
              >
                <el-card>
                  <p class="about-five-content">{{ $t(item.content) }}</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-col>
      </el-row>
    </div>
    <dialog-video
      :dialog-boo="dialogVideo"
      @videoclose="handleVideoClose"
    ></dialog-video>
    <!-- bottom -->
    <page-bottom class="lime" :obj="obj"></page-bottom>
  </div>
</template>
<script>
const img1 = require('@/assets/images/develop-create.jpg');
const img2 = require('@/assets/images/develop-ecolib.jpg');
const img3 = require('@/assets/images/develop-role.jpg');
const img4 = require('@/assets/images/develop-contract.jpg');
const img5 = require('@/assets/images/develop-voting.jpg');
export default {
  props: {},
  data() {
    return {
      obj: {
        path: '/about',
        text: 'nav.about',
        label: 'footer.compete',
        title: 'footer.creative'
      },
      activeName: 'first',
      tabPosition: 'bottom',
      arrTags: [
        {
          label: 'Create',
          name: 'first',
          img: img1
        },
        {
          label: 'EcoLib',
          name: 'second',
          img: img2
        },
        {
          label: 'Role',
          name: 'third',
          img: img3
        },
        {
          label: 'Contract',
          name: 'fonth',
          img: img4
        },
        {
          label: 'Voting',
          name: 'firth',
          img: img5
        }
      ],
      arrMap: [
        {
          time: '2019.Q2',
          content: 'road.paper'
        },
        {
          time: '2019.Q4',
          content: 'road.website'
        },
        {
          time: '2020.Q1',
          content: 'road.built'
        },
        {
          time: '2021.Q2',
          content: 'road.whitePaper'
        },
        {
          time: '2021.Q3',
          content: 'road.online'
        },
        {
          time: '2021.Q4',
          content: 'road.construction'
        },
        {
          time: '2022.Q2',
          content: 'road.construct'
        },
        {
          time: '2022.Q3-Q4',
          content: 'road.improve'
        },
        {
          time: '2023.Q1-Q3',
          content: 'road.upgrade'
        }
      ],
      count: 0,
      timer: null
    };
  },
  head() {
    return {
      title: `${this.$t('nav.development')}-IBAX`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('nav.development')} | IBAX Network`
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
          content: `${this.$t('nav.development')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,Developer,Weaver,LowCode'
        },
        {
          hid: 'description',
          name: 'description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.handleLoopTime();
  },
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
    clearTimeout(this.timer);
    this.timer = null;
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
        .getElementById('weaver')
        .getBoundingClientRect().bottom;
      this.numArchiteBottom = document
        .getElementById('empower')
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
    },
    handleTabClick(tab) {
      // console.log(tab.name);
      const index = this.arrTags.findIndex((item) => {
        return item.name === tab.name;
      });
      this.count = index;
      clearTimeout(this.timer);
      this.timer = null;
      setTimeout(() => {
        this.handleLoopTime();
      }, 3000);
      // console.log(index);
    },
    handleLoopTime() {
      if (this.count < 5) {
        this.count++;
      } else if (this.count >= 5) {
        this.count = 0;
      }
      if (this.arrTags[this.count]) {
        this.activeName = this.arrTags[this.count].name;
      } else {
        this.activeName = 'first';
      }
      this.timer = setTimeout(() => {
        this.handleLoopTime();
      }, 3000);
    }
  }
};
</script>
