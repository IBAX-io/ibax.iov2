<template>
  <div class="home">
    <div class="home-main">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18">
          <div class="home-top">
            <h1 class="title-h1-plus animated fadeInUp">
              {{ $t('home.start') }}
            </h1>
            <p class="p-lead animated fadeInUp">{{ $t('home.performance') }}</p>
          </div>
          <div class="home-picture animated fadeInUp hidden-sm-and-up">
            <img src="../assets/images/picture.jpg" alt="picture" />
          </div>
          <div class="home-top-btn animated fadeInUp">
            <a
              href="https://weaver.ibax.io/"
              target="_blank"
              class="btn btn-primary"
              >{{ $t('home.using') }}</a
            >
            <a
              href="https://github.com/orgs/IBAX-io/people"
              target="_blank"
              class="btn btn-default"
              >{{ $t('home.join') }}</a
            >
          </div>
          <div class="home-picture animated fadeInUp hidden-sm-and-down">
            <img src="../assets/images/picture.jpg" alt="picture" />
          </div>
          <div class="home-new">
            <el-row type="flex" justify="space-between" class="el-row-wrap">
              <el-col :xs="24" :lg="6" class="hidden-sm-and-up">
                <div class="home-new-img">
                  <img
                    src="@/assets/images/innovate.jpg"
                    class="home-new-img-earth"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="16">
                <p class="subtitle wow fadeInUp">{{ $t('home.innovate') }}</p>
                <h2 class="title-h2 wow fadeInUp">
                  {{ $t('home.framework') }}
                </h2>
                <p class="wow fadeInUp">{{ $t('home.bottom') }}</p>
                <nuxt-link
                  to="/feature/architecture"
                  class="home-new-bottom link wow fadeInUp"
                >
                  <span>{{ $t('home.learn') }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </el-col>
              <el-col :xs="24" :lg="6" class="hidden-sm-and-down">
                <div class="home-new-img">
                  <img
                    src="@/assets/images/innovate.jpg"
                    alt="innovate"
                    class="home-new-img-earth"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- computer -->
          <div class="hidden-sm-and-down">
            <div id="middleBox" class="home-new">
              <el-row type="flex" justify="space-between">
                <el-col :xs="23" :lg="8">
                  <div id="virtual" class="home-new-box">
                    <p class="home-new-title wow fadeInUp">
                      <i class="el-iconfont iconfont el-a-038"></i>
                      <span class="home-new-title-text">
                        {{ $t('home.virtual') }}
                      </span>
                    </p>
                    <div class="wow fadeInUp">
                      <h2 class="bass-h2">{{ $t('home.machine') }}</h2>
                      <p>{{ $t('home.can') }}</p>
                    </div>
                  </div>
                  <div id="consensus" class="home-new-box">
                    <p class="home-new-title wow fadeInUp">
                      <i class="el-iconfont iconfont el-a-028"></i>
                      <span class="home-new-title-text">
                        {{ $t('home.consensus') }}
                      </span>
                    </p>
                    <div class="wow fadeInUp">
                      <h2 class="bass-h2">{{ $t('home.dpoa') }}</h2>
                      <p>{{ $t('home.good') }}</p>
                      <!-- <p>{{ $t('home.determine') }}</p> -->
                    </div>
                  </div>
                  <div id="bifurcation" class="home-new-box">
                    <p class="home-new-title wow fadeInUp">
                      <i class="el-iconfont iconfont el-a-036"></i>
                      <span class="home-new-title-text">
                        {{ $t('home.bifurcation') }}
                      </span>
                    </p>
                    <div class="wow fadeInUp">
                      <h2 class="bass-h2">{{ $t('home.honor') }}</h2>
                      <p>{{ $t('home.unified') }}</p>
                      <p>{{ $t('home.unif') }}</p>
                      <nuxt-link
                        class="home-new-bottom link"
                        to="/feature/ecolib-governance"
                      >
                        <span>{{ $t('home.features') }}</span>
                        <i class="el-icon-right"></i>
                      </nuxt-link>
                    </div>
                  </div>
                </el-col>
                <el-col ref="powerful" :xs="23" :lg="15">
                  <div class="home-new-right">
                    <div class="home-new-right-box" :style="haxStyle">
                      <div
                        class="home-new-right-box-img"
                        :class="{ 'home-new-right-box-show': isOne }"
                      >
                        <img src="@/assets/images/virtual.jpg" alt="virtual" />
                      </div>
                      <div
                        class="home-new-right-box-img"
                        :class="{ 'home-new-right-box-show': isTwo }"
                      >
                        <img
                          src="@/assets/images/consensus.jpg"
                          alt="consensus"
                        />
                      </div>
                      <div
                        class="home-new-right-box-img"
                        :class="{ 'home-new-right-box-show': isThree }"
                      >
                        <img src="@/assets/images/gas.jpg" alt="gas" />
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <!--  moblie -->
          <div class="hidden-sm-and-up">
            <div class="home-new">
              <el-row
                type="flex"
                justify="space-between"
                align="middle"
                class="el-row-wrap"
              >
                <el-col :xs="24" :lg="8">
                  <p class="home-new-title wow fadeInUp">
                    <i class="el-iconfont iconfont el-a-038"></i>
                    <span class="home-new-title-text">
                      {{ $t('home.virtual') }}
                    </span>
                  </p>
                  <div class="wow fadeInUp">
                    <h3 class="title-h3">{{ $t('home.machine') }}</h3>
                    <p>{{ $t('home.can') }}</p>
                  </div>
                </el-col>
                <el-col :xs="24" :lg="14">
                  <div class="home-new-img">
                    <img src="@/assets/images/virtual.jpg" alt="virtual" />
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="home-new">
              <el-row
                type="flex"
                justify="space-between"
                align="middle"
                class="el-row-wrap"
              >
                <el-col :xs="24" :lg="8">
                  <p class="home-new-title wow fadeInUp">
                    <i class="el-iconfont iconfont el-a-028"></i>
                    <span class="home-new-title-text">
                      {{ $t('home.consensus') }}
                    </span>
                  </p>
                  <div class="wow fadeInUp">
                    <h3 class="title-h3">{{ $t('home.dpoa') }}</h3>
                    <p>{{ $t('home.good') }}</p>
                    <p>{{ $t('home.determine') }}</p>
                  </div>
                </el-col>
                <el-col :xs="24" :lg="14">
                  <div class="home-new-img">
                    <img src="@/assets/images/consensus.jpg" alt="consensus" />
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="home-new">
              <el-row
                type="flex"
                justify="space-between"
                align="middle"
                class="el-row-wrap"
              >
                <el-col :xs="24" :lg="8">
                  <p class="home-new-title wow fadeInUp">
                    <i class="el-iconfont iconfont el-a-036"></i>
                    <span class="home-new-title-text">
                      {{ $t('home.bifurcation') }}
                    </span>
                  </p>
                  <div class="wow fadeInUp">
                    <h3 class="title-h3">{{ $t('home.honor') }}</h3>
                    <p>{{ $t('home.unified') }}</p>
                    <p>{{ $t('home.unif') }}</p>
                    <nuxt-link
                      class="home-new-bottom link"
                      to="/feature/ecolib-governance"
                    >
                      <span>{{ $t('home.features') }}</span>
                      <i class="el-icon-right"></i>
                    </nuxt-link>
                  </div>
                </el-col>
                <el-col :xs="24" :lg="14">
                  <div class="home-new-img">
                    <img src="@/assets/images/gas.jpg" alt="gas" />
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <!-- economics  -->
          <div class="home-new">
            <el-row type="flex" justify="space-between" class="el-row-wrap">
              <el-col :xs="24" :lg="12">
                <p class="subtitle">{{ $t('home.economics') }}</p>
                <div class="wow fadeInUp">
                  <h3 class="title-h3">
                    {{ $t('home.benefits') }}
                  </h3>
                  <p>
                    {{ $t('home.matter') }}
                  </p>
                  <a
                    href="https://bit.ly/3Ek5vBM"
                    target="_blank"
                    class="home-new-bottom link"
                  >
                    <span>{{ $t('home.view') }}</span>
                    <i class="el-icon-right"></i>
                  </a>
                </div>
              </el-col>
              <el-col :xs="24" :lg="6">
                <div class="home-new-img">
                  <img
                    src="@/assets//images/economics.jpg"
                    alt="economics"
                    class="home-new-img-earth"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="!isMobile" class="home-tag">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="12">
                <div class="home-new-img">
                  <img :src="objShow.img" alt="economics" />
                </div>
                <div class="home-line">
                  <div
                    v-for="(item, index) in arrTabs"
                    :key="index"
                    class="home-line-text"
                    :class="{
                      'is-active': item.boo
                    }"
                    @click="handleTabsBottom(item)"
                  >
                    {{ $t(item.label) }}
                  </div>
                </div>
              </el-col>
              <!-- computer -->
              <el-col :xs="23" :lg="8">
                <div class="home-tag-box">
                  <div class="home-tag-box-small">
                    <div
                      v-for="(item, index) in arrShow"
                      :key="index"
                      class="home-tag-box-small-btn"
                      :class="{
                        'home-tag-item-active': item.boo
                      }"
                      @click="handleArrShow(item)"
                    >
                      {{ $t(item.label) }}
                    </div>
                  </div>
                  <div class="home-tag-box-big">
                    <div
                      v-for="item in arrText"
                      :key="item.name"
                      class="home-tag-item"
                      :class="{
                        'home-tag-item-active': item.name === activeName
                      }"
                      @click="handleTagClick(item)"
                    >
                      {{ $t(item.label) }}
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="isMobile" class="home-tag">
            <el-row
              type="flex"
              justify="space-between"
              align="middle"
              class="el-row-wrap"
            >
              <el-col :xs="24" :lg="8">
                <el-tabs v-model="activeSort" :tab-position="tabPosition">
                  <el-tab-pane
                    v-for="item in arrTabMoblie"
                    :key="item.sort"
                    :label="$t(item.label)"
                    :name="item.sort"
                  >
                    <div class="home-tag-img">
                      <img :src="item.img" :alt="item.label" />
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </el-col>
            </el-row>
          </div>
          <!-- lead -->
          <div class="home-new">
            <el-row type="flex" justify="space-between" class="el-row-wrap">
              <el-col :xs="24" :lg="8" class="hidden-sm-and-up">
                <div class="home-new-img wow fadeInUp">
                  <img
                    src="@/assets/images/lead.jpg"
                    alt="lead"
                    class="home-new-img-earth"
                  />
                </div>
              </el-col>
              <el-col :xs="24" :lg="14">
                <p class="subtitle">{{ $t('home.lead') }}</p>
                <div class="wow fadeInUp">
                  <h3 class="title-h2">{{ $t('home.driven') }}</h3>
                  <p>{{ $t('home.chain') }}</p>
                  <nuxt-link
                    to="/feature/cross-chain"
                    class="home-new-bottom link"
                  >
                    <span>{{ $t('home.we') }}</span>
                    <i class="el-icon-right"></i>
                  </nuxt-link>
                </div>
              </el-col>
              <el-col :xs="24" :lg="8" class="hidden-sm-and-down">
                <div class="home-new-img wow fadeInUp">
                  <img src="@/assets/images/lead.jpg" alt="lead" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="home-loop">
      <div class="intro-row">
        <h6 class="title-h6 wow fadeInUp">{{ $t('home.have') }}</h6>
        <p>{{ $t('home.built') }}</p>
      </div>
      <div class="home-loop-content">
        <client-only>
          <vue-seamless-scroll
            :data="iconList"
            :class-option="optionLeft"
            class="home-loop-content-scroll"
          >
            <ul class="ul-scoll">
              <li v-for="(item, index) in iconList" :key="index">
                <div class="ul-scoll-img">
                  <i class="iconfont" :class="item.icon"></i>
                </div>
              </li>
            </ul>
          </vue-seamless-scroll>
        </client-only>
      </div>
      <div class="home-p5">
        <client-only>
          <vue-p5 v-if="isMobile" @setup="setup" @draw="draw"></vue-p5>
          <vue-p5 v-else @setup="setup" @draw="draw"></vue-p5>
        </client-only>
      </div>
      <div class="home-appeared wow fadeInUp">
        <h1 class="title-h1">{{ $t('home.your') }}</h1>
        <div class="home-appeared-box">
          <ul class="home-appeared-item">
            <li>
              <i class="iconfont el-huaban24"></i
              ><span>{{ $t('home.get') }}</span>
            </li>
            <li>
              <i class="iconfont el-huaban24"></i
              ><span>{{ $t('home.manul') }}</span>
            </li>
            <li>
              <i class="iconfont el-huaban24"></i
              ><span>{{ $t('home.enjoy') }}</span>
            </li>
          </ul>
        </div>
        <div class="home-top-btn">
          <nuxt-link to="/about" class="btn btn-primary">{{
            $t('nav.about')
          }}</nuxt-link>
        </div>
      </div>
    </div>
    <div ref="empty" class="home-empty hidden-sm-and-down"></div>
    <div id="story" ref="story" class="home-story">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18">
          <el-row type="flex" justify="space-between" class="el-row-wrap">
            <el-col :xs="23" :lg="8">
              <p class="subtitle">{{ $t('home.partner') }}</p>
              <h2 class="title-h2-plus">{{ $t('home.ibaa') }}</h2>
              <li class="home-story-text-li">
                {{ $t('home.official') }}
              </li>
              <li class="home-story-text-li">
                {{ $t('home.supports') }}
              </li>
              <li class="home-story-text-li">
                {{ $t('home.manage') }}
              </li>
            </el-col>
            <el-col :xs="24" :lg="5">
              <div class="home-story-phone">
                <img src="@/assets/images/home-mobile.jpg" mode="home-mobile" />
              </div>
            </el-col>
            <el-col :xs="24" :lg="9">
              <h6 class="title-h6 home-story-title">
                {{ $t('home.wallet') }}
              </h6>
              <p class="home-story-right">
                {{ $t('home.is') }}
              </p>
              <p class="home-story-right">
                {{ $t('home.more') }}
              </p>
              <div class="global-h6 home-story-text">
                <div class="home-story-text-img">
                  <img src="../assets/images/avatar.jpg" alt="avatar" />
                </div>
                <div class="home-story-text-name">
                  <div class="home-story-text-name-strong">
                    {{ $t('home.name') }}
                  </div>
                  <div class="home-story-text-name-text">
                    {{ $t('home.product') }}
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- bottom -->
    <div class="home-product wow fadeIn">
      <!-- computer -->
      <el-row v-if="!isMobile" type="flex" justify="center">
        <el-col :xs="23" :lg="18">
          <h2 class="title-h2">{{ $t('home.develop') }}</h2>
          <el-row type="flex" justify="space-between">
            <el-col
              v-for="(item, index) in arrProduct"
              :key="index"
              :xs="23"
              :lg="7"
            >
              <div class="home-bottom-index">
                <div class="home-new-img">
                  <img :src="item.img" alt="img" />
                </div>
                <div class="home-story-text">
                  <i class="iconfont" :class="item.icon"></i>
                  <strong>{{ $t(item.strong) }}</strong>
                </div>
                <h4 class="home-story-text-h4">{{ $t(item.title) }}</h4>
                <a
                  v-if="item.href"
                  :href="item.href"
                  target="_blank"
                  class="home-new-bottom link home-bottom-index-link"
                >
                  <span>{{ $t(item.text) }}</span>
                  <i class="el-icon-right"></i>
                </a>
                <nuxt-link
                  v-if="item.path"
                  :to="item.path"
                  class="home-new-bottom home-bottom-index-link link"
                >
                  <span>{{ $t(item.text) }}</span>
                  <i class="el-icon-right"></i>
                </nuxt-link>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- moblie -->
      <template v-else>
        <h2 class="title-h4">{{ $t('home.develop') }}</h2>
        <el-carousel indicator-position="outside" arrow="never">
          <el-carousel-item v-for="(item, index) in arrProduct" :key="index">
            <div>
              <div class="home-new-img">
                <img :src="item.img" alt="img" />
              </div>
              <div class="home-story-text">
                <i class="iconfont" :class="item.icon"></i>
                <strong>{{ $t(item.strong) }}</strong>
              </div>
              <h4 class="title-h4">{{ $t(item.title) }}</h4>
              <a
                v-if="item.href"
                :href="item.href"
                target="_blank"
                class="home-new-bottom link"
              >
                <span>{{ $t(item.text) }}</span>
                <i class="el-icon-right"></i>
              </a>
              <nuxt-link
                v-if="item.path"
                :to="item.path"
                class="home-new-bottom link"
              >
                <span>{{ $t(item.text) }}</span>
                <i class="el-icon-right"></i>
              </nuxt-link>
            </div>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
  </div>
