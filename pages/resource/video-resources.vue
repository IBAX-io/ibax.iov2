<template>
  <div class="resource">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="resource-video">
          <el-row type="flex" justify="space-between" class="el-row-wrap">
            <el-col :xs="24" :lg="10">
              <div class="resource-top">
                <strong
                  class="resource-box-btn wow fadeInUp"
                  style="text-transform: uppercase"
                  >{{ $t('resourse.introduce') }}</strong
                >
                <h4 class="title-h4 wow fadeInUp">
                  {{ $t('resourse.explanation') }}
                </h4>
                <p class="wow fadeInUp">{{ $t('resource.practical') }}</p>
                <p class="wow fadeInUp">{{ $t('resource.provide') }}</p>
                <div class="resource-bottom">
                  <p class="wow fadeInUp">{{ $t('resourse.sourceview') }}</p>
                  <div class="resource-top-href wow fadeInUp">
                    <button
                      class="btn btn-primary"
                      @click="handlePlayIntroduce"
                    >
                      {{ $t('resourse.start') }}
                    </button>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :lg="12">
              <!-- <div v-if="isIntroduce" class="resource-img">
                <img
                  class="resource-img-right wow fadeInUp"
                  src="@/assets/images/video-1.jpg"
                  alt="video"
                />
              </div> -->
              <div class="resource-video-box">
                <youtube
                  ref="introduce"
                  :resize="isResize"
                  :fit-parent="isResize"
                  :player-vars="playerVars"
                  video-id="jzfvZMb_jus"
                  @ended="videoEndedIntroduce"
                  @error="videoErrorIntroduce"
                ></youtube>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="resource-video">
          <el-row type="flex" justify="space-between" class="el-row-wrap">
            <el-col :xs="24" :lg="10">
              <div class="resource-top">
                <h4 class="title-h4 wow fadeInUp">{{ $t('resourse.how') }}</h4>
                <div>
                  <p class="home-new-title wow fadeInUp">
                    <i class="iconfont el-create resource-top-icon"></i>
                    <span>{{ $t('resourse.quickly') }}</span>
                  </p>
                  <p class="home-new-title wow fadeInUp">
                    <i class="iconfont el-one resource-top-icon"></i>
                    <span>{{ $t('resourse.issuance') }}</span>
                  </p>
                  <p class="home-new-title wow fadeInUp">
                    <i class="iconfont el-keshi resource-top-icon"></i>
                    <span>{{ $t('resourse.visual') }}</span>
                  </p>
                </div>
                <div class="resource-top-bottom">
                  <p class="wow fadeInUp">{{ $t('resourse.sourceview') }}</p>
                  <div class="resource-top-href wow fadeInUp">
                    <button
                      class="btn btn-primary"
                      @click="handlePlaySourceview"
                    >
                      {{ $t('resourse.start') }}
                    </button>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :lg="12">
              <!-- <div class="resource-img wow fadeInUp">
                <img
                  class="resource-img-right"
                  src="@/assets/images/video-weaver.jpg"
                  alt="video-weaver"
                />
              </div> -->
              <div class="resource-video-box">
                <youtube
                  ref="sourceview"
                  :resize="isSourceview"
                  :fit-parent="isResize"
                  :player-vars="playerVars"
                  video-id="v6djILrPGbw"
                  @ended="videoEndedSourceview"
                  @error="videoErrorSourceview"
                ></youtube>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id="resourseMiddle" class="resource-middle">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18">
          <div class="resource-middle-h3">
            <h3 class="title-h3 wow fadeInUp">{{ $t('resourse.video') }}</h3>
          </div>
          <el-row
            type="flex"
            justify="space-between"
            class="el-row-wrap"
            style="flex-wrap: wrap"
          >
            <el-col
              v-for="item in arrVideos"
              :key="item.videoId"
              :xs="24"
              :lg="7"
              style="margin-bottom: 30px"
            >
              <div class="resource-img wow fadeInUp">
                <youtube
                  :ref="item.videoId"
                  :resize="isSourceview"
                  :fit-parent="isResize"
                  :player-vars="playerVars"
                  :video-id="item.videoId"
                ></youtube>
              </div>
              <p class="resource-middle-text wow fadeInUp">
                {{ item.text }}
              </p>
              <a
                class="home-new-bottom link wow fadeInUp"
                :href="item.href"
                target="_blank"
              >
                <span>Watch Now</span>
                <i class="el-icon-right"></i>
              </a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <page-bottom class="lime"></page-bottom>
    <dialog-video
      :dialog-boo="dialogVideo"
      @videoclose="handleVideoClose"
    ></dialog-video>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      isOpen: false,
      isResize: true,
      isIntroduce: false,
      isSourceview: false,
      playerVars: {},
      arrVideos: [
        {
          videoId: '5yFY9vF2eIU',
          text: 'IBAX Network CEO Stuart Nichols gave a brief introduction and shares his vision of IBAX.',
          href: 'https://www.youtube.com/watch?v=5yFY9vF2eIU'
        },
        {
          videoId: 'Iu8UdTljh1g',
          text: 'IBAX Network COO Alan Mclvor gave us a 1 minute brief introduction of IBAX Network.',

          href: 'https://youtu.be/Iu8UdTljh1g'
        },
        {
          videoId: 'MVNppxG8DLM',
          text: 'IBAX Network General Marketing Manager Gianluca gave a 1 minute brief introduction of IBAX.',

          href: 'https://youtu.be/MVNppxG8DLM'
        },
        {
          videoId: 'hNtcP8d32x0',
          text: 'IBAX Network COO Alan Mclvor welcome everyone to join IBAX testnet, our testnet is online!.',
          href: 'https://youtu.be/hNtcP8d32x0'
        },
        {
          videoId: 'PJp473U8GJU',
          text: 'IBAX A fast and reliable new blockchain network.',
          href: 'https://youtu.be/PJp473U8GJU'
        }
      ]
    };
  },
  head() {
    return {
      title: `Video | IBAX Network`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Intro, IBAX Network, Video, Weaver, Create'
        },
        {
          hid: 'description',
          name: 'description',
          content: `Get To Know IBAX In A Video`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.baseUrl}${this.$route.path}`
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: `${this.baseUrl}${this.$route.path}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Video | IBAX Network`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Get To Know IBAX In A Video`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Video | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `Get To Know IBAX In A Video`
        }
      ]
    };
  },
  computed: {
    playerIntroduce() {
      return this.$refs.introduce.player;
    },
    playerSourceview() {
      return this.$refs.sourceview.player;
    }
  },
  watch: {},
  created() {},
  mounted() {
    const obj = { headerColor: '#274235', color: '#fff' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleIsTop', true);
    this.$store.commit('handleIsFixed', false);
    this.$store.commit('handleChangeClass', 'subMenu--horizontal');
    this.$nextTick(() => {
      this.domGlobal = document.getElementById('global').firstChild;
      this.domHeaderTop = document.getElementById('headerTop');
      this.playerVars.origin = window.location.origin;
      const wow = new this.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        scrollContainer: '.el-scrollbar__wrap',
        offset: 0,
        mobile: true,
        live: false
      });
      wow.init();
    });
    this.domGlobal.addEventListener('scroll', this.handlerMiddleScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener(
      'scroll',
      this.handlerMiddleScroll,
      true
    );
  },
  methods: {
    handleIsopen() {
      this.isOpen = !this.isOpen;
    },
    handlerMiddleScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      this.numMiddleTop = document
        .getElementById('resourseMiddle')
        .getBoundingClientRect().top;
      // console.log(this.numArchite);
      this.numMiddleBottom = document
        .getElementById('resourseMiddle')
        .getBoundingClientRect().bottom;
      if (this.numMiddleTop <= 0 && this.numMiddleBottom > 0) {
        const obj = { headerColor: '#fff', color: '#37383c' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'news--horizontal');
        this.$store.commit('handleIsTop', false);
      } else if (this.numMiddleBottom <= 0) {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      } else {
        const obj = { headerColor: '#274235', color: '#fff' };
        this.$store.commit('handleChangeColor', obj);
        this.$store.commit('handleChangeClass', 'subMenu--horizontal');
        this.$store.commit('handleIsTop', true);
      }
    },
    handlePlayIntroduce() {
      this.playerIntroduce.playVideo();
    },
    videoEndedIntroduce() {
      this.playerIntroduce.playVideo();
    },
    videoErrorIntroduce() {
      this.isIntroduce = false;
    },
    handlePlaySourceview() {
      this.playerSourceview.playVideo();
    },
    videoEndedSourceview() {
      this.playerSourceview.playVideo();
    },
    videoErrorSourceview() {
      this.isSourceview = false;
    }
  }
};
</script>
