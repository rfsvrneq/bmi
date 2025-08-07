<script setup>
import { onMounted } from "vue";
import Slide from "@/components/Slide/index.vue";
</script>

<template lang="pug">
div
  Navbar

  //- 主視覺+前言
  Kv

  //- 肥胖地圖
  Map

  //- 肥胖定義
  defn

  //- 肥胖成因
  causes

  //- 肥胖共病
  Comorb

  //- 體重控管
  Mgmt

  //- 專家地圖
  Experts

  //- 影音專區
  media

  Slide

  //- FOOTER
  Footer


</template>
