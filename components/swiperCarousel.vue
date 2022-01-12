<template>
  <client-only>
    <div v-if="isMobile" class="mobile">
      <swiper ref="mySwiper" :options="optionMobile">
        <swiper-slide
          v-for="(item, index) in source"
          :key="index"
          class="swiper-slide"
        >
          qweqwe
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </div>
    <div v-else class="computer">
      <swiper ref="mySwiper" :options="option">
        <swiper-slide
          v-for="item in source"
          :key="item.id"
          class="swiper-slide"
        >
          <div class="swiper-slide-content">
            <div class="swiper-slide-content-img">
              <img :src="`${baseUrl}${item.title_icon}`" alt="title_icon" />
            </div>
            <h6 class="title-h6">{{ item.title }}</h6>
            <div class="swiper-slide-content-text">
              {{ item.introduction }}
            </div>
          </div>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </div>
  </client-only>
</template>
<script>
let vm = null;
export default {
  props: {
    source: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      option: {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 10,
        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          progress() {
            // console.log(this.slides);
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i);
              const slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              const translate = slideProgress * modify * 90 + 'px';
              const scale = 1 - Math.abs(slideProgress) / 5;
              const zIndex = 999 - Math.abs(Math.round(8 * slideProgress));
              slide.transform(
                'translateX(' + translate + ') scale(' + scale + ')'
              );
              slide.css('zIndex', zIndex);
              slide.css('opacity', 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css('opacity', 0);
              }
            }
          },
          setTransition(transition) {
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i);
              slide.transition(transition);
            }
          },
          click() {
            const realIndex = this.realIndex;
            vm.$emit('chackindex', realIndex);
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      optionMobile: {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        //  loopedSlides: 3,
        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          progress() {
            console.log(this.slides);
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i);
              const slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              const translate = slideProgress * modify * 90 + 'px';
              const scale = 1 - Math.abs(slideProgress) / 5;
              const zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                'translateX(' + translate + ') scale(' + scale + ')'
              );
              slide.css('zIndex', zIndex);
              slide.css('opacity', 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css('opacity', 0);
              }
            }
          },
          setTransition(transition) {
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i);
              slide.transition(transition);
            }
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  computed: {},
  watch: {},
  created() {
    vm = this;
  },
  mounted() {
    console.log(this.source.length);
  },
  methods: {}
};
</script>
