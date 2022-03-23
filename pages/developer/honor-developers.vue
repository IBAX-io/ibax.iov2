<template>
  <div class="develop">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18">
        <div class="develop-honor">
          <swiper-carousel
            v-if="arrHonor.length"
            :source="arrHonor"
            @chackindex="handleLeaderboardChange"
          ></swiper-carousel>
          <div class="develop-honor-person">
            <div
              v-for="item in arrLeaderboard"
              :key="item.id"
              class="develop-honor-person-item"
            >
              <div class="develop-honor-person-item-img">
                <img :src="item.user_avatar" alt="user_avatar" />
              </div>
              <div class="develop-honor-person-item-text">
                <p>{{ item.username }}</p>
                <p>
                  <i class="iconfont el-Pionts"></i>
                  <span>Points: {{ money_format(item.points) }}</span>
                </p>
              </div>
            </div>
          </div>
          <!-- page -->
          <div
            v-if="arrLeaderboard.length !== 0"
            class="develop-tabs-task-page develop-tabs-task-btn"
          >
            <button
              v-if="isMobile"
              v-show="isMore"
              class="btn btn-primary"
              @click="handleForwardNext"
            >
              {{ $t('footer.more') }}
            </button>
            <el-pagination
              v-else
              background
              width="400"
              hide-on-single-page
              :page-size="objLead.limit"
              layout="prev, pager, next"
              :total="leaderTotal"
              :current-page="objLead.page"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="develop-honor-bottom">
      <img src="@/assets/images/develop-4.png" alt="develop-4" />
      <img src="@/assets/images/develop-5.png" alt="develop-5" />
      <img src="@/assets/images/develop-6.png" alt="develop-6" />
    </div>
  </div>
</template>
<script>
import { handleGetLang } from '../../assets/js/public';
export default {
  components: {},
  props: {},
  data() {
    return {
      activeName: 'first',
      tabPosition: 'bottom',
      arrHonor: [],
      timer: null,
      objLead: {
        type: 2,
        source: '',
        limit: 24,
        page: 1,
        language: 'en'
      },
      arrLeaderboard: [],
      leaderTotal: 1,
      isMore: false,
      objLeader: {},
      objHonor: {
        type: 2,
        language: 'en'
      }
    };
  },
  head() {
    return {
      title: `${this.$t('nav.development')}-IBAX`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('nav.development')} | IBAX Network`
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
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('nav.development')} | IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,Developer,Weaver,LowCode'
        },
        {
          hid: 'description',
          name: 'description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `The BaaS function has been added to Weaver and you can use it to create and manage your ecosystem.`
        }
      ]
    };
  },
  computed: {},
  watch: {
    lang() {
      this.objHonor.language = this.lang;
      this.objLead.language = this.lang;
      this.handleGithubTitleList(this.objRocrad);
    }
  },
  created() {
    const lang = handleGetLang();
    this.objHonor.language = lang;
    this.objLead.language = lang;
    this.handleGithubTitleList(this.objHonor);
  },
  mounted() {
    const obj = { headerColor: '#274235', color: '#fff' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleIsTop', true);
    this.$store.commit('handleIsFixed', false);
    this.$store.commit('handleChangeClass', 'subMenu--horizontal');
    this.$nextTick(() => {
      this.domGlobal = document.getElementById('global').firstChild;
      this.domHeaderTop = document.getElementById('headerTop');
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
    this.domGlobal.addEventListener('scroll', this.handleArchiteScroll, true);
  },
  destroyed() {},
  methods: {
    handleArchiteScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
    },
    async handleGithubTitleList(params) {
      const res = await this.$axios.$post('/github_title_list', params);
      console.log(JSON.stringify(res));
      if (res.code === 0 && res.data) {
        this.arrHonor = res.data;
        this.objLeader = this.arrHonor[0];
        this.handleGithubLeaderboard(this.objLeader.title);
      } else {
        this.arrHonor = [];
      }
    },
    handleLeaderboardChange(index) {
      console.log(index);
      this.objLeader = this.arrHonor[index];
      this.handleGithubLeaderboard(this.objLeader.title);
    },
    handleCurrentChange(page) {
      this.handleGithubLeaderboard(this.objLeader.title, page);
    },
    async handleGithubLeaderboard(title, page = 1) {
      console.log(title);
      this.objLead.source = title;
      this.objLead.page = page;
      const params = this.objLead;
      const res = await this.$axios.$post('/github_leaderboard', params);
      console.log(JSON.stringify(res));
      if (res.code === 0) {
        if (res.data.rets) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.arrLeaderboard = res.data.rets;
              this.isMore = res.data.total > res.data.rets.length;
            } else {
              const arrLeaderboard = this.handleReduce([
                ...this.arrLeaderboard,
                ...res.data.rets
              ]);
              this.arrLeaderboard = [...arrLeaderboard];
              console.log(this.arrLeaderboard.length);
              console.log(res.data.total);
              this.isMore = res.data.total > this.arrLeaderboard.length;
              console.log(this.isMore);
            }
          } else {
            this.arrLeaderboard = res.data.rets;
            this.leaderTotal = res.data.total;
          }
        } else if (params.page !== 1) {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        } else {
          this.arrLeaderboard = [];
          this.leaderTotal = 1;
        }
      } else {
        this.arrLeaderboard = [];
      }
    },
    handleForwardNext() {
      this.objLead.page++;
      this.handleGithubLeaderboard(this.objLeader.title, this.objLead.page);
    }
  }
};
</script>
