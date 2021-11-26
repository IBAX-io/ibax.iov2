<template>
  <div class="personal-code-left">
    <div class="personal-code-left-text">Share Friends:</div>
    <div class="personal-code-left-icon">
      <i class="iconfont el-Link" @click="handleCopy"></i>
    </div>
    <div class="personal-code-left-icon" @click="handleCode">
      <i class="iconfont el-a-Two-dimensionalcode"></i>
    </div>
    <div class="personal-code-left-icon" @click="handleShare">
      <i class="iconfont el-pictures"></i>
    </div>
    <div
      v-show="isCode"
      class="personal-code-left-qr"
      @click="handleCodeConfirm"
    >
      <div class="personal-code-left-qr-text">
        {{ $t('personal.code') }}
      </div>
      <client-only>
        <vue-qr
          ref="qrCodeUrl"
          :size="150"
          :auto-color="true"
          :dot-scale="1"
          :text="strURL"
          style="height: 200px; width: 200px; border-radius: 12px"
          :callback="handleCodeqr"
        />
      </client-only>
    </div>
    <div
      v-show="isShore"
      ref="shareBox"
      class="personal-code-left-img"
      @click="handleHtml2canvas"
    >
      <img src="../../../assets/images/login/back.png" alt="back" />
      <img :src="strImgUrl" alt="code" class="personal-code-left-img-small" />
    </div>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
export default {
  props: {},
  data() {
    return {
      strURL: '',
      isCode: false,
      isShore: false,
      strImgUrl: '',
      imgUrl: ''
    };
  },
  computed: {},
  watch: {
    imgUrl(val, oldval) {
      this.$refs.shareBox.style.display = 'none';
    }
  },
  created() {},
  mounted() {
    const invitecode = localStorage.getItem('invitecode');
    this.strURL = `${this.baseUrl}/login?code=${invitecode}`;
    //  this.handleHtml2canvas();
    // http://192.168.1.85:8084/login?invitecode=sdasdas&utm_source=utm_source
  },
  methods: {
    handleCopy() {
      this.$copyText(this.strURL).then(
        (e) => {
          console.log(e);
          this.$message({
            type: 'success',
            message: `Copy succeeded`
          });
        },
        (e) => {
          console.log(e);
          this.$message({
            type: 'error',
            message: `Copy failed`
          });
        }
      );
    },
    handleCodeConfirm() {
      const a = document.createElement('a');
      a.download = 'code';
      a.href = this.$refs.qrCodeUrl.$el.src;
      a.dispatchEvent(new MouseEvent('click'));
      this.isCode = false;
    },
    handleCode() {
      this.isCode = !this.isCode;
      this.isShore = false;
    },
    handleLeaveCode() {
      this.isCode = false;
    },
    handleCodeqr(url, qid) {
      console.log(url);
      console.log(qid);
      this.strImgUrl = url;
      /* if (this.strImgUrl) {
        this.$nextTick(() => {
          html2canvas(this.$refs.shareBox).then((canvas) => {
            this.imgUrl = canvas.toDataURL();
            console.log(this.imgUrl);
          });
        });
      } */
    },
    handleShare() {
      this.isShore = !this.isShore;
      this.isCode = false;
    },
    handleLeaveShare() {
      this.isShore = false;
    },
    async handleHtml2canvas() {
      /*   html2canvas(this.$refs.shareBox).then((canvas) => {
        this.imgUrl = canvas.toDataURL('image/png');
        console.log(this.imgUrl);
        const a = document.createElement('a');
        a.download = 'code-share';
        a.href = this.imgUrl;
        a.dispatchEvent(new MouseEvent('click'));
        this.isShore = false; 
      }); */
      this.$message({
        type: 'success',
        message: 'Downloading'
      });
      const res = await html2canvas(this.$refs.shareBox);
      console.log(res);
      console.log(res.toDataURL('image/png'));
      this.imgUrl = res.toDataURL('image/png');
      console.log(this.imgUrl);
      const a = document.createElement('a');
      a.download = 'code-share';
      a.href = this.imgUrl;
      a.dispatchEvent(new MouseEvent('click'));
      this.isShore = false;
      this.$message({
        type: 'success',
        message: 'Download complete'
      });
    }
  }
};
</script>
