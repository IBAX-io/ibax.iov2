import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhCN from 'element-ui/lib/locale/lang/zh-CN';
import zhTW from 'element-ui/lib/locale/lang/zh-TW';
import zhBG from 'element-ui/lib/locale/lang/en';
import frLocale from 'element-ui/lib/locale/lang/fr';
import trLocale from 'element-ui/lib/locale/lang/tr-TR';
import deLocale from 'element-ui/lib/locale/lang/de';
import { handleGetLang } from '../assets/js/public.js';
const en = require('@/lang/en-us.json');
const zh = require('@/lang/zh-cn.json');
const tw = require('@/lang/zh-tw.json');
const fr = require('@/lang/french.json');
const tr = require('@/lang/tr-TR.json');
const ge = require('@/lang/german.json');
const mergeZH = Object.assign({}, zhCN, zh);
const mergeEN = Object.assign({}, zhBG, en);
const mergeTW = Object.assign({}, zhTW, tw);
const mergeFR = Object.assign({}, frLocale, fr);
const mergeTR = Object.assign({}, trLocale, tr);
const mergeDE = Object.assign({}, deLocale, ge);
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
      'zh-CN': mergeZH,
      'zh-TW': mergeTW,
      fr: mergeFR,
      'tr-TR': mergeTR,
      de: mergeDE
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
