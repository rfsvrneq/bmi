<script setup></script>

<template lang="pug">
div#defn.bg-amber-100(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-home")

  //- 背景曲線
  .w-full.h-20
    img.fit(src="/assets/img/wave.svg")

  .container.pt-0

    //- 肥胖定義
    .ttl
      div
        img(src="/assets/img/ttl-icon.svg")
        h2 該怎麼衡量一個人是否肥胖？只測量體重足夠嗎？
    
    .content-p.text-center
      p(class="tracking-[2px] inline lg:block") BMI 和腰圍是最常見的工具，若需更精確評估，可再進一步
      p(class="tracking-[2px] inline lg:block") 參考脂肪率、腰臀比，掌握全方位健康指標。

    .flex.justify-center.items-center.mt-10(class="space-x-4 lg:space-x-10")
      .flex.flex-col.items-end(class="space-y-3 lg:space-y-8")
        img(src="/assets/img/libra-icon-1.svg" class="w-[100px]")
        img(src="/assets/img/libra-icon-2.svg" class="w-[130px]")
      .libra-girl(class="w-9/12 md:w-[460px]")
        img(src="/assets/img/libra-girl.svg")
      .flex.flex-col.items-center(class="space-y-3 lg:space-y-8")
        img(src="/assets/img/libra-icon-3.svg" class="w-[155px]")
        img(src="/assets/img/libra-icon-4.svg" class="w-[135px]")
        img(src="/assets/img/libra-icon-5.svg" class="w-[140px]")
      
    .ttl-t
      div
        img.icon-2(src="/assets/img/ttl-t-icon-2.svg")
        p 建議您，若有過重或肥胖之疑慮，請主動諮詢專業醫師。
        img.icon-1(src="/assets/img/ttl-t-icon-1.svg")

    .ttl-rounded
      div
        img(src="/assets/img/ttl-rounded-icon.svg")
        h3 BMI：你有多久沒留意過自己的 BMI 指數呢？
      
    .max-w-2xl.mx-auto.w-full
      img(src="/assets/img/bmi.svg")

    img.w-44(src="/assets/img/scale-1.svg")

    .flex.justify-center.items-center.my-10(class="flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0")
      img.w-20(src="/assets/img/apple.svg")
      p.text-3xl.font-bold.text-red-200 BMI ≥ 27 應盡速諮詢專業醫師！
      a.bg-red-200.text-white.rounded-full.py-3.px-6.text-2xl(href="#", class="hover:bg-red-500") 諮詢專家 ▶

    .content-p.text-center.mb-8
      p(class="tracking-[2px] inline lg:block") 依據衛生福利部公布之體位定義，18 歲以上成人區分為四種體位
        sup 4
        | ：

    img(src="/assets/img/scale-2.svg" class="w-7/12 mx-auto")

    .content-p.text-center.mt-8
      p(class="tracking-[2px] inline lg:block") BMI 的好處是容易取得，缺點是無法了解身體組成；
      p(class="tracking-[2px] inline lg:block") BMI 相同的兩個人，肌肉量與體脂肪比例若有差異，
      p(class="tracking-[2px] inline lg:block") 健康狀況跟慢性病風險則完全不同。


</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'
@import '~/assets/sass/colors.sass'

.fit
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center
</style>
