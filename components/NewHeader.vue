<!--
 * @Author: abc
 * @Date: 2021-08-26 15:28:58
 * @LastEditors: abc
 * @LastEditTime: 2021-09-14 17:14:13
 * @Description: 
-->
<template>
  <div class="nav-news">
    <div class="nav-news-index">
      <nuxt-link :to="{ name: 'index' }">
        <i class="iconfont el-logo1"></i>
      </nuxt-link>
    </div>
    <a href="/blog" class="blog">
      <img
        src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/the-signal-logo.svg"
        class="attachment-full"
        alt="the-signal-logo"
        width="218"
      />
    </a>
    <div class="nav-news-right">
      <div class="nav-news-right-box">
        <input
          class="nav-news-right-box-email"
          type="email"
          name="email"
          placeholder="Subscribe to the Signal"
        />
        <button class="nav-news-right-box-btn">
          <i class="el-icon-right"></i>
        </button>
      </div>
      <div class="btn-wrap">
        <a
          href="https://mixpanel.com/register/?utm_content=top-nav"
          target=""
          class="btn btn--pri"
        >
          {{ $t('home.using') }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
