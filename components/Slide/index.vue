<script setup>
const slides = [
  {
    url: "https://www.commonhealth.com.tw/article/92872",
    imgSrc:
      "https://as.chdev.tw/web/article/a/e/4/a6ed49e4-ed4f-400b-bf8b-3133af05c0d41751258540.webp",
    title: "家住「重」災區？ BMI超標恐提高慢性病風險",
    label: "click-2025obesity-article-commonhealth-92872",
  },
  {
    url: "https://www.commonhealth.com.tw/article/89464",
    imgSrc:
      "https://as.chdev.tw/web/article/0/1/4/0fef9e31-1b2f-49ca-8880-56d3feb52f431709544312.jpg",
    title: "自己胖、家人也一定胖？醫教4招遠離肥胖威脅",
    label: "click-2025obesity-article-commonhealth-89464",
  },
  {
    url: "https://www.commonhealth.com.tw/article/82748",
    imgSrc:
      "https://as.chdev.tw/web/article/9/3/4/9c25740b-3066-4024-8e1c-142bf5b8d3511600312700.jpg",
    title: "糖胖症，如何控制血糖還能成功減重？",
    label: "click-2025obesity-article-commonhealth-82748",
  },
  {
    url: "https://www.commonhealth.com.tw/article/78781",
    imgSrc:
      "https://as.chdev.tw/CH/images/channel_master/ac6a4293-0ae0-4192-a417-fba462bd1d22.jpg",
    title: "別輕忽「內臟脂肪」！不只易罹患慢性病　7種癌症也與它有關",
    label: "click-2025obesity-article-commonhealth-78781",
  },
  {
    url: "https://www.commonhealth.com.tw/article/92617",
    imgSrc:
      "https://as.chdev.tw/web/article/1/4/4/10c9588a-495b-4ca8-a218-832a042aa8f01744600897.webp",
    title:
      "「瘦瘦針」身世揭祕：3科學巨擘接力半世紀，改寫全球糖尿病、肥胖治療史",
    label: "click-2025obesity-article-commonhealth-92617",
  },
];
</script>

<template>
  <div
    class="bg-cyan-200 imp_event"
    id="reports"
    data-title="2025obesity"
    data-label="imp_section-2025obesity-news"
  >
    <div
      class="container max-w-5xl imp_event pb-0"
      id="slide"
      data-title="2025obesity"
      data-label="imp_section-2025obesity-article"
    >
      <div class="text-center my-10">
        <div class="rounded-btn">
          <p>相關報導</p>
        </div>
      </div>
      <!-- 輪播設定 -->
      <div class="relative px-14">
        <swiper
          :slides-per-view="1"
          :space-between="30"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :modules="[
            SwiperPagination,
            SwiperGrid,
            SwiperNavigation,
            SwiperAutoplay,
            SwiperEffectCreative,
          ]"
          :grid="{
            rows: 1,
          }"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
              grid: {
                rows: 1,
                fill: 'row',
              },
            },
            '768': {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row',
              },
            },
            '1024': {
              slidesPerView: 3,
              grid: {
                rows: 1,
                fill: 'row',
              },
            },
          }"
        >
          <!-- 輪播內容 -->
          <swiper-slide
            v-for="(slide, index) in slides"
            :key="slide"
            class="overflow-hidden rounded-2xl drop-shadow"
          >
            <a
              class="click_event"
              data-title="2025obesity"
              :data-label="slide.label"
              :href="slide.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="slide-img"
                :style="{ backgroundImage: 'url(' + slide.imgSrc + ')' }"
              ></div>
              <p class="bg-cyan-500 text-left p-3">
                <span class="line-clamp-2">{{ slide.title }}</span>
                <span class="block text-sm text-right text-white">more ›</span>
              </p>
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
  font-size: 0
  content: ''
  background-image: url('/assets/img/swiper-next.svg')
  background-size: contain
  background-repeat: no-repeat
  width: 25px
  height: 50px
.swiper-button-prev:after
  transform: scaleX(-1)
</style>
