<script setup>
const slides = [
  {
    url: 'https://cancer.commonhealth.com.tw/article/1363',
    imgSrc:'https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fch-cancer-cdn.cwg.tw%2Farticle%2F202410%2Farticle-6718a4fcad81e.jpg/?format=webp',
    title: '晚期肺癌治療對策，從確診到療程該知道的事',
    label: 'click-lungcancercare-article-commonhealth-1363',
  },
  {
    url: 'https://cancer.commonhealth.com.tw/article/1340',
    imgSrc:'https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fch-cancer-cdn.cwg.tw%2Farticle%2F202409%2Farticle-66fa0bfbb6e26.jpg/?format=webp',
    title: '超過 5 年存活期！標靶藥物接續治療策略，晚期肺癌也能追求「與癌共存」',
    label: 'click-lungcancercare-article-commonhealth-1340',
  },
  {
    url: 'https://cancer.commonhealth.com.tw/article/1131',
    imgSrc:'https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fch-cancer-cdn.cwg.tw%2Farticle%2F202402%2Farticle-65dffad84dad4.jpg/?format=webp',
    title: '確診晚期肺癌怎麼辦？醫師與個管師協助找到適當的治療策略',
    label: 'click-lungcancercare-article-commonhealth-1131',
  },
  {
    url: 'https://cancer.commonhealth.com.tw/article/1082',
    imgSrc:'https://ch-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fch-cancer-cdn.cwg.tw%2Farticle%2F202401%2Farticle-65a0a53ab4821.jpg/?format=webp',
    title: '妥善運用基因檢測與接續性治療策略 助於延長晚期肺癌患者存活期',
    label: 'click-lungcancercare-article-commonhealth-1082',
  }
];

</script>

<template>
  <div class="bg-yellow-50">
    <div class="container max-w-6xl imp_event" id="slide" data-title="lungcancercare" data-label="imp_section-lungcancercare-article">
      <!-- 輪播設定 -->
      <div class="relative px-12">
        <swiper
          :slides-per-view="1"
          :space-between="30"
          :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
          :modules="[
            SwiperPagination,
            SwiperGrid,
            SwiperNavigation,
            SwiperAutoplay,
            SwiperEffectCreative
          ]"
          :grid="{
            rows: 1
          }"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
              grid: {
                rows: 1,
                fill: 'row'
              }
            },
            '768': {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row'
              }
            },
            '1024': {
              slidesPerView: 4,
              grid: {
                rows: 1,
                fill: 'row'
              }
            }
          }"
        >
          <!-- 輪播內容 -->
          <swiper-slide v-for="(slide, index) in slides" :key="slide">
            <a class="click_event" data-title="lungcancercare" :data-label="slide.label" :href="slide.url" target="_blank" rel="noopener noreferrer">
              <div class="slide-img" :style="{ backgroundImage: 'url(' + slide.imgSrc + ')'}"></div>
              <p class="text-base font-openhuninn mt-4 text-center px-3">{{ slide.title }}</p>
            </a>
          </swiper-slide>
        </swiper>

        <!-- 輪播控制 -->
        <div class="swiper-button-prev swiper-button-prev-slide"></div>
        <div class="swiper-button-next swiper-button-next-slide"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.slide-img
  width: 100%
  height: 150px
  background-size: cover
  background-position: center
.swiper-button-prev:after, .swiper-button-next:after
  @apply text-gray-900 px-5 py-3 rounded-full text-2xl
.swiper-button-prev 
  @apply left-0
.swiper-button-next
  @apply right-0
.slide-img
  @apply rounded-3xl
</style>
