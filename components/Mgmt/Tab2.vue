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
        td.pb-1.pt-2 Liraglutide
        td.pb-1.pt-2 抑制食慾與延緩胃排空
      tr.border-b-1.border-gray-950
        td.pt-1.pb-1 Semaglutide
        td.pt-1.pb-1 抑制食慾與延緩胃排空
      tr
        td.pt-1 Tirzepatide
        td.pt-1.text-center
          ul.list-disc.text-left.inline-block
            li 抑制食慾與延緩胃排空
            li 促進脂質代謝
</template>

<style scoped lang="sass"></style>
