<script setup></script>

<template lang="pug">
div#defn.bg-amber-200(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-home")
  .container

    //- 肥胖定義
    .ttl
      div
        img(src="/assets/img/ttl-icon.svg")
        h2 該怎麼衡量一個人是否肥胖？只測量體重足夠嗎？
    
    .content-p.text-center
      p(class="tracking-[2px] inline lg:block") BMI 和腰圍是最常見的工具，若需更精確評估，可再進一步
      p(class="tracking-[2px] inline lg:block") 參考脂肪率、腰臀比，掌握全方位健康指標。

    .ttl-t
      div
        img.icon-2(src="/assets/img/ttl-t-icon-2.svg")
        p 建議您，若有過重或肥胖之疑慮，請主動諮詢專業醫師。
        img.icon-1(src="/assets/img/ttl-t-icon-1.svg")

    .ttl-rounded
      div
        img(src="/assets/img/ttl-rounded-icon.svg")
        h3 BMI：你有多久沒留意過自己的 BMI 指數呢？

    .content-p.text-center
      p(class="tracking-[2px] inline lg:block") 依據衛生福利部公布之體位定義，18 歲以上成人區分為四種體位
        sup 4
        | ：


    .content-p.text-center
      p(class="tracking-[2px] inline lg:block") BMI 的好處是容易取得，缺點是無法了解身體組成；
      p(class="tracking-[2px] inline lg:block") BMI 相同的兩個人，肌肉量與體脂肪比例若有差異，
      p(class="tracking-[2px] inline lg:block") 健康狀況跟慢性病風險則完全不同。


</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'
@import '~/assets/sass/colors.sass'
</style>
