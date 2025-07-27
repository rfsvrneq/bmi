<script setup>
import { ref } from "vue";
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";

const tabs = ref([
  {
    key: "lung", // 用作內部邏輯與元件對應
    title: "肺功能檢測", // 顯示用文字
    label: "click-lunghealth-tab-function",
  },
  {
    key: "xray",
    title: "胸部X光",
    label: "click-lunghealth-tab-xray",
  },
  {
    key: "ldct",
    title: "低劑量電腦斷層（LDCT）",
    label: "click-lunghealth-tab-ldct",
  },
]);

const activeTab = ref(tabs.value[0].key);

const changeTab = (tabName) => {
  activeTab.value = tabName;
};

// 根據 activeTab 顯示對應的子元件
const tabComponents = {
  lung: Tab1,
  xray: Tab2,
  ldct: Tab3,
};
</script>

<template lang="pug">
div#lund(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-lund")
  .lund-bg(data-aos="fade-left" data-aos-duration="800")
    .container
      .content-ttl.mb-8(class="text-[36px] md:text-[40px]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500")
        h3 護肺生活自救對策
        p.text-xl.mt-2 三種預防篩檢工具，及早搶救肺健康

      .content-p.leading-normal(data-aos="fade-up" data-aos-duration="800" data-aos-delay="600")
        p 肺是人體呼吸的總樞紐，一旦肺臟失序則身體大亂，對健康將有危害。守護肺部健康，除了要戒菸和遠離空氣中瀰漫的各種隠形危機，健康檢查也是必須的。
        p.mt-5 想知道肺健不健康，可藉由肺功能檢查、胸部X光及低劑量電腦斷層（LDCT）來檢測。


  .tool-bg
    .container
      .content-ttl.leading-normal.text-center.mb-5
        img(src="/assets/img/icon-2.svg" alt="肺部檢查3大工具比較", class="w-[22px] inline mr-2 -mt-2")
        h3.inline 肺部檢查3大工具比較

      //- TAB
      .tabs-table.flex.items-stretch
        div.click_event.w-full.text-center.py-2.flex.justify-center.items-center(v-for='(tab, index) in tabs' :key='index' @click='changeTab(tab.key)' :class="{ 'active': activeTab === tab.key }", data-title="lunghealth", :data-label="tab.label")
          span.content-p.px-2 {{ tab.title }}
      .tabs-table-content
        //- activeTab 顯示對應的子元件
        //- component 動態渲染元件的特殊標籤
        Transition(name="fade" mode="out-in")
          component(:is="tabComponents[activeTab]" :key="activeTab")

      .text-lg.mt-5
        small 註1：健檢工具價格，不同醫療機構的定價各有不同。
        small 註2：肺功能檢測和胸部X光通常會含在健檢套組內一起執行，以利醫師整合評估。
        small.block 諮詢：陳育民醫師、陸教義醫師、徐培菘醫師       整理：康健雜誌

      .content-p.text-right.mt-5
        a.text-green-200.underline.click_event(href="https://www.commonhealth.com.tw/article/90631", target="_blank", data-title="lunghealth", data-label="click-lunghealth-article-commonhealth-90631", class="hover:text-green-300 focus:text-green-300")
          img(src="/assets/img/icon-1.svg" alt="觀看更多", class="w-[18px] inline mr-2 -mt-1")
          | 觀看更多

    .container.pt-0
      .content-ttl.leading-normal.text-center.mb-5(data-aos="fade-in")
        img(src="/assets/img/icon-3.svg" alt="健康呼吸！上班族遠離空污的超實用指南", class="w-[38px] inline mr-2 -mt-1")
        h3.inline 健康呼吸！上班族遠離空污的超實用指南

      iframe.aspect-video.w-full.max-w-4xl.mx-auto(src="https://www.youtube.com/embed/BI8LWVA7tGU?si=UoYpffVU86eXhTJg", title="YouTube video player", frameborder="0", allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", referrerpolicy="strict-origin-when-cross-origin", allowfullscreen)


</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'
@import '~/assets/sass/colors.sass'

.lund-bg
  background: linear-gradient(180deg, rgba(#21201b, .9) 0%, rgba(#21201b, 0) 90%), url(/assets/img/lund-bg.jpg)
  background-repeat: no-repeat
  background-position: center top
  background-size: cover
  .container
    min-height: 560px

.tool-bg
  background: linear-gradient(180deg, rgba(#3d4b4b, .5) 20%, rgba(#3f514e, .1) 100%), url(/assets/img/tool-bg.jpg) no-repeat center
  background-size: cover


// 分頁
.tabs-table
  div
    border-top-right-radius: 1rem
    cursor: pointer
    // 點選時的樣式
    &.active
      background-color: $orange-200 !important
  div:nth-child(1)
    background-color: $green-200
    z-index: 2
  div:nth-child(2)
    background-color: $green-800
    margin-left: -1rem
    padding-left: 1rem
    z-index: 1
  div:nth-child(3)
    background-color: $green-600
    margin-left: -1rem
    padding-left: 1rem


.tabs-table-content
  background-color: #eeece8
  padding: 2rem
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
