<script setup>
const nav = [
  {
    title: "首頁",
    active: false,
    type: "#kv",
    label: "menu_首頁",
  },
  {
    title: "前言倡議",
    active: false,
    type: "#intro",
    label: "menu_前言倡議",
  },
  {
    title: "22縣市首長許諾",
    active: false,
    type: "#pledges",
    label: "menu_22縣市首長許諾",
  },
  {
    title: "ESG for Health",
    active: false,
    type: "#esg",
    label: "menu_ESGforHealth",
  },
  {
    title: "肺健康實踐",
    active: false,
    type: "#lund",
    label: "menu_肺健康實踐",
  },
];

let burgerTrigger = ref(false);
let isActive = ref("");

const scrollActive = ref(false); // 監聽滾動的狀態

// 處理滾動事件
const handleScroll = () => {
  scrollActive.value = window.scrollY > 200;
};

// 綁定與移除監聽
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // 初始化一次，避免直接載入就已捲動過200
  handleScroll();
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// 點擊導覽列移動
const moveTo = (ta) => {
  const offset = 0;
  const target = document.querySelector(ta);
  if (target) {
    const targetOffset = target.offsetTop - 30 - offset;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
    burgerTrigger.value = false;
    isActive.value = ta;
  }
};
</script>

<template lang="pug">
//- top
a#top(@click.prevent="moveTo('#kv')") 
  img(src="/assets/img/top.svg", alt="TOP")


div#topbar(:class="['w-full fixed top-0 left-0', { scrolled: scrollActive }]")
  
  nav.flex.justify-between.items-center.h-full.container.py-0.px-4
    
    .flex.space-x-2.items-center.mr-6
      //- logo
      a.block(href="https://www.commonhealth.com.tw/", target="_blank") 
        img.w-20(src="/assets/img/logo.svg", alt="康健雜誌")
      img(src="/assets/img/x.svg", alt="x", class="w-6 xs:w-8")
      a.block(href="https://www.boehringer-ingelheim.com/tw", target="_blank") 
        img.w-32(src="/assets/img/logo2.svg", alt="百靈佳殷格翰")

    //- 漢堡
    a.burger-trigger(href="#", :class="{ 'active': burgerTrigger == true }", @click.prevent="burgerTrigger = !burgerTrigger")
      span.first
      span.middle
      span.last
    
    //-導覽列
    .nav-wrap(:class="{ 'active': burgerTrigger == true }")
      //-選單
      .nav
        .item
          a.click_event.font-serif(
            data-title="lungcancercare"
            v-for="(nav, index) in nav"
            :href="nav.type"
            :class="{ 'active': isActive === nav.type, 'first-border': index === 0 }"
            @click.prevent="moveTo(nav.type)"
            :data-label="nav.label"
            v-html="nav.title"
          )
          
</template>

<style scoped lang="sass">

$nav-item-a: #ffffff !default
$nav-item-a-hover: #fef9cb !default
$nav-wrap-bg: #444138 !default
$burger: white !default
$nav-wrap-bg-mobile: #2c5e59 !default
$nav-item-a-mobile: white !default
$nav-item-a-hover-mobile: white !default


#topbar
  padding-top: 0.5rem
  padding-bottom: 0.5rem
  height: auto
  z-index: 20

  &.scrolled
    background-color: rgba(#3d4b4b, 0.5)
    backdrop-filter: blur(10px)
    transition: background-color .3s ease, padding .3s ease
  .item
    a
      color: $nav-item-a
      font-weight: 600
      font-size: 1.15rem
      margin-left: 1.5rem
      &:hover
        color: $nav-item-a-hover
        span
          color: $nav-item-a-hover


  //-行動裝置漢堡與導覽列
  @media screen and (max-width: 1024px)
    padding-right: 15px

    //漢堡
    .burger-trigger
      z-index: 999
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: wrap
      width: 40px
      height: 40px
      outline: 0
      &, & span
        transition: .2s
        backface-visibility: hidden
        transform-style: preserve-3d
      span
        position: relative
        display: block
        width: 100%
        height: 2px
        background: $burger

      //open
      &.active
        .first, .last
          background: $burger
        .middle
          opacity: 0 !important
        .first
          top: 13px
          transform: rotate(45deg)
        .last
          bottom: 13px
          transform: rotate(135deg)

    //-導覽列
    .nav-wrap
      z-index: 99
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      overflow: hidden
      opacity: 0
      transform-origin: right top
      transform: translateY(-100%)
      transition: transform .4s ease, opacity .4s ease
      background-color: $nav-wrap-bg-mobile
      min-height: 100vh

      // open
      &.active
        opacity: 1
        transform: translateY(0)

      //-選單
      .nav
        z-index: 99
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
      .item
        width: 100%
        a
          display: block
          text-align: center
          width: 100%
          font-size: 1.35rem
          margin-bottom: 1rem
          margin-left: 0
          padding-top: .5rem
          padding-bottom: .5rem
          transition: color .3s ease
          color: $nav-item-a-mobile
          &:hover
            background: $nav-item-a-hover-mobile
            color: $nav-wrap-bg-mobile
            transition: color .3s ease

  //-mobile
  @media screen and (max-width: 540px)
    //漢堡
    .burger-trigger
      width: 30px
      height: 30px
      //open
      &.active
        .first
          top: 10px
        .last
          bottom: 10px

#top
  position: fixed
  bottom: 10%
  right: 1rem
  width: 45px
  height: 45px
  z-index: 20
  display: flex
  justify-content: center
  align-items: center
  background-color: #5faf74
  border-radius: 50%
  cursor: pointer
  img
    width: 50%
  &:hover, &:focus
    background-color: #4a8f5f
    transition: background-color .3s ease
</style>
