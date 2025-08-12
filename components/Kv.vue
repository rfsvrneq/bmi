<script setup>
import titleSvg from "@/assets/img/kv-title.svg";
import imgSvg from "@/assets/img/kv-img.svg";
const version = Date.now();
const titleSrc = `${titleSvg}?v=${version}`;
const imgSrc = `${imgSvg}?v=${version}`;
</script>

<template lang="pug">

div#kv.overflow-hidden(class="imp_event pt-[62px]" data-title="lunghealth" data-label="imp_section-lunghealth-home")
  client-only
    .kv
      img.kv-title(
        :src="titleSrc"
        alt="BMI>=27 病得不輕?"
      )
      img.kv-img(
        :src="imgSrc"
        alt="肥胖症成因複雜，諮詢專業醫師找出健康處方"
      )

  .container.z-10

    //- 前言
    .ttl.mt-18(class="lg:mt-32")
      div
        img(src="/assets/img/ttl-icon.svg")
        h2 您知道肥胖是一種慢性疾病嗎？

        
    .content-p
      p.text-center(class="inline lg:block") 世界衛生組織 (WHO) 公佈資料顯示
        sup 1
        | ，全球已有超過
        span.content-span 10億人
      p.text-center(class="inline lg:block") 處於肥胖狀態，等於
        span.content-span 每8個人就有1人
        | 達肥胖標準。

      p.bg-amber-300.text-white.font-light.py-6.px-14.rounded-2xl.mx-auto.my-10.space-y-2.relative.tracking-widest(class="pl-6 sm:px-14 w-11/12 sm:w-10/12")
        span 在全球肥胖問題日益嚴峻下，這不只關乎個人的健康，
        span(class="inline lg:block") 更是牽涉到社會、經濟以及全球公共衛生的重大挑戰。
        img.w-32.absolute(class="-top-14 sm:-top-20 -right-12 sm:-right-10" src="/assets/img/intro-icon-1.svg")

    img.w-44.absolute.-left-40.top-80.-z-10(src="/assets/img/intro-icon-2.svg")
    img.w-9.absolute.-right-12.bottom-40(src="/assets/img/intro-icon-3.svg")

</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

#kv
  background-color: $amber-200
  position: relative
  &::after
    content: ""
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 1
    background-size: cover
    background: linear-gradient(0deg, rgba($amber-200, 1) 25%, rgba($amber-200, 0) 50%)
.kv
  +m-1024
    display: flex
    flex-direction: column-reverse
    .kv-img, .kv-title
      width: 90%
      max-width: 600px
      margin-left: auto
      margin-right: auto
    .kv-title
      margin-top: -30%

.kv-img
  +m-1024-up
    position: absolute
    right: 50%
    transform: translateX(90%)
    top: 60px
    z-index: 0
    width: 750px
.kv-title
  +m-1024-up
    z-index: 1
    position: relative
    max-width: 680px
    left: 50%
    top: 105px
    transform: translateX(-85%)
</style>
