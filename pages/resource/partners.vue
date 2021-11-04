<!--
 * @Author: abc
 * @Date: 2021-08-24 16:43:39
 * @LastEditors: abc
 * @LastEditTime: 2021-10-21 17:57:22
 * @Description: video resources
-->
<template>
  <div class="resource">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="resource-video">
          <el-row
            type="flex"
            justify="space-between"
            class="hidden-sm-and-down"
          >
            <el-col :xs="24" :lg="8">
              <div class="resource-top">
                <strong class="resource-box-btn wow fadeInUp">{{
                  $t('resourse.case')
                }}</strong>
                <h2 class="title-h2 wow fadeInUp">
                  {{ $t('resourse.gains') }}
                </h2>
                <p class="wow fadeInUp">
                  {{ $t('resourse.used') }}
                </p>
                <div class="resource-top-bottom wow fadeInUp">
                  <button class="btn btn-primary">
                    {{ $t('resourse.story') }}
                  </button>
                </div>
              </div>
            </el-col>
            <el-col :xs="23" :lg="14">
              <div class="resource-img wow fadeInUp">
                <img
                  class="resource-img-right"
                  src="../../assets/images/video-stuart.jpg"
                  mode="powerful"
                />
              </div>
            </el-col>
          </el-row>
          <div class="resource-video-mobile hidden-sm-and-up">
            <div class="resource-top">
              <strong class="resource-box-btn wow fadeInUp">{{
                $t('resourse.case')
              }}</strong>
              <h2 class="title-h2 wow fadeInUp">
                {{ $t('resourse.gains') }}
              </h2>
              <div class="resource-img wow fadeInUp">
                <img
                  class="resource-img-right"
                  src="../../assets/images/video-stuart.jpg"
                  mode="powerful"
                />
              </div>
              <p class="wow fadeInUp">
                {{ $t('resourse.used') }}
              </p>
              <div class="resource-top-bottom wow fadeInUp">
                <button class="btn btn-primary">
                  {{ $t('resourse.story') }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="excellent" class="resource-video el-row-wrap">
          <div class="resource-partners-title wow fadeInUp">
            {{ $t('resourse.excellent') }}
          </div>
          <ul
            class="resource-partners-list"
            data-transition-delay="0.15s"
            style="transition-delay: 0.15s"
          >
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/logo-docusign-1.svg"
                class="attachment-full wow fadeInUp"
                alt="logo-docusign-1"
                width="134"
              />
            </li>
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-uber.svg wow fadeInUp"
                class="attachment-full"
                alt="logo-uber"
                width="80"
              />
            </li>
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-lemonade.svg"
                class="attachment-full wow fadeInUp"
                alt="logo-lemonade"
                width="142"
              />
            </li>
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/rakuten-viber-logo-1.svg wow fadeInUp"
                class="attachment-full"
                alt="rakuten-viber-logo"
                width="171"
              />
            </li>
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-expedia.svg wow fadeInUp"
                class="attachment-full"
                alt="logo-expedia"
                width="124"
              />
            </li>
            <li>
              <img
                src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/logo-twitter.svg wow fadeInUp"
                class="attachment-full"
                alt="logo-twitter"
                width="46"
              />
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <div class="resource-page">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18">
          <div class="resource-middle-top">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="10">
                <h2 class="title-h3 wow fadeInUp">
                  {{ $t('resourse.learn') }}
                </h2>
              </el-col>
              <el-col :xs="24" :lg="12">
                <span class="wow fadeInUp">{{
                  $t('resourse.compatible')
                }}</span>
              </el-col>
            </el-row>
          </div>
          <el-row
            type="flex"
            justify="space-between"
            align="top"
            class="resource-middle-warp"
          >
            <el-col v-for="i in 9" :key="i" :xs="24" :lg="7">
              <div class="resource-middle-body">
                <div class="resource-img wow fadeInUp">
                  <img
                    src="../../assets/images/funnel-report-1.png"
                    mode="powerful"
                  />
                </div>
                <div class="resource-middle-body-content">
                  <h3 class="wow fadeInUp">Heading-{{ i }}</h3>
                  <p class="wow fadeInUp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet. Proin gravida dolor sit
                    amet lacus accumsan et viverra justo commodo. Proin sodales
                    pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum,
                    nulla luctus pharetra vulputate, felis tellus mollis orci,
                    sed rhoncus pronin sapien nunc accuan eget.
                  </p>
                  <div class="home-new-bottom link">
                    <span>Watch Now</span>
                    <i class="el-icon-right"></i>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="resource-partners">
      <div class="resource-partners-center" style="display: none">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="22" :md="12" :lg="10">
            <div class="resource-top">
              <h4 class="bass-h4 wow fadeInUp">{{ $t('resourse.name') }}</h4>
              <p class="wow fadeInUp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin
                sapien nunc accuan eget.
              </p>
              <div class="resource-partners-center-name wow fadeInUp">
                Nissim Lehyani
              </div>
              <div class="resource-partners-center-text wow fadeInUp">
                Senior Director of Product Management
              </div>
              <div class="home-new-bottom link wow fadeInUp">
                <span>{{ $t('resourse.cases') }}</span>
                <i class="el-icon-right"></i>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="resource-partners-center">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="22" :md="12" :lg="10">
            <div class="resource-top">
              <div class="intro-head wow fadeInUp">
                <div class="home-new-title">
                  <i class="iconfont el-application1"></i>
                  <span>{{ $t('resourse.advantage') }}</span>
                </div>
              </div>
              <h3 class="title-h3 wow fadeInUp">{{ $t('resourse.gain') }}</h3>
              <p class="wow fadeInUp">
                {{ $t('resourse.problems') }}
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="resource-partners-box">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="22" :md="20" :lg="18">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="resource-partners-box-wrap"
            >
              <el-col :xs="24" :lg="11">
                <div class="resource-partners-box-content">
                  <div class="resource-partners-box-left">
                    <h4 class="title-h4 wow fadeInUp">
                      {{ $t('resourse.threshold') }}
                    </h4>
                    <p class="resource-partners-box-left-text wow fadeInUp">
                      {{ $t('resourse.every') }}
                    </p>
                    <div class="resource-partners-box-left-name wow fadeInUp">
                      <p>{{ $t('resourse.names') }}</p>
                      <p>{{ $t('resourse.d') }}</p>
                    </div>
                    <div class="home-new-bottom link wow fadeInUp">
                      <span>{{ $t('resourse.information') }}</span>
                      <i class="el-icon-right"></i>
                    </div>
                  </div>
                  <div class="resource-partners-box-right wow fadeInUp">
                    <div class="resource-partners-box-right-percent">50%</div>
                    <div>{{ $t('resourse.time') }}</div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :lg="11">
                <div class="resource-partners-box-content">
                  <div class="resource-partners-box-left">
                    <h4 class="title-h4 wow fadeInUp">
                      {{ $t('resourse.cost') }}
                    </h4>
                    <p class="resource-partners-box-left-text wow fadeInUp">
                      {{ $t('resourse.noticed') }}
                    </p>
                    <div class="resource-partners-box-left-name wow fadeInUp">
                      <p>{{ $t('resourse.names') }}</p>
                      <p>{{ $t('resourse.operations') }}</p>
                    </div>
                    <div class="home-new-bottom link wow fadeInUp">
                      <span>{{ $t('resourse.help') }}</span>
                      <i class="el-icon-right"></i>
                    </div>
                  </div>
                  <div class="resource-partners-box-right wow fadeInUp">
                    <div class="resource-partners-box-right-percent">80%</div>
                    <div>{{ $t('resourse.handling') }}</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <div v-if="!isMobile" id="accolades" class="container">
              <h5 class="bass-h5 wow fadeInUp">{{ $t('feature.awards') }}</h5>
              <ul class="list">
                <li v-for="(item, index) in arrAward" :key="index">
                  <div class="card-award wow fadeInUp">
                    <div class="logo">
                      <img :src="item.img" width="134" alt="partners" />
                    </div>
                    <div class="card-award-text wow fadeInUp">
                      {{ item.text }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- moblie -->
            <template v-else>
              <div id="accolades" class="partners-carousel">
                <h4 class="global-h4">{{ $t('feature.about') }}</h4>
                <client-only>
                  <el-carousel indicator-position="outside" arrow="never">
                    <el-carousel-item
                      v-for="(item, index) in arrAward"
                      :key="index"
                    >
                      <div class="card-award wow fadeInUp">
                        <div class="logo">
                          <img :src="item.img" width="134" alt="partners" />
                        </div>
                        <div class="card-award-text wow fadeInUp">
                          {{ item.text }}
                        </div>
                      </div>
                    </el-carousel-item>
                  </el-carousel>
                </client-only>
              </div>
            </template>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- bottom -->
    <page-bottom class="lime" :obj="obj"></page-bottom>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to);
    if (to.name === 'resource-partners')
      next({
        path: '/'
      });
    else next();
  },
  props: {},
  data() {
    return {
      isOpen: false,
      obj: {
        path: '/about',
        text: 'nav.about',
        label: 'footer.compete',
        title: 'footer.creative'
      },
      arrAward: [
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/g2-crowd@2x.png',
          text: ' Top Rated Analytics Solution, 2021'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/g2-crowd@2x.png',
          text: ' Top Rated Analytics Solution, 2021'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/g2-crowd@2x.png',
          text: ' Top Rated Analytics Solution, 2021'
        },
        {
          img: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/g2-crowd@2x.png',
          text: ' Top Rated Analytics Solution, 2021'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.numExcellent =
        document.getElementById('excellent').getBoundingClientRect().bottom -
        140;
      // console.log(this.numArchite);
      this.numAccoladesBottom =
        document.getElementById('accolades').getBoundingClientRect().bottom -
        140;
      if (this.numExcellent) {
        this.domGlobal.addEventListener('scroll', () => {
          this.handleThrottle(this.handleExcellentScroll, 100);
        });
      }
    });
  },
  methods: {
    handleExcellentScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      if (
        scrollTop >= this.numExcellent &&
        scrollTop < this.numAccoladesBottom
      ) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else if (scrollTop >= this.numAccoladesBottom) {
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