</template>
<script>
const img1 = require('../assets/images/img/NFT.png');
const img2 = require('../assets/images/img/mining.png');
const img3 = require('../assets/images/img/distribution.png');
const img4 = require('../assets/images/img/private.png');
const img5 = require('../assets/images/img/foundation.png');
const img6 = require('../assets/images/img/genesis.png');
const img7 = require('../assets/images/img/team.png');
const img8 = require('../assets/images/img/partners.png');
const img9 = require('../assets/images/img/all.png');
const technology = require('../assets/images/technology.jpg');
const videos = require('../assets/images/videos.jpg');
const events = require('../assets/images/events.jpg');
export default {
  data() {
    return {
      tabPosition: 'bottom',
      activeName: '',
      isOne: false,
      isTwo: false,
      isThree: false,
      boo: false,
      arrWave: [],
      helf: 0,
      activeSort: 'a',
      arrTabMoblie: [
        {
          label: 'home.nft',
          sort: 'a',
          img: img1
        },
        {
          label: 'home.min',
          sort: 'b',
          img: img2
        },
        {
          label: 'home.fixed',
          sort: 'c',
          img: img3
        },
        {
          label: 'home.private',
          sort: 'd',
          img: img4
        },
        {
          label: 'home.foundation',
          sort: 'e',
          img: img5
        },
        {
          label: 'home.genesis',
          sort: 'f',
          img: img6
        },
        {
          label: 'home.team',
          sort: 'g',
          img: img7
        },
        {
          label: 'home.ecosystem',
          sort: 'h',
          img: img8
        },
        {
          label: 'home.all',
          sort: 'i',
          img: img9
        }
      ],
      arrProduct: [
        {
          href: 'https://github.com/IBAX-io/documentation',
          img: technology,
          icon: 'el-technology1',
          strong: 'home.technology',
          title: 'home.technical',
          text: 'home.go'
        },
        {
          path: '/resource/video-resources',
          img: videos,
          icon: 'el-video',
          strong: 'home.video',
          title: 'home.about',
          text: 'home.m'
        },
        {
          path: '/resource/events',
          img: events,
          icon: 'el-activity',
          strong: 'resource.activity',
          title: 'home.exciting',
          text: 'home.award'
        }
      ],
      arrTags: [
        {
          id: 4,
          label: 'home.private',
          img: img4,
          boo: false
        },
        {
          id: 5,
          label: 'home.foundation',
          img: img5,
          boo: false
        },
        {
          id: 6,
          label: 'home.genesis',
          img: img6,
          boo: false
        },
        {
          id: 7,
          label: 'home.team',
          img: img7,
          boo: false
        },
        {
          id: 8,
          label: 'home.ecosystem',
          img: img8,
          boo: false
        }
      ],
      arrTagSmall: [
        {
          id: 1,
          label: 'home.nft',
          img: img1,
          boo: true
        },
        {
          id: 2,
          label: 'home.min',
          img: img2,
          boo: false
        }
      ],
      arrTabs: [
        {
          id: 1,
          label: 'home.nft',
          img: img1,
          boo: true
        },
        {
          id: 2,
          label: 'home.min',
          img: img2,
          boo: false
        },
        {
          id: 3,
          label: 'home.fixed',
          img: img3,
          boo: false
        }
      ],
      arrText: [
        {
          label: 'home.all',
          name: 'first',
          img: img9
        },
        {
          label: 'home.per',
          name: 'second'
        },
        {
          label: 'home.mint',
          name: 'third'
        }
      ],
      arrShow: [],
      objShow: {
        label: 'home.nft',
        img: img1
      },
      optionLeft: {
        width: '100%',
        step: 1,
        hoverStop: true,
        direction: 3,
        openWatch: true,
        singleHeight: 0,
        singleWidth: 0,
        waitTime: 10
      },
      iconList: [
        {
          icon: 'iconfont el-AWS_logo'
        },
        {
          icon: 'iconfont el-TDengine_logo'
        },
        {
          icon: 'iconfont el-Golang_logo'
        },
        {
          icon: 'iconfont el-Go_Logo'
        },
        {
          icon: 'iconfont el-Centrifugo_logo'
        },
        {
          icon: 'iconfont el-Google_Cloud_logo'
        },
        {
          icon: 'iconfont el-Encryption_Algorithm_logo'
        },
        {
          icon: 'iconfont el-UDP_protocol_logo'
        },
        {
          icon: 'iconfont el-postgreSQL_logo'
        },
        /* {
          icon: 'iconfont el-pusher_logo'
        }, */
        {
          icon: 'iconfont el-typescript_logo'
        },
        {
          icon: 'iconfont el-oracle_logo'
        },
        {
          icon: 'iconfont el-docker_logo'
        },
        {
          icon: 'iconfont el-taosdata_logo'
        },
        {
          icon: 'iconfont el-arm_logo'
        },
        {
          icon: 'iconfont el-red_hat'
        }
      ],
      domGlobal: '',
      emptyTop: '',
      domEmpty: '',
      domStory: '',
      mobileTop: '',
      back: '',
      offsetHeight: '',
      numMain: '',
      numPowerful: 0,
      numLeft: 0,
      numTop: 0,
      colorPrimary: '#f3ac34',
      colorLine: 'rgba(243,172,52,0.2)',
      haxStyle: {},
      xSpacing: 20,
      waveWidth: 0,
      theta: 0.0,
      amplitude: 80,
      period: 400,
      xWave: 0
    };
  },
  head() {
    return {
      title: `Welcome to IBAX Network`,
      meta: [
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
          hid: 'og:title',
          property: 'og:title',
          content: `Welcome to IBAX Network`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'IBAX, Crypto Currency, bitcoin, Cross-Chain, crypto, DeFi, Dapps,blockchain technology, corelayer technology, decentralized application, distributed ledger, IBAX AMA, blockChain BaaS, BaaS, blockchain as a service, mining, Web3.0, W3,blockchain, metaverse, DAO'
        },
        {
          hid: 'description',
          name: 'description',
          content: `IBAX is a fast, efficient, transparent, decentralized infrastructure public blockchain network. Everyone can create a DAO or customizable consensus mechanism ecosystem using IBAX's BaaS platform. Weaver enables low-code development and zero-code coin issuance through simple drag-and-drop , which greatly reduces the time and threshold for developing DApps.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `IBAX is a fast, efficient, transparent, decentralized infrastructure public blockchain network. Everyone can create a DAO or customizable consensus mechanism ecosystem using IBAX's BaaS platform. Weaver enables low-code development and zero-code coin issuance through simple drag-and-drop , which greatly reduces the time and threshold for developing DApps.`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Welcome to IBAX Network`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: `IBAX is a fast, efficient, transparent, decentralized infrastructure public blockchain network. Everyone can create a DAO or customizable consensus mechanism ecosystem using IBAX's BaaS platform. Weaver enables low-code development and zero-code coin issuance through simple drag-and-drop , which greatly reduces the time and threshold for developing DApps.`
        }
      ]
    };
  },
  created() {},
  mounted() {
    const obj = { headerColor: '#274235', color: '#fff' };
    this.$store.commit('handleChangeColor', obj);
    this.$store.commit('handleIsTop', true);
    this.$store.commit('handleIsFixed', false);
    this.$store.commit('handleChangeClass', 'subMenu--horizontal');
    // console.log(`mobile:${this.isMobile}`);
    this.domEmpty = this.$refs.empty;
    this.domStory = this.$refs.story;
    if (!this.isMobile) {
      this.domEmpty.style.visibility = 'visible';
      this.domStory.style.position = 'fixed';
    }
    if (!this.isMobile) {
      this.middleBox =
        document.getElementById('bifurcation').offsetTop +
        document.getElementById('bifurcation').offsetWidth / 4;
    }
    this.$nextTick(() => {
      this.mobileTop = document.getElementById('story').offsetTop;
      this.domGlobal = document.getElementById('global').firstChild;
      this.domHeaderTop = document.getElementById('headerTop');
      const wow = new this.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        scrollContainer: '.el-scrollbar__wrap',
        offset: 0,
        mobile: true,
        live: false
      });
      wow.init();
    });
    this.domGlobal.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    this.domGlobal.removeEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      const topHeight = document.getElementById('headerTop').offsetTop;
      const isFixed = scrollTop > topHeight;
      this.$store.commit('handleIsFixed', isFixed);
      if (!this.isMobile) {
        this.widthPowerful = this.$refs.powerful.$el.offsetWidth;
        this.numPowerful = this.$refs.powerful.$el.getBoundingClientRect().left;
        const height = (this.widthPowerful * 10) / 17;
        console.log(height);
        this.h = parseInt((document.body.clientHeight - height) / 2) + 'px';
        console.log(this.h);
        this.virtualTop =
          document.getElementById('virtual').getBoundingClientRect().top -
          document.getElementById('virtual').offsetWidth / 2;
        console.log(this.virtualTop);
        this.consensusTop =
          document.getElementById('consensus').getBoundingClientRect().top -
          document.getElementById('consensus').offsetWidth / 2;
        this.bifurcationTop =
          document.getElementById('bifurcation').getBoundingClientRect().top -
          document.getElementById('bifurcation').offsetWidth / 2;
        console.log(this.bifurcationTop);
        this.bifurcationBottom =
          document.getElementById('bifurcation').getBoundingClientRect()
            .bottom - document.getElementById('bifurcation').offsetWidth;
        if (this.virtualTop <= 0 && this.consensusTop > 0) {
          this.haxStyle = {
            width: `${this.widthPowerful}px`,
            position: 'fixed',
            transform: `translate3d(${this.numPowerful}px, ${this.h}, 0px)`
          };
          console.log(this.haxStyle);
          this.isOne = true;
          this.isTwo = false;
          this.isThree = false;
        } else if (this.consensusTop <= 0 && this.bifurcationTop > 0) {
          this.haxStyle = {
            width: `${this.widthPowerful}px`,
            position: 'fixed',
            transform: `translate3d(${this.numPowerful}px, ${this.h}, 0px)`
          };
          this.isOne = false;
          this.isTwo = true;
          this.isThree = false;
        } else if (
          this.bifurcationTop <= 0 &&
          this.bifurcationBottom - 120 > 0
        ) {
          this.haxStyle = {
            width: `${this.widthPowerful}px`,
            position: 'fixed',
            transform: `translate3d(${this.numPowerful}px, ${this.h}, 0px)`
          };
          this.isOne = false;
          this.isTwo = false;
          this.isThree = true;
        } else if (this.bifurcationBottom - 120 <= 0) {
          this.haxStyle = {
            width: `${this.widthPowerful}px`,
            position: 'absolute',
            transform: `translate3d(0px, ${this.middleBox}px, 0px)`
          };
          this.isOne = false;
          this.isTwo = false;
          this.isThree = true;
        } else {
          this.haxStyle = {};
          this.isOne = true;
          this.isTwo = false;
          this.isThree = false;
        }
        this.numMain = this.domEmpty.getBoundingClientRect().top;
        this.offsetHeight = this.domStory.offsetHeight;
        this.domEmpty.style.height = this.offsetHeight + 'px';
        if (this.numMain <= 0) {
          this.domEmpty.style.visibility = 'hidden';
          this.domEmpty.style.height = '0';
          this.domStory.style.position = 'static';
          const obj = { headerColor: '#fff', color: '#37383c' };
          this.$store.commit('handleChangeColor', obj);
          this.$store.commit('handleChangeClass', 'news--horizontal');
          this.$store.commit('handleIsTop', false);
        } else {
          this.domEmpty.style.visibility = 'visible';
          this.domEmpty.style.height = this.offsetHeight + 'px';
          this.domStory.style.position = 'fixed';
          const obj = { headerColor: '#274235', color: '#fff' };
          this.$store.commit('handleChangeColor', obj);
          this.$store.commit('handleChangeClass', 'subMenu--horizontal');
          this.$store.commit('handleIsTop', true);
        }
      } else if (this.isMobile) {
        this.mobileTop = document.getElementById('story').offsetTop;
        console.log(this.mobileTop);
        if (scrollTop >= this.mobileTop) {
          const obj = { headerColor: '#fff', color: '#37383c' };
          this.$store.commit('handleChangeColor', obj);
          this.$store.commit('handleIsTop', false);
        } else {
          const obj = { headerColor: '#274235', color: '#fff' };
          this.$store.commit('handleChangeColor', obj);
          this.$store.commit('handleIsTop', true);
        }
      }
    },
    setup(sketch) {
      const width =
        document.documentElement.clientWidth || document.body.clientWidth;
      this.helf = width / 2;
      let num = 500;
      let high = 393;
      this.period = 400;
      this.xSpacing = 20;
      this.amplitude = 80;
      if (this.isMobile) {
        num = 200;
        high = 100;
        this.period = 80;
        this.xSpacing = 5;
        this.amplitude = 20;
      }
      sketch.createCanvas(width, num);
      this.waveWidth = sketch.width + 20;
      this.xWave = (sketch.TWO_PI / this.period) * this.xSpacing;
      this.arrWave = new Array(sketch.floor(this.waveWidth / this.xSpacing));
      const icon = sketch.createElement('i');
      icon.style('color', this.colorPrimary);
      // position the element
      icon.position(this.helf - 35, high);
      icon.addClass('iconfont el-circle');
      //  console.log(icon);
    },
    draw(sk) {
      sk.background('#274235');
      this.calcWave(sk);
      let circle = 6;
      if (this.isMobile) {
        circle = 3;
      }
      this.renderWave(sk, circle);
    },
    renderWave(sk, circle) {
      sk.noStroke();
      sk.fill(this.colorPrimary);
      for (let x = 0; x < this.arrWave.length; x++) {
        // eslint-disable-next-line prefer-const
        let arrWave = sk.height / 6 + this.arrWave[x];
        sk.ellipse(x * this.xSpacing, arrWave, circle, circle);
        sk.stroke(this.colorLine);
        sk.line(x * this.xSpacing, arrWave, this.helf, sk.height - 80);
      }
    },
    calcWave(sk) {
      this.theta += 0.01;
      let x = this.theta;
      for (let i = 0; i < this.arrWave.length; i++) {
        this.arrWave[i] = sk.sin(x) * this.amplitude;
        x += this.xWave;
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleTagClick(obj) {
      this.objShow = {};
      //  console.log(obj);
      const arrTabs = this.arrTabs.map((item) => {
        item.boo = false;
        return item;
      });
      this.arrTabs = arrTabs;
      this.activeName = obj.name;
      if (obj.name === 'first') {
        this.arrShow = [];
        this.objShow = obj;
      } else if (obj.name === 'second') {
        this.arrShow = this.arrTags;
        const arrshow = this.arrShow.map((item) => {
          if (item.id === 4) {
            item.boo = true;
          } else {
            item.boo = false;
          }
          return item;
        });
        this.objShow = arrshow[0];
        this.arrShow = arrshow;
      } else if (obj.name === 'third') {
        this.arrShow = this.arrTagSmall;
        const arrshow = this.arrShow.map((item) => {
          if (item.id === 1) {
            item.boo = true;
          } else {
            item.boo = false;
          }
          return item;
        });
        /* const arrTabs = this.arrTabs.map((item) => {
          if (item.id === 1) {
            item.boo = true;
          } else {
            item.boo = false;
          }
          return item;
        }); */
        // this.arrTabs = arrTabs;
        this.objShow = arrshow[0];
        this.arrShow = arrshow;
      }
    },
    handleTabsBottom(obj) {
      this.objShow = obj;
      this.arrShow = [];
      this.activeName = '';
      const arrTabs = this.arrTabs.map((item) => {
        if (item.id === obj.id) {
          item.boo = true;
        } else {
          item.boo = false;
        }
        return item;
      });
      this.arrTabs = arrTabs;
    },
    handleArrShow(obj) {
      console.log(this.arrShow);
      console.log(obj);
      this.objShow = obj;
      if (obj.id >= 3) {
        this.activeName = 'second';
      } else {
        this.activeName = 'third';
      }
      const arrShow = this.arrShow.map((item) => {
        if (item.id === obj.id) {
          item.boo = true;
        } else {
          item.boo = false;
        }
        return item;
      });
      this.arrShow = arrShow;
    }
  }
};
</script>
