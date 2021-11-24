<template>
  <div class="about">
    <div class="about-left">
      <div class="about-left-box">
        <div class="about-left-box-icon">
          <nuxt-link to="/">
            <i class="iconfont el-logo1" style="color: #274235"></i>
          </nuxt-link>
          <div
            class="nav-right-dropdown about-left-box-icon-right"
            style="display: none"
          >
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                <i class="iconfont el-translate" style="color: #274235"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in arrLang"
                  :key="item.lang"
                  :command="item.lang"
                >
                  {{ item.label }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="about-left-box-head">
          <img
            class="icon"
            src="https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/ico-contact.svg"
            alt=""
          />
          <span>{{ $t('about.contact') }}</span>
        </div>
        <h1 class="title-h4">{{ $t('about.can') }}</h1>
        <p>{{ $t('about.have') }}</p>
        <ul class="award-list">
          <a href="https://www.facebook.com/IBAXNetwork" target="_blank">
            <div class="logo-hold">
              <i class="iconfont el-facebook"></i>
            </div>
            <span class="caption">{{ $t('about.our') }}</span>
          </a>
          <a href="https://twitter.com/IbaxNetwork" target="_blank">
            <div class="logo-hold">
              <i class="iconfont el-twitter"></i>
            </div>
            <span class="caption">{{ $t('about.events') }}</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UC-oneUwzz01xaCkFTTyR0QQ/featured"
            target="_blank"
          >
            <div class="logo-hold">
              <i class="iconfont el-youtube"></i>
            </div>
            <span class="caption">{{ $t('about.an') }}</span>
          </a>
          <a
            href="https://www.linkedin.com/company/68016504/admin/"
            target="_blank"
          >
            <div class="logo-hold">
              <i class="iconfont el-linkedin"></i>
            </div>
            <span class="caption">{{ $t('about.follow') }}</span>
          </a>
        </ul>
        <div class="logo-row">
          <span class="title">{{ $t('about.you') }}</span>
          <ul class="logo-list">
            <a href="https://t.me/IBAXNetwork" target="_blank">
              <i class="iconfont el-telegram"></i>
            </a>
            <a href="https://discord.gg/zRX6Mwafya" target="_blank">
              <i class="iconfont el-discord"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <div class="about-right">
      <div class="about-right-box">
        <el-input
          v-model="params.message"
          maxlength="200"
          type="textarea"
          :placeholder="$t('about.talk')"
          class="about-right-textarea"
        >
        </el-input>
        <div class="about-right-btn">
          <button
            class="btn btn-default"
            :disabled="disabled"
            @click="handleSend"
          >
            {{ $t('about.send') }}
          </button>
        </div>
      </div>
      <div class="about-right-btn-text">
        <a
          href="https://github.com/orgs/IBAX-io/people"
          target="_blank"
          class="link"
          >{{ $t('about.want') }} -></a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'aboutLayouts',
  props: {},
  data() {
    return {
      params: {
        message: ''
      },
      disabled: false
    };
  },
  head() {
    return {
      title: `${this.$t('nav.about')} | IBAX Network`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('nav.about')} | IBAX Network`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.$t('nav.about')} | IBAX Network`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.baseUrl}${this.$route.path}`
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: `${this.baseUrl}${this.$route.path}`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA,BlockChain,BaaS,About,Contact,Message'
        },
        {
          hid: 'description',
          name: 'description',
          content: `We have social accounts on various media platforms, you can interact with us by leaving comments`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `We have social accounts on various media platforms, you can interact with us by leaving comments`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `We have social accounts on various media platforms, you can interact with us by leaving comments`
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async handleSend() {
      if (this.params.message === '') {
        return this.$message({
          message: this.$t('about.input'),
          type: 'warning'
        });
      } else {
        this.disabled = true;
        const res = await this.$axios.$post('/message', this.params);
        this.disabled = false;
        if (res.code === 0) {
          this.params.message = '';
          return this.$message({
            message: this.$t('about.success'),
            type: 'success'
          });
        } else {
          return this.$message({
            message: this.$t('about.fail'),
            type: 'error'
          });
        }
      }
    }
  }
};
</script>
