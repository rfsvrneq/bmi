<script setup></script>

<template lang="pug">
div#esg(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-esg")
  .esg-bg
    .container.flex.flex-col(class="justify-between")
      h3.content-ttl.text-left.text-green-200(data-aos="fade-right" data-aos-duration="800" data-aos-delay="600") 百靈佳殷格翰三個「More」
        span.content-p.block(class="tracking-[8px]") 倡議永續發展、對環境許諾

      .content-p.text-green-100.leading-normal(class="w-full md:w-[620px]" data-aos="fade-right" data-aos-duration="800" data-aos-delay="800")
        p 我深刻體認到肺部疾病對於台灣民眾肺部健康威脅的急迫性。
        p 基於對台灣這片土地的責任，我們不僅專注於提供創新治療方案，更致力於提升民眾對肺部疾病的認識與預防能力。
        p.text-right.mt-4 ── 百靈佳殷格翰總經理 邱建誌

  .bg-gray-800
    .container
      .content-p(data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000")
        p 即便空污危害健康，我們還是得呼吸。對抗肺病，我們能做到戒菸、避免吸入油煙和二手菸，但提升空氣品質不是一蹴可幾的工程，那麼該怎麼應對呢？
        p.mt-5 百靈佳殷格翰提供可行的解決方案，包含：跨界合作推廣早篩早治、打造「一條龍健康服務平台」、以及醫療科技創新等，但百靈佳殷格翰更高的願景是「永續發展—世代經營」，包括「More Health」、「More Green」、「More Potential」三大任務，未來能繼續展現出「超越藥廠」角色，持續為台灣這塊土地及世世代代帶來更多正向的改變，與台灣社會共同邁向健康永續的下一個50年。
      .content-p.text-right.mt-8
        a.text-green-200.underline.click_event(href="https://www.commonhealth.com.tw/article/90989", target="_blank", data-title="lunghealth", data-label="click-lunghealth-article-commonhealth-90989",class="hover:text-green-300 focus:text-green-300")
        
          img(src="/assets/img/icon-1.svg" alt="總經理專訪", class="w-[18px] inline mr-2 -mt-1")
          | 總經理專訪

</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'

.esg-bg
  background: url(/assets/img/esg-bg.jpg) no-repeat 25% 40%
  background-size: cover
  .container
    min-height: 560px
    margin-top: -50vh
  +m-1024
    background: linear-gradient(180deg, rgba(#444138, 0) 55%, rgba(#444138, 1) 100%), url(/assets/img/esg-bg.jpg)
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    .container
      min-height: 70vh
  +m-768
    background: linear-gradient(180deg, rgba(#444138, 0) 55%, rgba(#444138, 1) 100%), url(/assets/img/esg-bg-s.jpg)
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    .container
      min-height: 80vh
</style>
