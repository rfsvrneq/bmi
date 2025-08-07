<script setup>
// import { defineProps } from "vue";
// 引入醫師圖片
import maleIcon from "@/assets/img/tab-male.svg";
import femaleIcon from "@/assets/img/tab-female.svg";

// 父層傳遞下來的 items（陣列）
const props = defineProps({
  items: {
    type: Array, // 宣告父層傳入的 items 必須是陣列
    default: () => [], // 如果父層沒傳 items，就預設是一個空陣列
  },
});
</script>

<template lang="pug">
div.grid.gap-2(class="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4")
  address.bg-white.flex.justify-between.items-center.rounded-3xl.pt-2.pb-3.px-3(
    v-for="(item, idx) in props.items"
    :key="idx"
  )
    .txt.grow.not-italic.text-center.mr-1.flex.flex-col.justify-between(class="min-h-[140px]")
      span.text-sm.text-amber-300 ⎯ {{ item.city }} ⎯
      p.text-xl {{ item.doctor }} 醫師
      span.block(class="text-[12px]") {{ item.hospital }}
      span.block.mb-2(class="text-[10px] leading-3") {{ item.add }}
      a.bg-blue-400.text-white.text-sm.px-4.py-1.rounded-full(:href="item.url" target="_blank" rel="noopener" class="hover:bg-cyan-800") 前往掛號
    .pic.flex-none(class="w-5/12")
      img(
        :src="item.gender === 'male' ? maleIcon : femaleIcon"
        alt="醫師圖示"
        class="w-full h-auto"
      )
</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'
@import '~/assets/sass/colors.sass'

+m-480
  address
    .pic
      display: none
</style>
