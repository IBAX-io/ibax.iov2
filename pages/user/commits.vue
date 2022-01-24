<template>
  <div class="user-commits">
    <div class="user-commits-title">
      <a
        href="https://github.com/IBAX-io/go-ibax/discussions"
        target="_blank"
        class="user-commits-title-link"
      >
        <span class="user-commits-title-link-bull"></span>
        <span>{{ $t('personal.committed') }}</span>
        <i class="el-icon-right"></i>
      </a>
    </div>
    <div
      v-if="arrBugs.length === 0"
      class="personal-tabs-record-img"
      style="margin-top: 20vh"
    >
      <img src="@/assets/images/login/no-data.png" alt="no-data" />
    </div>
    <div v-else ref="bugsleft" class="develop-bugs-left-box">
      <div v-for="item in arrBugs" :key="item.id" class="develop-bugs-item">
        <div class="develop-bugs-item-odd">
          <h6 class="title-h6 develop-bugs-item-title">
            <span>{{ item.title }}</span>
            <a
              v-if="item.category"
              :href="item.category_url"
              target="_blank"
              class="develop-wonder-item-middle-bottom-name"
              ># {{ item.category }}</a
            >
          </h6>
          <div class="develop-bugs-item-content">
            <div class="develop-bugs-item-content-right">
              <div v-if="item.labels"># {{ item.labels }}</div>
              <div>
                <i class="iconfont el-Pionts"></i>
                <span class="develop-wonder-item-middle-bottom-number">{{
                  money_format(item.points)
                }}</span>
              </div>
              <div>
                <i class="iconfont el-Block"></i>
                <a
                  :href="`${browserUrl}/transaction/${item.hash}`"
                  target="_blank"
                  class="develop-wonder-item-middle-bottom-name"
                  >{{ item.block_id }}</a
                >
              </div>
            </div>
            <div class="develop-bugs-item-content-textarea">
              <el-input
                v-if="item.content.length >= 300"
                v-model="item.content"
                class="develop-textarea"
                type="textarea"
                :placeholder="$t('develope.issue')"
                readonly
              >
              </el-input>
              <div
                v-else
                class="develop-textarea-text"
                v-html="item.content"
              ></div>
              <div class="develop-bugs-item-content-textarea-bottom">
                <img
                  class="develop-bugs-item-content-textarea-img"
                  :src="`${baseUrl}${item.level_icon}`"
                  alt="level_icon"
                />
                <span class="develop-bugs-item-content-textarea-level">{{
                  item.level_name
                }}</span>
                <a
                  :href="item.author_url"
                  target="_blank"
                  class="develop-wonder-item-middle-bottom-name"
                  >{{ item.author }}
                </a>
                <span>{{ $t('develope.on') }} </span>
                <span
                  v-if="item.author_created !== 0"
                  class="develop-wonder-item-middle-bottom-time"
                  >{{ handleMillisecondShow(item.author_created) }}</span
                >
                <span v-if="item.author_created !== 0"
                  >{{ $t('develope.on') }}
                </span>
                <a
                  :href="item.category_url"
                  target="_blank"
                  class="develop-wonder-item-middle-bottom-name"
                >
                  # {{ item.category }}</a
                >
                <span>{{ $t('develope.mentioned') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- bugs page -->
    <div v-if="objBugs.length !== 0" class="personal-tabs-task-btn">
      <button
        v-if="isMobile"
        v-show="isMore"
        class="btn btn-primary"
        @click="handleMoreNext"
      >
        {{ $t('footer.more') }}
      </button>
      <el-pagination
        v-else
        background
        width="400"
        hide-on-single-page
        :page-size="objBugs.limit"
        layout="prev, pager, next"
        :total="bugsTotal"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      objBugs: {
        page: 1,
        limit: 1,
        order: 'id desc',
        language_type: 1
      },
      arrBugs: [],
      bugsTotal: 1,
      isMore: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.objBugs.page = 1;
    this.handleGithubBugs(this.objBugs);
  },
  methods: {
    async handleGithubBugs(params) {
      const res = await this.$axios.$post(
        '/github/my_discussion_record',
        params
      );
      console.log(JSON.stringify(res));
      if (res.code === 0) {
        if (res.data.rets.length) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.arrBugs = res.data.rets;
              this.isMore = res.data.total > res.data.rets.length;
            } else {
              const arrBugs = this.handleReduce([
                ...this.arrBugs,
                ...res.data.rets
              ]);
              this.arrBugs = [...arrBugs];
              this.isMore = res.data.total > this.arrBugs.length;
            }
          } else {
            this.arrBugs = res.data.rets;
            this.bugsTotal = res.data.total;
          }
        } else if (params.page !== 1) {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        }
      } else {
        this.arrBugs = [];
      }
    },
    handleCurrentChange(page) {
      console.log(page);
      this.objBugs.page = page;
      this.handleGithubBugs(this.objBugs);
    },
    handleMoreNext() {
      this.objBugs.page++;
      this.handleGithubBugs(this.objBugs);
    }
  }
};
</script>
