<template>
  <div class="personal">
    <div class="personal-img">
      <img src="../../assets/images/login/personal.png" alt="personal" />
    </div>
    <div class="personal-score">
      <el-row type="flex" justify="center">
        <el-col :sm="22" :lg="18" :md="20">
          <div class="personal-box">
            <div class="personal-top">
              <h6 class="title-h6">
                <span style="margin-right: 10px">{{ $t('personal.own') }}</span
                >{{ money_format(statistics) }}
              </h6>
              <div class="personal-score-text">
                <a
                  v-if="showFollow.status"
                  href="https://twitter.com/IbaxNetwork"
                  target="_blank"
                  class="personal-score-text-link"
                >
                  <span class="personal-score-text-link-text"
                    >{{ $t('personal.fol') }}:</span
                  >
                  @{{ showFollow.followsUserName }}
                </a>
                <span v-else> {{ $t('personal.get') }} </span>
                <a
                  v-if="!showFollow.status"
                  :href="showFollow.link"
                  target=" _blank"
                  class="personal-score-link"
                  @click="handleIsFollow(showFollow)"
                >
                  {{ $t('personal.go') }}
                  <i class="el-icon-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="personal-right">
              <button
                class="personal-right-btn"
                :class="{ 'personal-right-active': isTabs }"
                :disabled="isTabs"
                @click="handleChangetabs('retweet')"
              >
                {{ $t('personal.retweets') }}
              </button>
              <span class="personal-right-middle">/</span>
              <button
                class="personal-right-btn"
                :class="{ 'personal-right-active': !isTabs }"
                :disabled="!isTabs"
                @click="handleChangetabs('share')"
              >
                {{ $t('personal.share') }}
              </button>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- retweet -->
      <user-retweet v-if="isTabs"></user-retweet>
      <!-- share -->
      <user-share v-if="!isTabs"></user-share>
    </div>
  </div>
</template>
<script>
import UserRetweet from './component/UserRetweet.vue';
import UserShare from './component/UserShare.vue';
export default {
  components: { UserRetweet, UserShare },
  layout: 'newsLayouts',
  props: {},
  data() {
    return {
      isTabs: true,
      objFollow: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 5,
        type: 1
      },
      statistics: 0,
      showFollow: {}
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.handleGetFollow(this.objFollow);
  },
  methods: {
    handleChangetabs(str) {
      if (str === 'retweet') {
        this.isTabs = true;
      } else {
        this.isTabs = false;
      }
    },
    async handlePointsAlready() {
      const res = await this.$axios.$post('/tw/get_points_statistics');
      console.log(res);
      if (res.code === 0) {
        this.statistics = res.data.statistics;
      } else {
        this.statistics = 0;
      }
    },
    async handleGetFollow(params) {
      const res = await this.$axios.$post('/tw/get_activity', params);
      //  console.log(res);
      if (res.code === 0 && res.data.rets) {
        this.showFollow = res.data.rets[0];
      } else {
        this.showFollow = {};
      }
    }
  }
};
</script>
