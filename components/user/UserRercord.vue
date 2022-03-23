<template>
  <div class="personal-tabs-record">
    <div v-if="pointRecord.length === 0" class="personal-tabs-record-img">
      <img src="@/assets/images/login/no-data.png" alt="no-data" />
    </div>
    <div v-else class="personal-tabs-record-box">
      <div class="personal-tabs-record-head">
        <div>{{ $t('personal.date') }} (UTC)</div>
        <div>{{ $t('personal.challenge') }}</div>
        <div>{{ $t('personal.earned') }}</div>
      </div>
      <div
        v-for="(item, index) in pointRecord"
        :key="item.id"
        class="personal-tabs-record-even"
        :class="{ 'personal-tabs-record-odd': (index + 1) % 2 !== 0 }"
      >
        <div class="personal-tabs-record-head-text">
          {{ handleTimeShow(item.time) }}
        </div>
        <div v-if="objType" class="personal-tabs-record-head-text">
          <span>{{ objType[item.type] }}</span>
        </div>
        <div class="personal-tabs-record-head-text">
          {{ money_format(item.points) }}
        </div>
      </div>
    </div>
    <div v-if="pointRecord.length !== 0" class="personal-tabs-task-btn">
      <button
        v-if="isMobile"
        v-show="isMore"
        class="btn btn-primary"
        @click="handleForwardNext('record')"
      >
        {{ $t('footer.more') }}
      </button>
      <el-pagination
        v-else
        background
        width="400"
        hide-on-single-page
        :page-size="objRocrad.limit"
        layout="prev, pager, next"
        :total="recordTotal"
        @current-change="handleCurrentChange($event, 'record')"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { handleGetLang } from '../../assets/js/public';
export default {
  props: {},
  data() {
    return {
      isMore: false,
      pointRecord: [],
      objRocrad: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 10
      },
      objType: {},
      objLang: {
        language: 'en'
      }
    };
  },
  computed: {},
  watch: {
    lang() {
      this.langType = this.lang;
      this.objLang.language = this.lang;
      this.handlePointRecord(this.objRocrad);
    }
  },
  created() {
    const lang = handleGetLang();
    this.objLang.language = lang;
    this.objRocrad.page = 1;
    this.handlePointRecord(this.objRocrad);
  },
  mounted() {},
  methods: {
    async handlePointRecord(params) {
      const res = await this.$axios.$post('/tw/get_points_record', params);
      console.log(res);
      if (res.code === 0) {
        if (res.data.rets.length) {
          if (this.isMobile) {
            if (params.page === 1) {
              this.pointRecord = res.data.rets;
            } else {
              const pointRecord = this.handleReduce([
                ...this.pointRecord,
                ...res.data.rets
              ]);
              this.pointRecord = [...pointRecord];
            }
            this.isMore = res.data.total > res.data.rets.length;
          } else {
            this.pointRecord = res.data.rets;
            this.recordTotal = res.data.total;
          }
          this.handleGetPointsType(this.objLang);
        } else if (params.page !== 1) {
          this.$message({
            type: 'warning',
            message: 'No more'
          });
        }
      } else {
        this.pointRecord = [];
      }
    },
    async handleGetPointsType(params) {
      //  console.log(params);
      const res = await this.$axios.$get(`/get_points_type/${params.language}`);
      if (res.code === 0) {
        // console.log(res.data);
        this.objType = res.data;
      }
    },
    handleCurrentChange($event, str) {
      if (str === 'task') {
        this.objForward.page = $event;
        this.handleGetForward(this.objForward);
      } else if (str === 'record') {
        this.objRocrad.page = $event;
        this.handlePointRecord(this.objRocrad);
      }
    },
    handleForwardNext(str) {
      console.log(str);
      if (str === 'task') {
        this.objForward.page = ++this.objForward.page;
        this.handleGetForward(this.objForward);
      } else if (str === 'record') {
        this.objRocrad.page = ++this.objRocrad.page;
        this.handlePointRecord(this.objRocrad);
      }
    }
  }
};
</script>
