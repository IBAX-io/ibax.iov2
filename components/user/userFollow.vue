<template>
  <div>
    <img src="@/assets/images/login/user.png" alt="user" />
    <div class="personal-score-text">
      <a
        v-if="showFollow.status"
        href="https://twitter.com/IbaxNetwork"
        target="_blank"
        class="personal-score-text-link"
      >
        <span class="personal-score-text-link-text"
          >{{ $t('personal.followed') }}:</span
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
</template>
<script>
export default {
  props: {},
  data() {
    return {
      showFollow: {},
      objFollow: {
        where: '',
        order: 'id desc',
        page: 1,
        limit: 5,
        type: 1
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.handleGetFollow(this.objFollow);
  },
  methods: {
    async handleGetFollow(params) {
      const res = await this.$axios.$post('/tw/get_activity', params);
      //  console.log(res);
      if (res.code === 0 && res.data.rets) {
        this.showFollow = res.data.rets[0];
      } else {
        this.showFollow = {};
      }
    },
    // twitter Follow
    handleIsFollow(obj) {
      if (obj.status) {
        this.$message({
          type: 'success',
          message: this.$t('personal.followed')
        });
      } else {
        const h = this.$createElement;
        this.$msgbox({
          title: this.$t('personal.on'),
          customClass: 'personal-custom',
          message: h('p', null, [h('span', null, this.$t('personal.please'))]),
          showCancelButton: true,
          distinguishCancelAndClose: true,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          center: true,
          confirmButtonClass: 'link-btn',
          confirmButtonText: this.$t('personal.followed'),
          cancelButtonText: this.$t('personal.not'),
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              console.log(this.userInfo);
              const params = {
                userName: this.userInfo.username,
                followUserName: obj.followsUserName
              };
              setTimeout(() => {
                this.$axios.$post('/tw/getFollowing', params).then((res) => {
                  console.log(res);
                  if (res.code === 0 && res.data.status) {
                    // done();
                    instance.confirmButtonLoading = false;
                    this.handleGetFollow(this.objFollow);
                    this.$store.dispatch('handleGetStatistics');
                    this.$emit('already');
                    this.$message({
                      showClose: true,
                      type: 'success',
                      message: this.$t('personal.followed'),
                      onClose: () => {
                        done();
                      }
                    });
                  } else if (res.code === -415) {
                    // done();
                    instance.confirmButtonLoading = false;
                    instance.confirmButtonText = this.$t('personal.followed');
                    this.$message({
                      showClose: true,
                      type: 'warning',
                      message: res.message
                    });
                  } else {
                    // done();
                    instance.confirmButtonLoading = false;
                    instance.confirmButtonText = this.$t('personal.followed');
                    this.$message({
                      showClose: true,
                      type: 'warning',
                      message: 'Please try again later'
                    });
                  }
                });
              }, 10000);
              // console.log(params);
            } else {
              done();
            }
          }
        })
          .then((action) => {})
          .catch((action) => {});
      }
    }
  }
};
</script>
