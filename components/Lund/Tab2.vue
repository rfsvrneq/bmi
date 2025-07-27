<script setup></script>

<template lang="pug">
div
  .flex.flex-col.justify-center(class="lg:flex-row lg:justify-around")
    img(src="/assets/img/tab-2-img.jpg" alt="胸部X光", class="w-full lg:w-5/12")
    .text-green-900(class="w-full lg:w-6/12")
      h4.content-ttl.mb-5(class="mt-5 lg:mt-0") 胸部X光
      ul.tabs-ul.text-lg.tracking-tight
        li 屬肺部的「結構性」檢查，與肺功能檢測各有優缺且能互補
        li 功能： 觀察肺部結構上有無異常
        li 優點： 方便快速、最小可看到0.8公分病灶
        li 缺點： 死角多，病灶易被遮蔽，不適合做肺癌篩檢
        li 放射線暴露量： 極低，約0.015毫西弗/次
        li 健檢價格： 便宜，約300元
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
