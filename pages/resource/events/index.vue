<template>
  <div class="events">
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
              <p class="home-new-text animated fadeInUp">
                {{ $t('events.urge') }}
              </p>
              <h2 class="title-h2 animated fadeInUp">
                {{ $t('events.center') }}
              </h2>
              <p class="home-new-p animated fadeInUp">
                {{ $t('events.new') }}
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
    <div clsss="bass-center">
      <div id="img" class="bass-center-img"></div>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div
            v-if="arrPageEvents.length === 0"
            class="personal-tabs-record-img"
          >
            <img src="@/assets/images/login/no-data.png" alt="no-data" />
          </div>
          <!--  <div v-if="arrPageEvents.length === 0" class="news-no">Loading</div> -->
          <template v-else>
            <div
              v-for="item in arrPageEvents"
              :key="item.id"
              class="events-new"
            >
              <el-row
                type="flex"
                justify="space-between"
                align="middle"
                class="el-row-wrap"
              >
                <el-col :xs="24" :lg="14">
                  <div class="home-new-img wow fadeInUp">
                    <img :src="item.icon" alt="events" />
                  </div>
                </el-col>
                <el-col :xs="23" :lg="8">
                  <div class="events-test">
                    <strong class="events-test-title wow fadeInUp">{{
                      item.sub_title
                    }}</strong>
                    <nuxt-link
                      :to="{
                        name: 'resource-events-id',
                        params: { id: item.url }
                      }"
                      class="title-h4 wow fadeInUp"
                    >
                      {{ item.name }}
                    </nuxt-link>
                    <!--  <p>{{ $t('events.tasks') }}</p>
                    <p class="wow fadeInUp">
                      {{ $t('market.ideas') }}
                    </p>
                    <p class="wow fadeInUp">{{ $t('events.them') }}</p>
                    <p class="wow fadeInUp">{{ $t('events.manual') }}</p> -->
                    <p>{{ item.introduction }}</p>
                    <ul class="events-list">
                      <li class="wow fadeInUp">
                        <div class="events-list-address">
                          <i class="iconfont el-Address"></i>
                          <strong>{{ $t('events.discord') }}</strong>
                        </div>
                        <a
                          :href="item.join_discord"
                          target="_blank"
                          class="link"
                        >
                          <span>{{ $t('events.join') }} </span>
                          <i class="el-icon-right"></i>
                        </a>
                      </li>
                      <li class="wow fadeInUp">
                        <div class="events-list-address">
                          <i class="iconfont el-Address"></i>
                          <strong>{{ $t('events.telegram') }}</strong>
                        </div>
                        <a
                          :href="item.join_telegram"
                          target="_blank"
                          class="link"
                        >
                          <span>{{ $t('events.join') }} </span>
                          <i class="el-icon-right"></i
                        ></a>
                      </li>
                      <li class="wow fadeInUp">
                        <div class="events-list-address">
                          <i class="iconfont el-Address"></i>
                          <strong>{{ $t('events.subscribe') }}</strong>
                        </div>
                        <a
                          :href="item.join_youtube"
                          target="_blank"
                          class="link"
                        >
                          <span>{{ $t('events.join') }} </span>
                          <i class="el-icon-right"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </el-col>
              </el-row>
            </div>
          </template>
        </el-col>
      </el-row>
    </div>
    <div class="media-b">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="events-data">
            <div class="events-data-top">
              <strong class="events-test-title wow fadeInUp">{{
                $t('events.coming')
              }}</strong>
              <h2 class="title-h2 wow fadeInUp">
                {{ $t('events.next') }}
              </h2>
            </div>
            <div
              v-if="arrFutureEvents.length === 0"
              class="personal-tabs-record-img"
            >
              <img src="@/assets/images/login/no-data.png" alt="no-data" />
            </div>
            <template v-else>
              <div
                v-for="item in arrFutureEvents"
                :key="item.id"
                class="event-row"
              >
                <nuxt-link
                  :to="{
                    name: 'resource-events-id',
                    params: { id: item.url }
                  }"
                >
                  <div class="col-l">
                    <span class="tag">{{ item.sub_title }}</span>
                    <h5>
                      {{ item.name }}
                    </h5>
                    <div class="meta">
                      <div
                        class="time-col"
                        data-time-zone="Europe/London"
                        data-time-convert="2021-09-28T13:00:00"
                      >
                        <span class="date"
                          ><i class="iconfont el-Calendar"></i>
                          {{ dayjs(item.start_time).format('LLL') }}
                        </span>
                        <span class="time">CST</span>
                      </div>
                      <div class="duration">
                        <i class="iconfont el-Clock"></i>
                        {{ dayjs(item.stop_time).diff(new Date(), 'hour') }}
                        Hour
                      </div>
                    </div>
                  </div>
                  <div class="col-r">
                    <span v-if="isMobile" class="col-r-learn">
                      {{ $t('market.learn') }} <i class="el-icon-right"></i>
                    </span>
                    <span v-else class="btn btn-primary_bordered">
                      {{ $t('market.learn') }}
                    </span>
                  </div>
                </nuxt-link>
              </div>
            </template>
            <!-- bugs page -->
            <div
              v-if="arrFutureEvents.length !== 0"
              class="personal-tabs-task-btn"
            >
              <button
                v-if="isMobile"
                v-show="isMore"
                class="btn btn-primary"
                @click="handleMoreNext('second')"
              >
                {{ $t('footer.more') }}
              </button>
              <el-pagination
                v-else
                background
                width="400"
                hide-on-single-page
                :page-size="secondParam.limit"
                layout="prev, pager, next"
                :total="moreTotal"
                @current-change="handleCurrentChange($event, 'second')"
              >
              </el-pagination>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="media-a">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :lg="18">
          <div class="events-more">
            <strong class="events-test-title wow fadeInUp">{{
              $t('events.more')
            }}</strong>
            <div class="events-more-top">
              <h2 class="title-h3 wow fadeInUp">
                {{ $t('events.marvellous') }}
              </h2>
              <div class="news-select-box wow fadeInUp">
                <el-input
                  v-model="keywords"
                  type="text"
                  clearable
                  :placeholder="$t('resourse.search')"
                  @keyup.enter.native="handleKeywords"
                >
                  <template #prefix>
                    <i class="el-icon-search" @click="handleKeywords"></i>
                  </template>
                </el-input>
              </div>
            </div>
            <div class="events-more-content">
              <div
                v-if="arrWonderEvents.length === 0"
                class="personal-tabs-record-img news-no wow fadeInUp"
              >
                <img src="@/assets/images/login/no-data.png" alt="no-data" />
              </div>
              <!--   <div
                v-if="arrWonderEvents.length === 0"
                class="news-no wow fadeInUp"
              >
                Loading
              </div> -->
              <template v-else>
                <div
                  v-for="item in arrWonderEvents"
                  :key="item.id"
                  class="events-more-content-item"
                >
                  <nuxt-link
                    :to="{
                      name: 'resource-events-id',
                      params: { id: item.url }
                    }"
                    class="od-card"
                  >
                    <div class="od-card-img wow fadeInUp">
                      <!--  <span class="duration">60mins</span> -->
                      <img
                        :src="item.icon"
                        class="attachment-full"
                        alt="Inside MP"
                      />
                    </div>
                    <div class="text-wrap">
                      <p class="wow fadeInUp">
                        {{ item.introduction }}
                      </p>
                    </div>
                    <div class="home-new-bottom link wow fadeInUp">
                      <span>Watch Now</span>
                      <i class="el-icon-right"></i>
                    </div>
                  </nuxt-link>
                </div>
              </template>
            </div>
            <!-- bugs page -->
            <div
              v-if="arrFutureEvents.length !== 0"
              class="personal-tabs-task-btn"
            >
              <button
                v-if="isMobile"
                v-show="isBug"
                class="btn btn-primary"
                @click="handleMoreNext('third')"
              >
                {{ $t('footer.more') }}
              </button>
              <el-pagination
                v-else
                background
                width="400"
                hide-on-single-page
                :page-size="thirdParam.limit"
                layout="prev, pager, next"
                :total="bugsTotal"
                @current-change="handleCurrentChange($event, 'third')"
              >
              </el-pagination>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { handleGetLang } from '../../../assets/js/public.js';
