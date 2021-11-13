<!--
 * @Author: abc
 * @Date: 2021-08-19 14:16:42
 * @LastEditors: abc
 * @LastEditTime: 2021-11-13 15:55:57
 * @Description: 
-->
<template>
  <div class="personal">
    <div class="personal-img">
      <img src="../../assets/images/login/personal.png" alt="personal" />
    </div>
    <div class="personal-score">
      <el-row type="flex" justify="center">
        <el-col :sm="22" :lg="18" :md="20">
          <h6 class="title-h6">Points already: 0</h6>
          <div class="personal-score-text">
            <span> Follow IBXA to get 2000 points</span>
            <a
              href="https://twitter.com/IbaxNetwork"
              target="_blank"
              class="personal-score-link"
            >
              Go to follow
              <i class="el-icon-arrow-right"></i>
            </a>
          </div>
        </el-col>
      </el-row>
      <div class="personal-tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Integral task" name="first">
            <el-row type="flex" justify="center">
              <el-col :sm="22" :lg="18" :md="20">
                <div class="personal-tabs-task">
                  <div class="personal-tabs-task-left">
                    <div>Go to retweet</div>
                    <div class="personal-tabs-task-left-bottom">
                      +200 <i class="el-icon-arrow-right"></i>
                    </div>
                  </div>
                  <div class="personal-tabs-task-middle">
                    A BLOCKCHAIN GLOSSARY FOR BEGINNERS
                  </div>
                  <div class="personal-tabs-task-right">
                    <img src="../../assets/images/login/task.png" alt="task" />
                  </div>
                </div>
                <div class="personal-tabs-task-btn">
                  <button class="btn btn-primary">See more tasks</button>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="Redeem points" name="second">
            <div class="personal-tabs-points">
              <el-row type="flex" justify="center">
                <el-col :sm="22" :lg="18" :md="20">
                  <div class="personal-tabs-points-img">
                    <img
                      src="../../assets/images/login/points.png"
                      alt="points"
                    />
                  </div>
                  <p class="title-h6">The event is still in progress</p>
                  <p class="title-h6">please redeem after the event ends</p>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Points rules" name="third"
            >Points rules</el-tab-pane
          >
          <el-tab-pane label="Points record" name="fourth">
            <div class="personal-tabs-record">
              <el-row type="flex" justify="center">
                <el-col :sm="22" :lg="18" :md="20">
                  <div class="personal-tabs-record-head">
                    <div>Date</div>
                    <div>Participate</div>
                    <div>Earn points</div>
                  </div>
                  <div class="personal-tabs-record-head">
                    <div class="personal-tabs-record-head-text">7 Dec 2020</div>
                    <div class="personal-tabs-record-head-text">
                      Follow Twitter
                    </div>
                    <div class="personal-tabs-record-head-text">+200</div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  layout: 'newsLayouts',
  props: {},
  data() {
    return {
      activeName: 'first'
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // this.handleGetUser();
    this.handleSiteMap();
  },
  methods: {
    async handleSiteMap() {
      const res = await axios.get('http://192.168.1.191:8888/newsEventsLink');
      console.log(res);
      const { eventsList, newsList } = res.data.data;
      const events = [];
      const news = [];
      console.log(eventsList);
      if (eventsList.length) {
        eventsList.map((item) => {
          const obj = {};
          obj.url = `/resource/events/${item.url}`;
          obj.changefreq = 'always';

          obj.priority = 0.8;
          events.push(obj);
        });
      }
      newsList.map((item) => {
        const obj = {};
        obj.url = `/resource/news/${item.url}`;
        obj.changefreq = 'always';

        obj.priority = 0.8;
        news.push(obj);
      });
      console.log(news);
      /* const res = await fetch('http://192.168.1.191:8888/newsEventsLink', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer' // *client, no-referrer
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } */
    },
    async handleGetUser() {
      const res = await this.$axios.$post('/tw/getuser');
      console.log(res);
      if (res.code === 0) {
        this.$store.commit('handleUserInfo', res.data);
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
