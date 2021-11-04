<!--
 * @Author: abc
 * @Date: 2021-09-24 18:52:23
 * @LastEditors: abc
 * @LastEditTime: 2021-09-27 10:05:26
 * @Description:
-->
<template>
  <el-dialog
    :visible.sync="dialogBoo"
    :before-close="handleClose"
    custom-class="dialog"
  >
    <div class="modal-box info-modal-box">
      <a href="#" class="close icon-cross"></a>
      <div class="left-col">
        <div class="frame">
          <div class="avatar-wrap">
            <img
              src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/JPG01-2.jpg"
              class="attachment-full"
              alt="JPG01-2"
            />
          </div>
          <strong class="name">Vlado Hruda</strong>
          <span class="post">Sr. Product Manager @ Mixpanel</span>
          <div class="social-networks">
            <a
              href="https://www.linkedin.com/in/vlado-hruda-1939502/"
              class="iconfont el-linkedin"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
      <div class="right-col">
        <div class="frame">
          <div ref="videoBox" class="video">
            <video
              id="video"
              ref="video"
              src="/video/video.mp4"
              webkit-playsinline="true"
              x5-playsinline="true"
              controls
              playsinline="true"
              poster="/video/poster.jpg"
              class="video-content"
            >
              Your browser does not support video tags.
            </video>
            <div ref="play" class="video-poster" @click="handleOpenVideo">
              <img src="/video/612.png" alt="612" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogBoo: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
    dialogBoo() {
      this.$nextTick(() => {
        if (this.$refs.videoBox && this.dialogBoo) {
          const videoBox = this.$refs.videoBox.clientWidth;
          console.log(this.$refs.videoBox);
          console.log(videoBox);
          this.$refs.videoBox.style.height = (videoBox * 9) / 16 + 'px';
        }
      });
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleOpenVideo() {
      this.$refs.play.style.display = 'none';
      this.$refs.video.play();
    },
    handleClose() {
      this.$emit('videoclose', false);
      this.$refs.play.style.display = 'block';
      this.$refs.video.currentTime = 0;
      this.$refs.video.pause();
    }
  }
};
</script>
