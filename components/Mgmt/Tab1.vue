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
        td.pb-1.pt-2 Orlistat
        td.pb-1.pt-2 減少脂肪吸收
      tr
        td.pt-1 Naltrexone / Bupropion
        td.pt-1 抑制食慾
</template>

<style scoped lang="sass"></style>
