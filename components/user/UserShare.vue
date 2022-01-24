<template>
  <div class="user-center-share">
    <div class="user-center-share-item" @click="handleCopy">
      <img
        src="@/assets/images/login/share-1.png"
        alt="share-1"
        class="user-center-share-left-img"
      />
      <span class="user-center-share-left-text">{{ $t('personal.link') }}</span>
    </div>
    <div class="user-center-share-item" @click="handleCode">
      <img
        src="@/assets/images/login/share-2.png"
        alt="share-1"
        class="user-center-share-left-img"
      />
      <span class="user-center-share-left-text">{{
        $t('personal.shareOn')
      }}</span>
    </div>
    <div class="user-center-share-item" @click="handleShare">
      <img
        src="@/assets/images/login/share-3.png"
        alt="share-1"
        class="user-center-share-left-img"
      />
      <span class="user-center-share-left-text">{{ $t('personal.qr') }}</span>
    </div>
    <div class="user-center-share-item user-center-share-item-box">
      <a
        class="user-center-share-telegram"
        href="https://t.me/IBAXOfficialAnnouncements"
        target="_blank"
      >
        <img src="@/assets/images/login/tg.png" alt="telegram" />
      </a>
    </div>

    <!-- share link -->
    <div
      v-show="isCode"
      class="user-center-share-qr"
      @click="handleCodeConfirm"
    >
      <div class="shareon" :data-url="strURL">
        <a class="twitter"></a>
        <a class="telegram"></a>
        <a class="facebook"></a>
        <a class="linkedin"></a>
        <a class="reddit"></a>
      </div>
    </div>
    <!-- share code -->
    <div style="display: none">
      <client-only>
        <vue-qr
          ref="qrCodeUrl"
          :logo-src="logoSrc"
          :size="150"
          :logo-scale="logoScale"
          :auto-color="true"
          :dot-scale="1"
          :text="strURL"
          style="height: 200px; width: 200px; border-radius: 12px"
          background-color="#274235"
          background-dimming="#274235"
          color-dark="#274235"
          :margin="margin"
          :callback="handleCodeqr"
        />
      </client-only>
    </div>
    <!-- share image -->
    <div v-show="isShore" class="user-center-share-dialog">
      <div class="user-center-share-dialog-close">
        <i class="el-icon-close" @click="handleDialogClose"></i>
      </div>
      <div
        ref="shareBox"
        class="user-center-share-dialog-box"
        @click="handleHtml2canvas"
      >
        <img src="@/assets/images/login/back.png" alt="back" />
        <img
          :src="strImgUrl"
          alt="code"
          class="user-center-share-dialog-box-small"
        />
      </div>
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
      margin: 15,
      logoScale: 0.2,
      strImgUrl: '',
      strTime: '',
      strSign: this.$t('personal.daily'),
      logoSrc: require('../../assets/images/login/logo.png')
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const invitecode = localStorage.getItem('invitecode');
    this.strURL = `${this.baseUrl}/login?code=${invitecode}`;
    if (this.strURL) {
      this.shareon();
    }
  },
  methods: {
    handleCode() {
      this.isCode = !this.isCode;
      this.isShore = false;
    },
    handleCodeConfirm() {
      this.isCode = false;
    },
    handleShare() {
      this.isShore = !this.isShore;
      this.isCode = false;
    },
    handleCodeqr(url, qid) {
      console.log(url);
      console.log(qid);
      this.strImgUrl = url;
    },
    handleDialogClose() {
      this.isShore = false;
    },
    handleCopy() {
      this.$copyText(this.strURL).then(
        (e) => {
          // console.log(e);
          this.$message({
            type: 'success',
            message: `Copy succeeded`
          });
          this.isShore = false;
          this.isCode = false;
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
    async handleHtml2canvas() {
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
