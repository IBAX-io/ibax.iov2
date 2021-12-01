<template>
  <div class="news">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="16">
        <div class="news-top">
          <h2 class="news-h2">{{ $t('resourse.news') }}</h2>
          <p>{{ $t('resourse.follow') }}</p>
        </div>
        <div class="news-select">
          <div class="news-select-box">
            <el-select
              v-model="topics"
              clearable
              :no-data-text="$t('road.no')"
              :placeholder="$t('resourse.source')"
              @change="handleChange($event, 'topics')"
            >
              <el-option
                v-for="item in arrTopics"
                :key="item.value"
                :label="$t(item.label)"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="type"
              clearable
              :no-data-text="$t('road.no')"
              :placeholder="$t('resourse.type')"
              class="news-select-box-second"
              @change="handleChange($event, 'type')"
            >
              <el-option
                v-for="item in arrType"
                :key="item.value"
                :label="$t(item.label)"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="news-select-box">
            <el-input
              v-model="keywords"
              type="text"
              clearable
              :placeholder="$t('resourse.search')"
              @keyup.enter.native="handleKeywords"
            >
              <template #prefix>
                <i class="el-icon-search"></i>
              </template>
            </el-input>
          </div>
        </div>
        <div class="news-content">
          <div v-if="!objTop" class="news-no">Loading</div>
          <template v-else>
            <div class="news-content-helf">
              <div class="news-content-item-img">
                <img :src="objTop.icon" alt="picture" />
              </div>
            </div>
            <div class="news-content-helf">
              <div class="inner">
                <strong v-if="objTop.type" class="subtitle">{{
                  $t(`${handleType(objTop.type)}`)
                }}</strong>
                <h3>{{ objTop.title }}</h3>
                <p>{{ objTop.introduction }}</p>
                <nuxt-link
                  :to="{ name: 'resource-news-id', params: { id: objTop.url } }"
                  class="home-new-bottom link"
                >
                  <span>{{ $t('news.read') }} </span
                  ><i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </div>
          </template>
        </div>
        <div class="news-content">
          <div v-if="arrNews.length === 0" class="news-no">Loading</div>
          <template v-else>
            <div
              v-for="item in arrNews"
              :key="item.id"
              class="news-content-item"
            >
              <nuxt-link
                :to="{ name: 'resource-news-id', params: { id: item.url } }"
                class="news-content-item-card"
              >
                <div class="news-content-img">
                  <img :src="item.icon" :alt="item.icon" />
                </div>
                <div class="news-content-item-text">
                  <strong class="subtitle">
                    {{ $t(`${handleType(item.type)}`) }}
                  </strong>
                  <p>
                    {{ item.title }}
                  </p>
                </div>
              </nuxt-link>
            </div>
          </template>
        </div>
        <div class="news-page">
          <el-pagination
            hide-on-single-page
            :page-size="pageParams.limit"
            layout="prev, pager, next"
            :total="pageParams.total"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { handleGetLang } from '../../../assets/js/public.js';
export default {
  props: {},
  data() {
    return {
      keywords: '',
      isAppend: false,
      arrTopics: [
        {
          value: 1,
          label: 'resourse.official'
        },
        {
          value: 2,
          label: 'resourse.facebook'
        },
        {
          value: 3,
          label: 'resourse.twitter'
        },
        {
          value: 4,
          label: 'resourse.community'
        }
      ],
      topics: '',
      type: '',
      params: {
        where: {
          source: '',
          type: '',
          keywords: ''
        },
        page: 1,
        limit: 9,
        language: 1
      },
      pageParams: {
        total: 0,
        page: 1,
        limit: 10,
        language: 1
      },
      langType: 1,
      topParams: {
        where: {
          source: '',
          type: '',
          keywords: ''
        },
        istop: true,
        start_limit: 0,
        end_limit: 1,
        language: 1
      },
      arrNews: [],
      objTop: []
    };
  },
  head() {
    return {
      title: `News | IBAX Network`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `News | IBAX Network`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `News | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `News about IBAX`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'News,IBAX Network,Blcokchain,Resource '
        },
        {
          hid: 'description',
          name: 'description',
          content: `News about IBAX`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `News about IBAX`
        }
      ]
    };
  },
  computed: {},
  watch: {
    lang() {
      const langType = this.handleGetLanguage(this.lang);
      this.langType = langType;
      this.params.language = langType;
      this.handleNewsList(this.params);
      this.topParams.language = langType;
      this.handleNewsIstop(this.topParams);
      this.handleNewsource(this.langType);
    }
  },
  created() {
    const lang = handleGetLang();
    const langType = this.handleGetLanguage(lang);
    this.langType = langType;
    this.params.language = langType;
    this.handleNewsList(this.params);
    this.topParams.language = langType;
    this.handleNewsIstop(this.topParams);
    this.handleNewsource(this.langType);
  },
  deactivated() {
    this.domGlobal.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    const that = this;
    document.onkeydown = function (event) {
      const e = event || window.event;
      if (e && e.keyCode === 13) {
        that.handleKeywords();
      }
    };
  },
  methods: {
    async handleNewsList(params) {
      const res = await this.$axios.$post('/newsfind', params);
      const { data } = res;
      // console.log(JSON.stringify(data));
      if (res.code === 0) {
        this.pageParams.page = data.page;
        this.pageParams.limit = data.limit;
        this.pageParams.total = data.total;
        this.arrNews = data.rets;
      }
    },
    async handleNewsIstop(params) {
      const res = await this.$axios.$post('/newsfinds', params);
      const { data } = res;
      console.log(JSON.stringify(data));
      if (res.code === 0) {
        this.objTop = data.rets[0];
        console.log(JSON.stringify(this.objTop));
      }
    },
    async handleNewsource(params) {
      const res = await this.$axios.$get(`/newsource/${params}`);
      const { data } = res;
      if (res.code === 0) {
        this.arrTopics = data.rets;
        // console.log(JSON.stringify(this.arrTopics));
      }
    },
    handleCurrentChange(page) {
      this.params.page = page;
      this.handleNewsList(this.params);
    },
    handleChange($event, str) {
      this.params.page = 1;
      console.log($event, str);
      if (str === 'topics') {
        this.params.where.source = $event;
      } else {
        this.params.where.type = $event;
      }
      this.handleNewsList(this.params);
    },
    handleKeywords() {
      console.log(this.keywords);
      this.params.page = 1;
      this.params.where.keywords = this.keywords;
      this.handleNewsList(this.params);
    }
  }
};
</script>