export default {
  props: {},
  data() {
    return {
      isBug: false,
      isMore: false,
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
      keywords: '',
      arrPageEvents: [],
      arrWonderEvents: [],
      arrFutureEvents: [],
      firstParam: {
        where: {},
        limit: 1,
        type: 1,
        page: 1,
        language: 1
      },
      secondParam: {
        where: {},
        limit: 5,
        type: 2,
        page: 1,
        language: 1
      },
      thirdParam: {
        where: {
          keyword: ''
        },
        limit: 9,
        type: 3,
        page: 1,
        language: 'en'
      },
      moreTotal: 1,
      bugsTotal: 1
    };
  },
  head() {
    return {
      title: `Evnets | IBAX`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Activity, IBAX, Network, blcokchain, Reward'
        },
        {
          hid: 'description',
          name: 'description',
          content: `IBAX events here and you can earn great rewards!`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `IBAX events here and you can earn great rewards!`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Evnets | IBAX Network`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Evnets | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `IBAX events here and you can earn great rewards!`
        }
      ]
    };
  },
  computed: {},
  watch: {
    lang() {
      // console.log(this.lang);
      const langType = this.lang;
      this.langType = langType;
      this.firstParam.language = langType;
      this.secondParam.language = langType;
      this.thirdParam.language = langType;
      const firstParam = this.firstParam;
      this.handleEventsfind(firstParam);
      const secondParam = this.secondParam;
      this.handleEventsfind(secondParam);
      const thirdParam = this.thirdParam;
      this.handleEventsfind(thirdParam);
    }
  },
  created() {
    const lang = handleGetLang();
    const langType = lang;
    this.langType = langType;
    this.firstParam.language = langType;
    this.secondParam.language = langType;
    this.thirdParam.language = langType;
    const firstParam = this.firstParam;
    this.handleEventsfind(firstParam);
    const secondParam = this.secondParam;
    this.handleEventsfind(secondParam);
    const thirdParam = this.thirdParam;
    this.handleThirdfind(thirdParam);
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
      this.numImg = document
        .getElementById('img')
        .getBoundingClientRect().bottom;
      if (this.numImg <= 0) {
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
    },
    async handleKeywords() {
      this.thirdParam.where.keyword = this.keywords;
      this.thirdParam.page = 1;
      const res = await this.$axios.$post('/eventsfind', this.thirdParam);
      if (!res.data.rets) {
        this.arrWonderEvents = [];
      } else {
        this.arrWonderEvents = res.data.rets;
      }
    },
    async handleEventsfind(params) {
      const res = await this.$axios.$post('/eventsfind', params);
      // console.log(JSON.stringify(res));
      if (params.type === 1) {
        this.arrPageEvents = res.data.rets;
      } else if (params.type === 2) {
        if (res.code === 0) {
          if (res.data.rets.length) {
            if (this.isMobile) {
              if (params.page === 1) {
                this.arrFutureEvents = res.data.rets;
                this.isMore = res.data.total > res.data.rets.length;
              } else {
                const arrFutureEvents = this.handleReduce([
                  ...this.arrFutureEvents,
                  ...res.data.rets
                ]);
                console.log(res.data.rets);
                this.arrFutureEvents = [...arrFutureEvents];
                this.isMore = res.data.total > this.arrFutureEvents.length;
              }
            } else {
              this.arrFutureEvents = res.data.rets;
              this.moreTotal = res.data.total;
            }
          } else if (params.page !== 1) {
            this.$message({
              type: 'warning',
              message: 'No more'
            });
          }
        } else {
          this.arrFutureEvents = [];
        }
      }
    },
    async handleThirdfind(params) {
      console.log(params);
      const res = await this.$axios.$post('/eventsfind', params);
      if (res.code === 0) {
        if (res.data.rets.length) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.arrWonderEvents = res.data.rets;
              this.isBug = res.data.total > res.data.rets.length;
            } else {
              const arrWonderEvents = this.handleReduce([
                ...this.arrWonderEvents,
                ...res.data.rets
              ]);
              console.log(res.data.rets);
              this.arrWonderEvents = [...arrWonderEvents];
              this.isBug = res.data.total > this.arrWonderEvents.length;
            }
          } else {
            this.arrWonderEvents = res.data.rets;
            this.bugsTotal = res.data.total;
          }
        } else if (params.page !== 1) {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        }
      } else {
        this.arrWonderEvents = [];
      }
    },
    handleMoreNext(str) {
      if (str === 'second') {
        this.secondParam.page++;
        this.handleEventsfind(this.secondParam);
      } else if (str === 'third') {
        this.thirdParam.page++;
        this.handleThirdfind(this.thirdParam);
      }
    },
    handleCurrentChange($event, str) {
      console.log(str);
      if (str === 'second') {
        console.log($event);
        console.log(this.secondParam);
        this.secondParam.page = $event;
        this.handleEventsfind(this.secondParam);
      } else if (str === 'third') {
        this.thirdParam.page = $event;
        this.handleThirdfind(this.thirdParam);
      }
    }
  }
};
</script>
