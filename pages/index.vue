<script setup>
import { onMounted } from "vue";
// import Slide from "@/components/Slide/index.vue";
</script>

<template lang="pug">
div
  Navbar

  //- 主視覺
  Kv

  //- 引言
  Intro.overflow-x-hidden

  //- 地圖
  Map

  //- ESGforHealth
  Esg

  //- 肺健康實踐
  Lund.overflow-x-hidden

  //- FOOTER
  Footer


</template>

<style scoped lang="sass"></style>
