<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";
import Tab4 from "./Tab4.vue";
import Tab5 from "./Tab5.vue";
import Tab6 from "./Tab6.vue";
import Tab7 from "./Tab7.vue";

const tabs = ref([
  {
    key: "tab1", // 用作內部邏輯與元件對應
    title: "基隆新北", // 顯示用文字
    label: "click-experts-tab-1",
  },
  {
    key: "tab2",
    title: "台北市",
    label: "click-experts-tab-2",
  },
  {
    key: "tab3",
    title: "桃竹區",
    label: "click-experts-tab-3",
  },
  {
    key: "tab4",
    title: "中彰投",
    label: "click-experts-tab-4",
  },
  {
    key: "tab5",
    title: "雲嘉南",
    label: "click-experts-tab-5",
  },
  {
    key: "tab6",
    title: "高屏區",
    label: "click-experts-tab-6",
  },
  {
    key: "tab7",
    title: "東部離島",
    label: "click-experts-tab-7",
  },
]);

const activeTab = ref(tabs.value[0].key);

// 切換分頁
const changeTab = (tabName) => {
  activeTab.value = tabName;
};

// 根據 activeTab 顯示對應的子元件
const tabComponents = {
  tab1: Tab1,
  tab2: Tab2,
  tab3: Tab3,
  tab4: Tab4,
  tab5: Tab5,
  tab6: Tab6,
  tab7: Tab7,
};

const items = ref([]); // 定義一個 reactive 變數來存放 csv 解析後的資料

// 抓取 csv 資料
onMounted(async () => {
  // fetch 靜態檔案，得到 text
  const res = await fetch("data.csv");
  const text = await res.text();
  // 先把所有行尾的 \r 去掉，再拆行，得到 rows
  const rows = text.replace(/\r/g, "").trim().split("\n");

  // 用 Array.shift() 把 rows 陣列的第一個元素拿出來
  // shift() 會同時「回傳」這個元素、並「從原陣列中移除」它
  const headers = rows
    .shift()
    .split(",")
    .map((h) => h.trim()); // 第一列作為欄位名稱

  // 遍歷陣列，逐列轉成物件，回傳一個新的陣列
  items.value = rows.map((line) => {
    // 每個元素「逗號左右」的空格都清乾淨
    const cols = line.split(",").map((c) => c.trim());
    const obj = {};
    headers.forEach((h, i) => {
      let v = cols[i];
      // 如果需要數字，可再判斷轉型
      // 「動態」把欄位名稱當成屬性，並賦值給 obj
      // 用「同一個索引」
      obj[h] = v;
    });
    return obj;
  });
  await nextTick(); // 等待 DOM 更新
});

// computed 過濾出對應 tab 的資料，對應到 CSV 資料裡的那一欄
// 分頁切換（activeTab）→ 過濾資料（filteredItems）→ 呈現在畫面上
const filteredItems = computed(() =>
  items.value.filter((item) => item.tabs === activeTab.value)
);
</script>

<template lang="pug">

#experts.bg-cyan-200.overflow-x-hidden(class="imp_event" data-title="2025obesity" data-label="imp_section-2025obesity-expert")

  .container.relative

    //- 插圖
    img.w-20.absolute(src="/assets/img/dna-3.svg" data-speed=".65" class="top-[0%] -left-[15%]")
    img.w-24.absolute(src="/assets/img/dna-4.svg" data-speed=".55" class="top-[60%] -right-[15%]")

    //- 專家地圖
    .ttl.gs-fade
      div
        img(src="/assets/img/ttl-icon.svg")
        h2 專科醫師地圖

    .content-p.mb-10
      p(class="tracking-[-1.2px]") 肥胖症成因複雜，食慾、脂肪堆積可能無法靠自己控制。別再認為對抗肥胖失敗等於沒有意志力，諮詢專業醫師，討論專屬您的健康處方。


    //- TAB
    .tabs-table
      div.click_event(v-for='(tab, index) in tabs' :key='index' @click='changeTab(tab.key)' :class="{ 'active': activeTab === tab.key }", data-title="2025obesity", :data-label="tab.label")
        span.px-2 {{ tab.title }}

    .tabs-table-content
      //- activeTab 顯示對應的子元件
      //- component 動態渲染元件的特殊標籤
      Transition(name="fade" mode="out-in")
        // 把 filteredItems 過濾後的資料傳給子元件
        component(:is="tabComponents[activeTab]" :key="activeTab" :items="filteredItems")

</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

// 分頁
.tabs-table
  color: white
  display: flex
  justify-content: space-between
  div
    flex: 0 0 calc(100% / 7)
    span
      width: 100%
      height: 100%
      display: inline-block
      text-align: center
      cursor: pointer
      font-size: 1.25rem
      font-weight: normal
      border-top-left-radius: .75rem
      border-top-right-radius: .75rem
      background-color: white
      color: $gary-800
      padding: .25rem 0
      +m-480
        font-size: 1rem
        min-width: 45px
        min-height: 45px
        padding: .25rem
        line-height: 1.2
    // 點選時的樣式
    &.active
      span
        background-color: $cyan-600
        color: white
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
  background-color: $cyan-600
  padding: 2rem 1.25rem
  border-bottom-left-radius: 2rem
  border-bottom-right-radius: 2rem
  +m-1024
    padding: 1rem
    max-height: 70vh
    overflow-y: auto


// 分頁淡入淡出效果
.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s ease
.fade-enter-from, .fade-leave-to
  opacity: 0
.fade-enter-to, .fade-leave-from
  opacity: 1
</style>
