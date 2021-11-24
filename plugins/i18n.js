import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhCN from 'element-ui/lib/locale/lang/zh-CN';
import zhTW from 'element-ui/lib/locale/lang/zh-TW';
import zhBG from 'element-ui/lib/locale/lang/en';
import frLocale from 'element-ui/lib/locale/lang/fr';
import { handleGetLang } from '../assets/js/public.js';
const en = require('@/lang/en-us.json');
const zh = require('@/lang/zh-cn.json');
const tw = require('@/lang/zh-tw.json');
const french = require('@/lang/french.json');
const mergeZH = Object.assign({}, zhCN, zh);
const mergeEN = Object.assign({}, zhBG, en);
const mergeTW = Object.assign({}, zhTW, tw);
const mergeFR = Object.assign({}, frLocale, french);
Vue.use(VueI18n);
export default ({ app, store }) => {
  let strLang = handleGetLang();
  if (handleGetLang()) {
    strLang = handleGetLang();
  } else {
    strLang = store.state.lang;
  }
  app.i18n = new VueI18n({
    locale: strLang,
    fallbackLocale: strLang,
    messages: {
      en: mergeEN,
      zh: mergeZH,
      tw: mergeTW,
      fr: mergeFR
    },
    silentTranslationWarn: true
  });
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  };
};
