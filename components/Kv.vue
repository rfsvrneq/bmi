<script setup></script>

<template lang="pug">
div#kv.pt-20(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-home")
  .clouds
  img.block.-mt-8.z-10(src="/assets/img/kv-ttl.svg", alt="百靈佳殷格翰", class="w-11/12 sm:w-10/12 max-w-[780px]")
  p.font-garamond.h-8(class="text-3xl sm:text-4xl" v-gsap.animateText.slow.from="{opacity: 0, delay: 0.8}") # Do one thing for Taiwan
  .font-serif.font-semibold.px-8.tracking-wider.leading-relaxed(class="text-justify md:text-left text-xl xs:text-2xl")
    p(class="inline md:block") 人活著離不開乾淨的空氣，但空氣卻變成潛在健康殺手。
    p(class="inline md:block") 空污無所不在，肺癌、肺部慢性疾病時刻威脅著健康，
    p(class="inline md:block") 環境永續健康才可永續。
</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'
#kv
  background: linear-gradient(180deg, #2c5e59 10%, rgba(#2c5e59, 0) 45%)
  background-size: cover
  height: 100vh
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-around
  overflow: hidden
  position: relative
  &::before
    content: ''
    position: absolute
    inset: 0
    background: url(/assets/img/kv-bg.jpg) no-repeat center 0
    background-size: cover
    z-index: -1
    will-change: transform // GPU 加速
    animation: kv-zoom 20s ease-in-out infinite alternate
    animation-delay: -5s
  +m-768
    justify-content: space-evenly

@keyframes kv-zoom
  from
    transform: scale(1)
  to
    transform: scale(1.3)


// 雲飄移效果
.clouds
  width: 100vw
  height: 100vh
  background: url(/assets/img/clouds_repeat.png) repeat-x
  background-size: 50vw auto
  background-position: center bottom
  position: absolute
  top: 0
  right: 0
  bottom: 0
  z-index: 1
  will-change: transform, background-position // GPU 加速
  animation: move-background 25s linear infinite
  animation-delay: -10s

@keyframes move-background
  0%
    transform: translateX(0)
    opacity: 0
  5%
    opacity: 1
  95%
    opacity: 1
  100%
    transform: translateX(-50vw)
</style>
