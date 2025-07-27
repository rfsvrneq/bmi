<script setup></script>

<template lang="pug">
div
  .flex.flex-col.justify-center(class="lg:flex-row lg:justify-around")
    img(src="/assets/img/tab-1-img.jpg" alt="肺功能檢測", class="w-full lg:w-5/12")
    .text-green-900(class="w-full lg:w-6/12")
      h4.content-ttl.mb-5(class="mt-5 lg:mt-0") 肺功能檢測
      ul.tabs-ul.text-lg
        li 「功能性」檢查，也是肺部最基本的健檢
        li 功能： 觀察呼吸道的生理情況是否正常
        li 優點： 快速、非侵入性、無輻射暴露
        li 缺點： 需民眾高度配合
        li 放射線暴露量： 無
        li 健檢價格： 便宜，約200元
</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'
@import '~/assets/sass/colors.sass'
.tabs-ul
  li
    padding: 0.5rem
  li:nth-child(odd)
    background-color: #f7fcf5
  li:nth-child(even)
    background-color: #d5ebd5
</style>
