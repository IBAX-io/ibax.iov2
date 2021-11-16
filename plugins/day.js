/*
 * @Author: abc
 * @Date: 2021-10-08 15:35:36
 * @LastEditors: abc
 * @LastEditTime: 2021-11-15 17:03:38
 * @Description:
 */

import Vue from 'vue';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import VueYoutube from 'vue-youtube';
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
dayjs.extend(utc);
Vue.prototype.dayjs = dayjs;
Vue.use(VueYoutube);
