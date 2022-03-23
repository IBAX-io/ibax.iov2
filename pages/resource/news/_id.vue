<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :sm="22" :lg="16" :md="20">
        <div class="lead-img">
          <img :src="objNews.icon" alt="banner" />
        </div>
        <div class="news-articles-contnent">
          <h1 class="news-articles-h2">{{ objNews.title }}</h1>
          <div class="news-box" v-html="objNews.content"></div>
          <div class="shareon">
            <a class="facebook"></a>
            <a class="linkedin"></a>
            <button class="reddit"></button>
            <button class="telegram"></button>
            <button class="twitter"></button>
          </div>
        </div>
        <div class="news-articles">
          <h2 class="news-articles-h2">{{ $t('feature.articles') }}</h2>
          <div class="news-content">
            <div v-if="arrNew.length === 0" class="news-no">Loading</div>
            <template v-else>
              <div
                v-for="item in arrNew"
                :key="item.id"
                class="news-content-item"
              >
                <div class="news-content-item-card">
                  <nuxt-link
                    :to="{ name: 'resource-news-id', params: { id: item.url } }"
                  >
                    <div class="news-content-item-card-img">
                      <img
                        :src="item.icon"
                        class="attachment-full"
                        alt="Mixpanel-Implementation-Final-Compressed"
                      />
                    </div>
                    <div class="news-content-item-text">
                      <strong class="subtitle">{{
                        $t(`${handleType(item.type)}`)
                      }}</strong>
                      <h4 class="news-articles-h4">
                        {{ item.title }}
                      </h4>
                      <p class="news-articles-text">
                        {{ item.introduction.trim() }}
                      </p>
                    </div>
                  </nuxt-link>
                  <a
                    :href="item.source_url"
                    target="_blank"
                    class="news-content-item-avatar"
                  >
                    <img
                      v-if="item.sourceicon"
                      :src="item.sourceicon"
                      alt="sourceicon"
                    />
                    <span v-if="item.source">{{ item.source }}</span>
                  </a>
                </div>
              </div>
            </template>
          </div>
        </div>
      </el-col>
    </el-row>
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
  layout: 'newsLayouts',
  /*  validate({ params }) {
    // must number
    return /^\d+$/.test(params.id);
  }, */
  async asyncData({ app, params, router }) {
    // console.log(params);
    const newsData = await app.$axios.$get(`news/${params.id}`);
    console.log(JSON.stringify(newsData));
    let objNews = '';
    let id = '';
    if (newsData && newsData.code === 0) {
      objNews = newsData.data;
      id = newsData.homeindex;
      // where = newsData.homeenable;
    } else {
      objNews = '';
    }
    return {
      objNews,
      id
    };
  },

  data() {
    return {
      obj: {
        email: '',
        language: 1
      },
      objNews: '',
      arrNew: [],
      langType: 'en'
    };
  },
  head() {
    console.log(`${this.baseUrl}${this.objNews.icon}`);
    return {
      title: ` ${this.objNews.title} | IBAX Network`,
      meta: [
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.objNews.title} | IBAX Network`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.objNews.title} | IBAX Network`
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
          hid: 'keywords',
          name: 'keywords',
          content: this.objNews.keywords
        },
        {
          hid: 'description',
          name: 'description',
          content: this.objNews.introduction
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.objNews.introduction
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.objNews.introduction
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.baseUrl}${this.objNews.icon}`
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `${this.baseUrl}${this.objNews.icon}`
        }
      ]
    };
  },
  computed: {},
  watch: {
    lang() {
      const langType = this.lang;
      this.langType = langType;
      this.obj.language = langType;
    }
  },
  created() {
    const lang = handleGetLang();
    const langType = lang;
    this.langType = langType;
    this.obj.language = langType;
    this.handleNewsrandow(this.langType);
  },
  mounted() {
    this.shareon();
  },
  methods: {
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
    async handleNewsrandow(params) {
      const res = await this.$axios.$get(`/newsrandow/${params}`);
      const { data } = res;
      if (res.code === 0) {
        this.arrNew = data.rets;
        console.log(JSON.stringify(this.arrNew));
      }
    }
  }
};
</script>
