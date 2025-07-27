<script setup>
import { ref } from 'vue';
import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';

const tabs = ref([
  {
    title: 'EGFR',
    label: 'click-',
  },
  {
    title: 'ALK',
    label: 'click-',
  },
]);

const activeTab = ref(tabs.value[0].title);

const changeTab = (tabName) => {
  activeTab.value = tabName;
}

// 根據 activeTab 顯示對應的子元件
const tabComponents = {
  'EGFR': Tab1,
  'ALK': Tab2,
};

</script>

<template lang="pug">
div
  .tabs-table.flex.justify-center.mx-5
    div.click_event(v-for='(tab, index) in tabs' :key='index' @click='changeTab(tab.title)' :class="{ 'active': activeTab === tab.title }", data-title="pfizermigraine2024", :data-label="tab.label")
      span.font-genjyuu-bold {{ tab.title }}

  .tabs-table-content
    //- activeTab 顯示對應的子元件
    //- component 動態渲染元件的特殊標籤
    component(:is="tabComponents[activeTab]")

</template>

<style lang="sass">

.tabs-table
  border-bottom: 5px solid #8c4d23
  div
    cursor: pointer
    user-select: none
    background-color: #8c4d23
    color: white
    padding: .5rem 1rem
    border-top-right-radius: 1rem
    border-top-left-radius: 1rem
    margin: 0 .25rem
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    font-size: 1.35rem
    font-weight: bold
    @media screen and (max-width: 768px)
      font-size: 1rem
      line-height: 1
      padding: .5rem
      margin: 0 .05rem
    @media screen and (max-width: 480px)
      padding: .5rem .35rem
    &.active
      @apply bg-orange-500
  div:last-child 
    &::after
      content: '血管新生抑制劑'
      display: block
      font-size: 1rem
      line-height: 1
      @media screen and (max-width: 768px)
        font-size: .75rem
.tabs-table-content
  padding: 0rem
  div
    overflow-x: auto
    position: relative
    width: 100%
  table
    border: 1px solid white
    border-radius: 1rem
    overflow: hidden
    width: 100%
    border-collapse: collapse
    @media screen and (max-width: 1024px)
      min-width: 745px
    thead
      background-color: #e5dcd6
    tbody
      background-color: #f4f1ef
    td, th
      padding: .5rem
      border: 1px solid #666666
      font-size: 1rem
    .icon
      position: relative
      &::before
        content: ""
        background: url(/assets/img/tab-table/tabs-table-icon.svg) no-repeat
        width: 25px
        height: 25px
        background-size: cover
        display: block
        position: absolute
        top: 4px
        left: 4px
        @media screen and (max-width: 768px)
          position: relative
          top: 0
          left: 0
</style>
