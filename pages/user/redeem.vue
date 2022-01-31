<template>
  <div class="user-receive">
    <template v-if="binding.status && binding.blockId">
      <div class="user-receive-end">
        {{ $t('personal.process') }}
      </div>
    </template>
    <template v-else>
      <div class="user-receive-end">
        {{ $t('personal.ended') }}
      </div>
      <div class="user-receive-top">
        <img
          src="@/assets/images/login/receive.png"
          alt="share"
          class="user-center-share-img"
        />
        <span class="user-center-share-text user-receive-top-text">{{
          $t('personal.bind')
        }}</span>
      </div>
    </template>
    <p class="user-receive-text">
      <!--  {{ $t('personal.will') }} -->
    </p>
    <div class="user-receive-data">
      {{ $t('personal.yourPoints') }}: {{ money_format(statistics.points) }}
      {{ $t('personal.poin') }}
    </div>
    <div class="user-receive-data">
      {{ $t('personal.yourCoins') }}: {{ money_format(statistics.amount) }}
      <!-- {{ $t('personal.coin') }} -->
    </div>
    <div class="personal-redeem">
      <div
        v-if="binding.status && binding.blockId"
        class="personal-redeem-share-box"
      >
        <p class="personal-redeem-box-text">
          {{ $t('personal.address') }} {{ binding.account }}
        </p>
        <p class="personal-redeem-box-text">
          {{ $t('personal.storage') }} {{ binding.blockId }}
        </p>
        <a
          class="btn btn-primary"
          :href="`${browserUrl}/transaction/${binding.hash}`"
          target="_blank"
        >
          <span>{{ $t('personal.view') }}</span>
          <i class="el-icon-right"></i>
        </a>
      </div>
      <div v-else class="personal-redeem-box">
        <p class="personal-redeem-box-text">
          {{ $t('personal.once') }}
        </p>
        <p class="personal-redeem-box-text">
          {{ $t('personal.confirm') }}
        </p>
        <div class="personal-redeem-content">
          <el-input
            v-model="address"
            :disabled="binding.status"
            :placeholder="$t('personal.your')"
          ></el-input>
          <div>
            <button
              class="btn btn-primary"
              :disabled="binding.status"
              @click="handleAdress"
            >
              {{ $t('personal.submit') }}
            </button>
          </div>
          <a
            class="home-new-bottom link personal-redeem-link"
            href="https://weaver.ibax.io/"
            target="_blank"
          >
            <span class="personal-redeem-link-text">{{
              $t('personal.werver')
            }}</span>
            <i class="el-icon-right"></i>
          </a>
        </div>
      </div>
      <div id="widthVideo" ref="widthVideo" class="personal-redeem-vidoe">
        <h6 class="title-h6">
          {{ $t('personal.how') }}
        </h6>
        <client-only>
          <youtube
            ref="introduce"
            :resize="isResize"
            :fit-parent="isResize"
            :player-vars="playerVars"
            video-id="kOWd-uIGwa4"
            @ended="videoEndedIntroduce"
            @error="videoErrorIntroduce"
          ></youtube>
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      address: '',
      isResize: true,
      isIntroduce: false,
      isSourceview: false,
      playerVars: {},
      binding: {
        status: false,
        account: '',
        blockId: 0
      }
    };
  },
  computed: {
    playerIntroduce() {
      return this.$refs.introduce.player;
    },
    statistics() {
      return this.$store.getters.handleStatistics;
    }
  },
  watch: {},
  created() {
    this.$store.dispatch('handleGetStatistics');
  },
  mounted() {
    this.handleGetBlock();
  },
  methods: {
    videoEndedIntroduce() {
      this.playerIntroduce.playVideo();
    },
    videoErrorIntroduce() {
      this.isIntroduce = false;
    },
    async handleGetBlock() {
      const res = await this.$axios.$post('/tw/get_binding_status');
      console.log(res);
      if (res.code === 0) {
        this.binding = res.data;
        if (res.data.status && res.data.blockId === 0) {
          this.$message({
            showClose: true,
            type: 'success',
            message: 'Pending'
          });
        }
      }
    },
    handleAdress() {
      const address = /^\d{4}-\d{4}-\d{4}-\d{4}-\d{4}$/;
      if (address.test(this.address)) {
        const h = this.$createElement;
        this.$msgbox({
          title: '',
          message: h('p', null, [
            h(
              'span',
              null,
              this.$t('personal.submitted', { address: this.address })
            )
          ]),
          showCancelButton: true,
          distinguishCancelAndClose: true,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          center: true,
          confirmButtonClass: 'link-btn',
          confirmButtonText: this.$t('personal.submit'),
          cancelButtonText: this.$t('personal.cancel'),
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              const params = {
                keyId: this.address
              };
              // console.log(params);
              this.$axios.$post('/tw/save_key', params).then((res) => {
                // console.log(res);
                if (res.code === 0) {
                  instance.confirmButtonLoading = false;
                  instance.confirmButtonText = this.$t('personal.submit');
                  this.handleGetBlock();
                  this.$store.dispatch('handleGetStatistics');
                  this.$message({
                    showClose: true,
                    type: 'success',
                    message: res.message,
                    onClose: () => {
                      done();
                    }
                  });
                } else {
                  done();
                  instance.confirmButtonLoading = false;
                  instance.confirmButtonText = this.$t('personal.submit');
                  this.$message({
                    showClose: true,
                    type: 'warning',
                    message: res.message
                  });
                }
              });
            } else {
              done();
            }
          }
        })
          .then((action) => {})
          .catch((action) => {});
      } else {
        this.$message({
          showClose: true,
          type: 'warning',
          message: 'Please enter the correct wallet address'
        });
      }
    }
  }
};
</script>
