<template>
  <div class="user-retweet">
    <el-tabs v-model="ruleName" @tab-click="handleTabsRules">
      <el-tab-pane label="Jackpot A" name="a">
        <user-points-rules></user-points-rules>
      </el-tab-pane>
      <el-tab-pane label="Jackpot B" name="b">
        <user-share-rules></user-share-rules>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import UserPointsRules from '~/components/user/UserPointsRules.vue';
import UserShareRules from '~/components/user/UserShareRules.vue';
export default {
  components: { UserPointsRules, UserShareRules },
  props: {},
  data() {
    return {
      ruleName: 'a'
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleTabsRules(tabs) {}
  }
};
</script>
