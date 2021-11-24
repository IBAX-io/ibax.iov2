import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
const axios = require('axios');
dayjs.extend(utc);
export default [
  {
    path: '/sitemap.xml',
    hostname: 'https://ibax.io/',
    cacheTime: 1000 * 60 * 60 * 24,
    gzip: true,
    generate: false,
    exclude: ['/404', '/login', '/user', '/login/callback', '/login/rules'],
    defaults: {
      changefreq: 'always',
      lastmod: dayjs.utc().format('YYYY-MM-DDTHH:mm:ssZ'),
      priority: 0.8
    },
    routes: (callback) => {
      const targetUrl = 'https://ibax.io/api/newsEventsLink';
      axios.get(targetUrl).then((res) => {
        const routes = [
          {
            url: '/',
            changefreq: 'always',
            lastmod: dayjs.utc().format('YYYY-MM-DDTHH:mm:ssZ'),
            priority: 1
          }
        ];
        if (res.data.code === 0) {
          const { eventsList, newsList } = res.data.data;
          const events = [];
          const news = [];
          eventsList.map((item) => {
            const obj = {};
            obj.url = `/resource/events/${item.url}`;
            obj.changefreq = 'always';
            obj.lastmod = dayjs
              .utc(parseInt(item.createTime) * 1000)
              .format('YYYY-MM-DDTHH:mm:ssZ');
            obj.priority = 0.8;
            events.push(obj);
          });
          newsList.map((item) => {
            const obj = {};
            obj.url = `/resource/news/${item.url}`;
            obj.changefreq = 'always';
            obj.lastmod = dayjs
              .utc(parseInt(item.createTime) * 1000)
              .format('YYYY-MM-DDTHH:mm:ssZ');
            obj.priority = 0.8;
            news.push(obj);
          });
          //  console.log(routes.concat(news, events));
          callback(null, routes.concat(news, events));
        }
      });
      // callback(null, routes);
    }
  }
];
