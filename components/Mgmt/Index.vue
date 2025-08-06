<script setup>
import { ref } from "vue";
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";

const tabs = ref([
  {
    key: "one", // 用作內部邏輯與元件對應
    title: "口服藥物", // 顯示用文字
    label: "click-Comorb-tab-1",
  },
  {
    key: "two",
    title: "針劑腸泌素",
    label: "click-Comorb-tab-2",
  },
  {
    key: "three",
    title: "手　　術",
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

#mgmt.bg-cyan-200(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-home")

  .container

    //- 肥胖成因
    .ttl
      div
        img(src="/assets/img/ttl-icon.svg")
        span 體重控管
        h2 關於體重管理，除了少吃多動還可以做什麼？

    .content-p
      p(class="tracking-[-.4px]") 根據台灣肥胖醫學會 2022 年「全台肥胖認知調查」，正在減重的人僅有 14.7% 尋求專業醫師協助。
      p.my-4(class="tracking-[-.7px]") 隨著全球各國逐漸認定肥胖為慢性病，英國與日本也逐步將相關藥物納入給付。適時的藥物介入在體重管理中的角色逐漸被肯定；
        span.text-blue-400 改變生活型態與飲食習慣的同時，藥物除了能輔助性的改善體重與健康，更可增加信心，讓對抗肥胖之路不再困難重重！

    .text-center.my-10
      .rounded-btn.text-2xl
        p 台灣衛福部核准之體重管理藥物與手術
      p.text-base.mt-6.mb-10 請注意，體重管理的藥物與手術治療因人而異，請務必諮詢專業醫師，量身訂製您的體重管理計畫。


    //- TAB
    .tabs-table
      div.click_event(v-for='(tab, index) in tabs' :key='index' @click='changeTab(tab.key)' :class="{ 'active': activeTab === tab.key }", data-title="lunghealth", :data-label="tab.label")
        span.px-2 {{ tab.title }}

    .tabs-table-content.max-w-3xl.mx-auto
      //- activeTab 顯示對應的子元件
      //- component 動態渲染元件的特殊標籤
      Transition(name="fade" mode="out-in")
        component(:is="tabComponents[activeTab]" :key="activeTab")
    
    .text-center.pt-2
      small 資料來源：各藥物之仿單

</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'
@import '~/assets/sass/colors.sass'

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
