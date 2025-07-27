<script setup>

// 動態圖片載入
// const getImageUrl = name => {
//   const assets = import.meta.glob('~/assets/img/*', { eager: true, import: 'default' });
//   return assets[`/assets/img/${name}`];
// };

const whos = [
  {
    imgSrc: 'who-icon-1.svg',
    title: '壓力調節¹⁴',
    content: '有一些方法可以管理和減少壓力，例如優先考慮您想要做的事情，安排一些屬於自己的時間，並表達您的期望和需求。或是透過身心健康技巧，如深呼吸、冥想、瑜伽或身心放鬆練習，來降低壓力水平。',
    delay: '100',
  },
  {
    imgSrc: 'who-icon-2.svg',
    title: '藥物管理⁶',
    content: '使用專門針對偏頭痛治療的藥物，偏頭痛目前已知致病機轉- 三叉神經元刺激引發血管擴張與訊號傳遞，造成頭痛與各種症狀。目前有針對偏頭痛致病機轉關鍵訊號傳遞因子有效抑制，控制偏頭痛發作的藥物。',
    delay: '200',
  },
  {
    imgSrc: 'who-icon-3.svg',
    title: '頭痛日誌紀錄¹⁴',
    content: '頭痛日誌紀錄，透過記錄自己發作頻率、疼痛程度及症狀，可以幫助你的醫師了解你的偏頭痛狀況；以及飲食作息調整的紀錄有助於正確識別個別患者的觸發因素。',
    delay: '300',
  },
  {
    imgSrc: 'who-icon-4.svg',
    title: '充足的睡眠¹⁴',
    content: '睡眠品質不足可能導致一系列健康問題，同時也是偏頭痛發作最常見的誘因之一。如果您被診斷患有偏頭痛，請盡量確保自己獲得充足且良好的睡眠。有助於減少偏頭痛的發作頻率和嚴重程度。',
    delay: '400',
  },
  {
    imgSrc: 'who-icon-5.svg',
    title: '解決心理健康問題¹⁴',
    content: '偏頭痛可能對情緒造成影響，這意味著患者也有可能患上抑鬱和焦慮症。與您的醫生討論您可能正在經歷的任何心理健康問題。尋求心理諮詢或治療，及時處理潛在的心理健康問題，如焦慮、憂鬱或壓力，有助於減少偏頭痛的發作。',
    delay: '500',
  },
  {
    imgSrc: 'who-icon-6.svg',
    title: '規律地運動 ¹⁵',
    content: '保持規律的運動習慣，選擇適合您的身體狀況和喜好的運動方式，有助於促進身心健康，可以幫助一些人減少偏頭痛發作的頻率，且研究表明，運動也能提高自尊心，並減輕偏頭痛的嚴重症狀。',
    delay: '600',
  },
]
</script>

<template lang="pug">
div
  .container#who(class="imp_event" data-title="pfizermigraine2024" data-label="imp_section-pfizer-migraine-solution")
    h2.ttl
      span 如
      span 何
      span 舒
      span 緩
      span 及
      span 解
      span 決
      span.icon-l 偏
      span 頭
      span.icon-r 痛
      span 問
      span 題

    .grid.grid-cols-1.gap-8(class="md:px-4 md:gap-16 md:grid-cols-2 lg:grid-cols-3")
      div(v-for="(who, index) in whos" :key="index" data-aos="fade-down" :data-aos-delay="who.delay")
        img.mx-auto(:src="getImageUrl(who.imgSrc)" :alt="who.title" class="w-8/12 lg:w-10/12")
        p.text-2xl.font-bold.text-custom-blue.bg-custom-green.rounded-full.text-center.py-1.-mt-5.relative {{ who.title }}
        p.content-p.mt-4 {{ who.content }}


  .container#card(class="imp_event" data-title="pfizermigraine2024" data-label="imp_section-pfizer-migraine-selfdiagnosis")
    h2.ttl 
      span.icon-l 偏
      span 頭
      span.icon-r 痛
      span 自
      span 我
      span 診
      span 斷
      span 指
      span 南
    
    p.text-xl.text-custom-blue.font-bold.text-center.mb-4(class="sm:text-3xl")
      span ───
      span  偏頭痛的自我檢測 
      span ───
    .bg-custom-green.rounded-xl.max-w-3xl.mx-auto.p-7(data-aos="fade-down" data-aos-delay="100")
      p.text-xl.font-bold.text-custom-blue.text-center
        span 偏頭痛可以由下列
        span.text-3xl 3
        span 項症狀加以判斷²：
      .flex.my-4.flex-col.justify-between(class="sm:flex-row")
        img.h-44(src="/assets/img/icons/card-1.svg")
        img.h-44.my-4(class="md:my-0" src="/assets/img/icons/card-2.svg")
        img.h-44(src="/assets/img/icons/card-3.svg")
      p.text-xl.text-custom-blue.text-center 若這三項症狀之中有兩項或三項皆有，有九成以上的機會患的是偏頭痛
    .flex.justify-between.items-center.max-w-3xl.mx-auto.mt-4(data-aos="fade-down" data-aos-delay="200")
      .bg-custom-green.rounded-xl.p-7.flex.flex-col.items-center.justify-between(class="sm:flex-row")
        img.h-44(src="/assets/img/icons/card-4.svg")
        p.text-xl.text-custom-blue.pl-0.mt-4(class="md:pl-10 md:mt-0") 發作通常持續好幾個小時，有些患者的發作可能持續好幾天，每個人的差異很大。國際頭痛協會定義偏頭痛發作時間為四到七十二小時²。
      img.hidden(class="-mt-6 -ml-6 md:block" src="/assets/img/icons/card-5.svg")
    
    
</template>

<style scoped lang="sass">
.card-icon
  height: 180px
  width: auto
  @media screen and (max-width: 768px)
    margin: .5rem 0
</style>
