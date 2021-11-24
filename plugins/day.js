import Vue from 'vue';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import VueYoutube from 'vue-youtube';
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
dayjs.extend(utc);
Vue.prototype.dayjs = dayjs;
Vue.use(VueYoutube);
