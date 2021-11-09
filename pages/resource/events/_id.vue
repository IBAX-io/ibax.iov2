<!--
 * @Author: abc
 * @Date: 2021-09-28 16:09:11
 * @LastEditors: abc
 * @LastEditTime: 2021-11-09 19:14:58
 * @Description: 
-->
<template>
  <div class="events">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div id="marvellous" class="home-new">
          <el-row
            type="flex"
            justify="space-between"
            align="middle"
            class="el-row-wrap"
          >
            <el-col :xs="24" :lg="10">
              <strong class="block-title animated fadeInUp">
                {{
                  objEvents.type === 1
                    ? $t('events.home')
                    : objEvents.type === 2
                    ? $t('events.future')
                    : $t('events.marvellous')
                }}
              </strong>
              <h3 class="title-h3 animated fadeInUp">
                {{ objEvents.name }}
              </h3>
              <p class="events-text animated fadeInUp">
                <i class="iconfont el-xingzhuang"></i>
                <span>{{ dayjs(objEvents.start_time).format('LLL') }}</span>
              </p>
              <p class="events-text animated fadeInUp">
                <i class="iconfont el-shizhongclock77"></i>
                <span>{{
                  dayjs(objEvents.stop_time).diff(new Date(), 'hour')
                }}</span>
                Hour
              </p>
              <p class="events-text animated fadeInUp">
                {{ objEvents.introduction }}
              </p>
            </el-col>
            <el-col :xs="24" :lg="10">
              <div class="home-new-img">
                <img :src="objEvents.icon" mode="powerful" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div class="events-details">
      <el-row type="flex" justify="center">
        <el-col :sm="22" :lg="16" :md="20">
          <strong class="events-test-title">{{ $t('events.act') }}</strong>
          <div class="events-articles">
            <div class="news-box" v-html="objEvents.content"></div>
            <div class="shareon">
              <a class="facebook"></a>
              <a class="linkedin"></a>
              <button class="reddit"></button>
              <button class="telegram"></button>
              <button class="twitter"></button>
            </div>
          </div>
          <strong class="events-test-title">{{ $t('events.much') }}</strong>
          <h2 class="news-articles-h2">{{ $t('events.content') }}</h2>
          <div class="events-more-content">
            <div v-if="arrEvents.length === 0" class="news-no wow fadeInUp">
              Loading
            </div>
            <template v-else>
              <div
                v-for="item in arrEvents"
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
        </el-col>
      </el-row>
    </div>
    <div class="events-email">
      <h4 class="title-h4">{{ $t('events.follow') }}</h4>
      <div class="news-select-box">
        <el-input
          v-model="obj.email"
          type="email"
          clearable
          :placeholder="$t('events.address')"
        >
        </el-input>
      </div>
      <div class="btn btn-primary" @click="handleSendEmail">
        {{ $t('events.now') }}
      </div>
    </div>
  </div>
</template>
<script>
import { handleGetLang } from '../../../assets/js/public.js';
export default {
  props: {},
  async asyncData({ app, params, router }) {
    console.log(params);
    const newsData = await app.$axios.$get(`events/${params.id}`);
    console.log(JSON.stringify(newsData));
    let objEvents = '';
    if (newsData && newsData.code === 0) {
      objEvents = newsData.data;
    } else {
      objEvents = '';
    }
    return {
      objEvents
    };
  },
  data() {
    return {
      obj: {
        email: '',
        language_type: 1
      },
      arrEvents: [],
      langType: 1
    };
  },
  head() {
    console.log(this.$route.path);
    return {
      title: `${this.objEvents.name} | IBAX Network`,
      meta: [
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.objEvents.name} | IBAX Network`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.objEvents.name} | IBAX Network`
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `${this.baseUrl}${this.$route.path}`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.objEvents.keywords
        },
        {
          hid: 'description',
          name: 'description',
          content: this.objEvents.introduction
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.objEvents.introduction
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.objEvents.introduction
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${this.baseUrl}${this.objEvents.icon}`
        }
      ]
    };
  },
  computed: {},
  watch: {
    lang() {
      const langType = this.handleGetLanguage(this.lang);
      console.log(langType);
      this.langType = langType;
      this.obj.language_type = langType;
      this.handleArrEvents(this.langType);
    }
  },
  created() {
    const lang = handleGetLang();
    const langType = this.handleGetLanguage(lang);
    console.log(langType);
    this.langType = langType;
    this.obj.language_type = langType;
    this.handleArrEvents(this.langType);
  },
  mounted() {
    this.shareon();
    this.$nextTick(() => {
      this.domGlobal.addEventListener('scroll', () => {
        this.handleThrottle(this.handleAlwaysScroll, 100);
      });
    });
  },
  methods: {
    handleKeywords() {},
    handleAlwaysScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numArchite = document
        .getElementById('marvellous')
        .getBoundingClientRect().bottom;
      if (this.numArchite <= 0) {
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
    async handleSendEmail() {
      const params = this.obj;
      const res = await this.$axios.$post(`/get_email`, params);
      if (res.code === 0) {
        this.$message({
          showClose: true,
          message: res.message,
          type: 'success'
        });
      } else {
        this.$message({
          showClose: true,
          message: res.message,
          type: 'warning'
        });
      }
    },
    async handleArrEvents(params) {
      const res = await this.$axios.$get(`/eventsrandow/${params}`);
      const { data } = res;
      if (res.code === 0) {
        this.arrEvents = data.rets;
        console.log(JSON.stringify(this.arrEvents));
      }
    }
  }
};
</script>
