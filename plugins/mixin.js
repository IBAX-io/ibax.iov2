import Vue from 'vue';
import { handleSaveCookie } from '../assets/js/public.js';
Vue.mixin({
  data() {
    return {
      domGlobal: '',
      domHeaderTop: '',
      baseUrl: 'https://ibax.io',
      arrLang: [
        {
          label: 'English',
          lang: 'en'
        },
        {
          label: 'Français',
          lang: 'fr'
        },
        {
          label: 'Español',
          lang: 'es'
        },
        {
          label: '简体中文',
          lang: 'zh'
        },
        {
          label: '繁體中文',
          lang: 'tw'
        },
        {
          label: '한국인',
          lang: 'sk'
        },
        {
          label: '日本語',
          lang: 'jp'
        }
      ],
      arrType: [
        {
          value: 1,
          label: 'resourse.technology'
        },
        {
          value: 2,
          label: 'resourse.ecologically'
        },
        {
          value: 3,
          label: 'resourse.activities'
        }
      ],
      dialogVideo: false,
      isMobile: true
    };
  },
  computed: {
    lang() {
      return this.$store.getters.handdleLang;
    },
    headerColor() {
      // console.log(this.$store.getters.handleHeaderColor);
      return this.$store.getters.handleHeaderColor;
    },
    colorText() {
      //  console.log(this.$store.getters.handleColor);
      return this.$store.getters.handleColor;
    },
    domClass() {
      return this.$store.getters.handlePopperClass;
    },
    boxShadow() {
      //  console.log(this.$store.getters.handleBoxShadow);
      return this.$store.getters.handleBoxShadow;
    },
    isTop() {
      return this.$store.getters.handleIsTop;
    }
  },
  mounted() {
    if (document.getElementById('global')) {
      this.domGlobal = document.getElementById('global').firstChild;
    }
    const that = this;
    that.initIsMobile(that);
    window.addEventListener('resize', function () {
      that.initIsMobile(that);
    });
  },
  methods: {
    handleGetLanguage(lang) {
      // const lang = handleGetLang();
      let type = 1;
      switch (lang) {
        case 'en':
          type = 1;
          break;
        case 'zh':
          type = 2;
          break;
        case 'fr':
          type = 3;
          break;
        case 'tw':
          type = 4;
          break;
        default:
          type = 1;
          break;
      }
      return type;
    },
    initIsMobile(that) {
      if (process.client) {
        const width = document.body.offsetWidth;
        if (width > 992) {
          that.isMobile = false;
        } else {
          that.isMobile = true;
        }
      }
    },
    handleVideoOpen() {
      this.dialogVideo = true;
    },
    handleVideoClose() {
      this.dialogVideo = false;
    },
    handleCommand(val) {
      console.log(val);
      this.arrLang.map((item) => {
        if (val === item.lang) {
          this.strLang = item.label;
        }
      });
      this.$store.commit('handleChangeLang', val);
      this.$i18n.locale = val;
      handleSaveCookie('lang', { lang: val }, 7);
    },
    handleType(val) {
      const obj = this.arrType.find((item) => item.value === val);
      return obj.label;
    },
    handleThrottle(callback, time) {
      if (this.throttleTimer) return;
      this.throttleTimer = true;
      setTimeout(() => {
        callback();
        this.throttleTimer = false;
      }, time);
    },
    $analysis(str, dataArr) {
      const arr = str.match(/\[(.*?)\]/g);
      // console.log(arr);
      const width = '25';
      const height = '25';
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          for (const j in dataArr) {
            if (arr[i] === dataArr[j].phrase) {
              // console.log(dataArr[j].phrase);
              const ex =
                '<img width="' +
                width +
                '" height="' +
                height +
                '" src="' +
                dataArr[j].url +
                '">';
              str = str.replace(arr[i], ex);
              break;
            }
          }
        }
      }
      return str;
    },
    /* og:type 
    og:title 
       og:description 
       og:url 
       og:image 
       og:site_name 
       og:videosrc Flas 
       og:audiosrc  */
    $seo(title, type, content, keyWord, author, robots, payload = []) {
      // console.log(robots);
      return {
        title,
        meta: [
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            property: 'og:site_name',
            content: 'www.haomeren.com'
          },
          {
            hid: 'og:type',
            name: 'og:type',
            property: 'og:type',
            content: type
          },
          {
            hid: 'og:title',
            name: 'og:title',
            property: 'og:title',
            content: title
          },
          {
            hid: 'og:description',
            name: 'og:description',
            property: 'og:description',
            content
          },
          {
            hid: 'author',
            name: 'author',
            property: 'author',
            content: author
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: keyWord
          },
          {
            hid: 'robots',
            name: 'robots',
            content: robots
          }
        ].concat(payload)
      };
    }
  }
});
