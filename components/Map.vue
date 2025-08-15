<script setup>
import mapSvg from "~/assets/img/map.svg?raw"; // 把 SVG 檔案當作字串引入
const mayors = [
  {
    county: "臺北市",
    id: "taipei",
  },
  {
    county: "新北市",
    id: "newtaipei",
  },
  {
    county: "桃園市",
    id: "taoyuan",
  },
  {
    county: "新竹市",
    id: "hsinchu",
  },
  {
    county: "新竹縣",
    id: "hsinchucounty",
  },
  {
    county: "苗栗縣",
    id: "miaoli",
  },
  {
    county: "臺中市",
    id: "taichung",
  },
  {
    county: "彰化縣",
    id: "changhua",
  },
  {
    county: "南投縣",
    id: "nantou",
  },
  {
    county: "雲林縣",
    id: "yunlin",
  },
  {
    county: "嘉義市",
    id: "chiayi",
  },
  {
    county: "嘉義縣",
    id: "chiayicounty",
  },
  {
    county: "臺南市",
    id: "tainan",
  },
  {
    county: "高雄市",
    id: "kaohsiung",
  },
  {
    county: "屏東縣",
    id: "pingtung",
  },
  {
    county: "基隆市",
    id: "keelung",
  },
  {
    county: "宜蘭縣",
    id: "yilan",
  },
  {
    county: "花蓮縣",
    id: "hualien",
  },
  {
    county: "臺東縣",
    id: "taitung",
  },
  {
    county: "澎湖縣",
    id: "penghu",
  },
  {
    county: "金門縣",
    id: "kinmen",
  },
  {
    county: "連江縣",
    id: "lienchiang",
  },
];
</script>

<template lang="pug">
div#map.bg-amber-200(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-home")
  .container.pt-1

    //- 肥胖地圖
    .ttl
      div
        img(src="/assets/img/ttl-icon.svg")
        h2 台灣每2人就有1人過重或肥胖，您也是其中之一嗎？
    
    .content-p.space-y-8
      p(class="-tracking-[0]") 根據國健署最新「國民營養健康調查」統計
        sup 2
        | ，台灣成人過重或肥胖率已達50.3%，等於每2人就有1人過重或肥胖。
      p.tracking-tight 在體育署每年發布的「中華民國運動現況調查」中3，台灣的肥胖率在過去10年上升了5.3%，2024年過重或肥胖率
        span.content-span 全台以雲林縣43.1%居冠，六都以高雄市的41.3%為首
        | 。
      p.tracking-tight 美食之都
        span.content-span 台南市
        | 雖擺脫「六都最胖」之名，但回顧
        span.content-span 過去10年的過重或肥胖人口成長率則高達7.2%
        | ，仍為六都之最。

    
    .map-wrap(class="-mx-4 sm:-mx-0 mt-5")
      #map(class="w-full sm:w-11/12 lg:w-10/12 mx-auto" v-html="mapSvg")

    .flex.justify-center.my-5(class="flex-col items-center md:flex-row md:space-x-4 space-y-1 md:space-y-0")
      p.text-lg
        img.inline.mr-2(src="/assets/img/map-img-2.svg" class="w-6 md:w-10")
        | 2024年過重或肥胖率
      p.text-lg
        img.inline.mr-2(src="/assets/img/map-img-1.svg" class="w-6 md:w-10")
        | 過去10年過重或肥胖成長率

    small.block ※備註：
    small.block 根據衛福部標準，18歲以上民眾BMI分類大於或等於27為肥胖，24～27是過重，18.5～24則為標準體位，低於18.5則屬於過輕。
    small.block 10年肥胖成長率計算方式：2024年各城市肥胖率–2015年各城市肥胖率





</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

.fit
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center


// #map
//   position: relative
//   &::after
//     content: ''
//     width: 110vw
//     height: 100px
//     background: url('/assets/img/wave.svg')
//     background-size: cover
//     position: absolute
//     background-position: center
//     bottom: -100px
//     left: 55%
//     transform: translateX(-55%)
</style>
