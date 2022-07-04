<template>
  <div>
    <div class="user-commits-title">
      <div class="user-commits-title-link" style="cursor: default">
        <span class="user-commits-title-link-bull"></span>
        <span>{{ $t('personal.mainnet') }}</span>
        <!--  <nuxt-link
          :to="{ path: '/user/redeem' }"
          class="user-commits-title-link-rank"
        >
          {{ $t('personal.connect') }}
        </nuxt-link>
        <i class="el-icon-right"></i> -->
      </div>
    </div>
    <div v-if="result" class="user-finish">
      <span>{{ $t('personal.getted') }}：</span>
      <span v-if="result.reward" class="user-commits-title-link-rank"
        >{{ money_format(result.reward.total) }} IBXC</span
      >
      <span>，{{ $t('personal.total') }}：</span>
      <span v-if="result.rank" class="user-commits-title-link-rank"
        >{{ money_format(result.rank.total) }}
      </span>
      <span class="user-finish-end">.</span>
      <span>{{ $t('personal.aird') }}：</span>
      <span class="user-commits-title-link-rank"
        >{{ money_format(result.points_total) }}
      </span>
      <span>. &nbsp;{{ $t('personal.coinns') }}：</span>
      <span v-if="result.reward" class="user-commits-title-link-rank"
        >{{ money_format(result.reward.exchange) }} IBXC，</span
      >
      <div
        v-html="
          $t('personal.inited', { person: money_format(result.invite_number) })
        "
      ></div>
      <span>，{{ $t('personal.recoins') }}：</span>
      <span v-if="result.reward" class="user-commits-title-link-rank"
        >{{ money_format(result.reward.invite) }} IBXC</span
      >
    </div>
    <div class="user-finish-table">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        empty-text="No Data"
      >
        <el-table-column prop="id" :label="$t('personal.serial')">
        </el-table-column>
        <el-table-column prop="username" :label="$t('personal.handle')">
        </el-table-column>
        <el-table-column :label="$t('personal.overall')">
          <template slot-scope="scope">
            <span v-if="scope.row.rank">{{
              money_format(scope.row.rank.total)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('personal.airdro')">
          <template slot-scope="scope">
            <span v-if="scope.row.reward">{{
              money_format(scope.row.reward.total)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" :label="$t('personal.poi')">
          <template slot-scope="scope">
            <span>{{ money_format(scope.row.points_total) }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="`${$t('personal.red')}(IBXC)`">
          <template slot-scope="scope">
            <span v-if="scope.row.reward">{{
              money_format(scope.row.reward.exchange)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('personal.ranks')">
          <template slot-scope="scope">
            <span v-if="scope.row.rank">{{
              money_format(scope.row.rank.points)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('personal.bonus')">
          <template slot-scope="scope">
            <span v-if="scope.row.reward">{{
              money_format(scope.row.reward.invite)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('personal.number')">
          <template slot-scope="scope">
            <span>{{ money_format(scope.row.invite_number) }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('personal.referr')">
          <template slot-scope="scope">
            <span v-if="scope.row.rank">{{
              money_format(scope.row.rank.invite)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('personal.rewards')">
          <template slot-scope="scope">
            <span v-if="scope.row.reward">{{
              money_format(scope.row.reward.invite_rank)
            }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="personal-tabs-task-btn">
      <el-pagination
        small
        background
        hide-on-single-page
        layout="prev, pager, next"
        :pager-count="isMobile ? 5 : 11"
        :current-page="Number(pageNum.page)"
        :page-size="Number(pageNum.limit)"
        :total="Number(pageNum.total)"
        @current-change="handleChangePage"
      >
      </el-pagination>
    </div>
    <div class="animated fadeInUp">
      <a
        href="https://bit.ly/IBAXAirdropDistribution"
        target="_blank"
        class="btn btn-primary"
        >{{ $t('personal.chec') }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      result: {},
      tableData: [],
      params: {
        page: 1,
        limit: 10
      },
      pageNum: {
        page: 1,
        limit: 10,
        total: 1
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.handleGetAirdropResult();
    this.handleGetAirdropResultList(this.params);
  },
  methods: {
    async handleGetAirdropResult() {
      const res = await this.$axios.$get('/tw/airdrop_result');
      console.log(JSON.stringify(res));
      if (res.code === 0) {
        this.result = res.data;
      }
    },
    async handleGetAirdropResultList(params) {
      const res = await this.$axios.$post('/tw/airdrop_result_list', params);
      console.log(JSON.stringify(res));
      if (res.code === 0 && res.data.list) {
        this.tableData = res.data.list;
        this.pageNum.total = res.data.total;
        this.pageNum.page = res.data.page;
        this.pageNum.limit = res.data.limit;
      } else {
        this.tableData = [];
      }
    },
    handleChangePage(page) {
      console.log(page);
      this.params.page = page;
      this.handleGetAirdropResultList(this.params);
    }
  }
};
</script>
