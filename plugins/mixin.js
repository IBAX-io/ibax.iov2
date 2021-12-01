import Vue from 'vue';
import { handleSaveCookie } from '../assets/js/public.js';
import baseURL from '../config/api';
console.log(baseURL);
console.log(process.env.NODE_ENV);
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
    },
    token() {
      return this.$store.getters.handleToken;
    },
    userInfo() {
      return this.$store.getters.handleUserInfo;
    },
    invitecode() {
      return this.$store.getters.handleInvitecode;
    }
  },
  created() {
    if (process.env.NUXT_ENV.MODE === 'dev') {
      this.baseUrl = 'http://192.168.1.85:8084';
    } else if (process.env.NUXT_ENV.MODE === 'test') {
      this.baseUrl = 'https://testnet-us-34-86-177-19.ibax.io';
    } else {
      this.baseUrl = 'https://ibax.io';
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
    handleTimeShow(millisecond) {
      return this.dayjs.utc(parseInt(millisecond)).format('LLL');
    },
    handleReduce(arr, key = 'id') {
      console.log(arr);
      const obj = {};
      const arrResult = arr.reduce((cur, next) => {
        // eslint-disable-next-line no-unused-expressions
        obj[next[key]] ? '' : (obj[next[key]] = true && cur.push(next));
        return cur;
      }, []);
      return arrResult;
    },
    money_format(money) {
      if (money !== undefined) {
        const arr = money.toString().split('.');
        return (
          (arr[0] || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') +
          (arr[1] ? '.' + arr[1] : '')
        );
      } else {
        return money;
      }
    },
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
    async handleSignOut(val) {
      if (val === 'out') {
        const res = await this.$axios.$post('/tw/loginout');
        console.log(res);
        if (res.code === 0) {
          this.$store.commit('handleChangeToken', '');
          // localStorage.removeItem('token');
          handleSaveCookie('token', '', -1);
          localStorage.removeItem('invitecode');
          window.location.reload();
        }
      }
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
