<script setup></script>

<template lang="pug">
div
  table.table-fixed.text-center.w-full(class="mt-5 lg:mt-3")
    thead
      tr
        th
          p.text-sm.bg-red-300.text-white.inline.px-3.py-1.rounded-full 治療方式 / 藥物
        th
          p.text-sm.bg-red-300.text-white.inline.px-3.py-1.rounded-full 作用機轉
    tbody.text-lg
      tr.border-b-1.border-gray-950
        td.pb-1.pt-2 胃繞道手術
          sup 10
        td.pb-1.pt-2 縮小胃與繞過小腸限制吸收
      tr.border-b-1.border-gray-950
        td.pt-1.pb-1 袖狀胃切除
          sup 11
        td.pt-1.pb-1 切除大胃體部減少容量與食慾
      tr
        td.pt-1 內視鏡胃內水球手術
          sup 12
        td.pt-1.text-center 胃部放置水球佔據胃部空間
</template>

<style scoped lang="sass"></style>
