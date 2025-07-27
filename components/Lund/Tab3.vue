<script setup></script>

<template lang="pug">
div
  .flex.flex-col.justify-center(class="lg:flex-row lg:justify-around")
    img(src="/assets/img/tab-3-img.jpg" alt="低劑量電腦斷層（LDCT）", class="w-full lg:w-5/12")
    .text-green-900(class="w-full lg:w-6/12")
      h4.content-ttl.mb-5(class="mt-5 lg:mt-0") 低劑量電腦斷層（LDCT）
      ul.tabs-ul.text-lg
        li 早期發現肺癌的篩檢工具
        li 功能： 可完整掃描整個肺部，作為篩檢肺癌的檢查
        li 優點： 可發現0.1公分極小病灶、解析度高
        li 缺點： 太細微的觀察在臨床上不見得有意義
        li 放射線暴露量： 約1.0毫西弗/次
        li 健檢價格： 較貴，約4,000~8,000元不等
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
