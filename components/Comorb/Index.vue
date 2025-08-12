<script setup>
import { ref } from "vue";
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";

const tabs = ref([
  {
    key: "one", // 用作內部邏輯與元件對應
    title: "1 至 2 倍", // 顯示用文字
    label: "click-Comorb-tab-1",
  },
  {
    key: "two",
    title: "2 至 3 倍",
    label: "click-Comorb-tab-2",
  },
  {
    key: "three",
    title: "超過 3 倍",
    label: "click-Comorb-tab-3",
  },
]);

const activeTab = ref(tabs.value[0].key);

const changeTab = (tabName) => {
  activeTab.value = tabName;
};

// 根據 activeTab 顯示對應的子元件
const tabComponents = {
  one: Tab1,
  two: Tab2,
  three: Tab3,
};
</script>

<template lang="pug">

#comorb.bg-cyan-200(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-home")

  //- 背景曲線
  .w-full.h-20
    img.fit(src="/assets/img/wave-3.svg")

  .container.pt-0

    //- 肥胖成因
    .ttl
      div
        img(src="/assets/img/ttl-icon.svg")
        h2 肥胖症帶來的共病百百款

    .content-p
      p(class="tracking-[-.4px]") 
        span.text-red-500 肥胖不僅是一種慢性病，還與200多種疾病息息相關
        | ，包含三高、心血管疾病、代謝性脂肪肝疾病，甚至是癌症。除了藉由調整生活習慣減重，更需要尋求專業協助，及早管理相關共病。

    .text-center.my-10
      .rounded-btn.text-2xl
        p 與一般人相比的罹患風險
      p.text-white.text-2xl.my-10(class="tracking-[7px]") 共病風險


    //- TAB
    .tabs-table
      div.click_event(v-for='(tab, index) in tabs' :key='index' @click='changeTab(tab.key)' :class="{ 'active': activeTab === tab.key }", data-title="lunghealth", :data-label="tab.label")
        span.px-2 {{ tab.title }}

    .tabs-table-content.max-w-3xl.mx-auto
      //- activeTab 顯示對應的子元件
      //- component 動態渲染元件的特殊標籤
      Transition(name="fade" mode="out-in")
        component(:is="tabComponents[activeTab]" :key="activeTab")

</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

.fit
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center

// 分頁
.tabs-table
  color: white
  display: flex
  justify-content: center
  div
    span
      cursor: pointer
      padding: .25rem 1rem
      font-size: 1.5rem
      font-weight: bold
      margin: 0 .75rem
      border-radius: .5rem
      border: 3px solid white
      background-color: $cyan-300
      +m-480
        padding: .25rem .5rem
        font-size: 1.25rem
        margin: 0 .15rem
    // 點選時的樣式
    &.active
      span
        background-color: $blue-400
  div:nth-child(1)
    z-index: 2
  div:nth-child(2)
    margin-left: -1rem
    padding-left: 1rem
    z-index: 1
  div:nth-child(3)
    margin-left: -1rem
    padding-left: 1rem


.tabs-table-content
  background-color: white
  padding: 2rem 2rem 1rem 2rem
  border-radius: 2rem
  margin-top: -1rem
  +m-1024
    padding: 1rem

// 分頁淡入淡出效果
.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s ease
.fade-enter-from, .fade-leave-to
  opacity: 0
.fade-enter-to, .fade-leave-from
  opacity: 1
</style>
