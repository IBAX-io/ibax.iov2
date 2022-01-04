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
        <div class="personal-tabs-record-head-text">
          <span v-if="item.type === 1">{{ $t('personal.fol') }}</span>
          <span v-if="item.type === 2">{{ $t('personal.forwarded') }}</span>
          <span v-if="item.type === 3">{{ $t('personal.cancalf') }}</span>
        </div>
        <div class="personal-tabs-record-head-text">
          {{ item.points }}
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
      }
    };
  },
  computed: {},
  watch: {},
  created() {
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
