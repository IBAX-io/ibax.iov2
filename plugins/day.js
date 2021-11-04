/*
 * @Author: abc
 * @Date: 2021-10-08 15:35:36
 * @LastEditors: abc
 * @LastEditTime: 2021-10-08 15:51:12
 * @Description:
 */

import Vue from 'vue';
import dayjs from 'dayjs';
import VueYoutube from 'vue-youtube';
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
Vue.prototype.dayjs = dayjs;
Vue.use(VueYoutube);
