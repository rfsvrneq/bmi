<script setup>
// 動態圖片載入
const getImageUrl = (name) => {
  const assets = import.meta.glob("~/assets/img/*", {
    eager: true,
    import: "default",
  });
  return assets[`/assets/img/${name}`];
};

const tabContents = [
  {
    title: "糖尿病",
    img: "comorb-tab-3-1.svg",
  },
  {
    title: "高血壓",
    img: "comorb-tab-3-2.svg",
  },
  {
    title: "高血脂",
    img: "comorb-tab-3-3.svg",
  },
  {
    title: "代謝性脂肪肝病",
    img: "comorb-tab-3-4.svg",
  },
  {
    title: "睡眠呼吸中止症",
    img: "comorb-tab-3-5.svg",
  },
];
</script>

<template lang="pug">
div
  p.text-sm.bg-red-300.text-white.inline-block.px-2.tracking-widest.rounded-full.mt-3 疾病
  .flex.flex-wrap.justify-center.content-start
    figure.mt-3(v-for="(tab ,index) in tabContents" :key="index.index" class="w-6/12 md:w-4/12")
      p.text-center.text-xl.mb-2 {{ tab.title }}
      img.mx-auto(:src="getImageUrl(tab.img)", class="h-[80px] sm:h-[100px]")
</template>

<style scoped lang="sass"></style>
