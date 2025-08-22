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
    title: "多囊性卵巢症候群",
    img: "comorb-tab-1-1.svg",
  },
  {
    title: "下背痛",
    img: "comorb-tab-1-2.svg",
  },
  {
    title: "應力性尿失禁",
    img: "comorb-tab-1-3.svg",
  },
  {
    title: "乳   癌",
    img: "comorb-tab-1-4.svg",
  },
  {
    title: "大腸癌",
    img: "comorb-tab-1-5.svg",
  },
  {
    title: "子宮內膜癌",
    img: "comorb-tab-1-6.svg",
  },
];
</script>

<template lang="pug">
div
  p.text-sm.bg-red-300.text-white.inline-block.px-2.tracking-widest.rounded-full.mt-3 疾病
  .flex.flex-wrap.justify-center.content-start
    figure.mt-3(v-for="(tab ,index) in tabContents" :key="index.index" class="w-6/12 md:w-4/12")
      p.text-center.mb-2(class="text-lg sm:text-xl") {{ tab.title }}
      img.mx-auto(:src="getImageUrl(tab.img)", class="h-[80px] sm:h-[100px]")
</template>

<style scoped lang="sass"></style>
