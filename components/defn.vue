<script setup>
// 動態圖片載入
const getImageUrl = (name) => {
  const assets = import.meta.glob("~/assets/img/*", {
    eager: true,
    import: "default",
  });
  return assets[`/assets/img/${name}`];
};

// BMI 計算機 ----------------
const height = ref(""); // 身高 cm
const weight = ref(""); // 體重 kg
const touched = ref(false); // 是否觸發驗證
const showResult = ref(false); // 畫面切換

// 驗證
const valid = computed(() => {
  const h = Number(height.value);
  const w = Number(weight.value);
  // 範圍限制：身高 30~300 cm、體重 1~250 kg
  return (
    Number.isFinite(h) &&
    Number.isFinite(w) &&
    h > 30 &&
    h <= 300 && // 限制身高範圍
    w > 0 &&
    w <= 250 // 限制體重範圍
  );
});

// 計算 BMI
const bmi = computed(() => {
  if (!valid.value) return 0;
  const hM = Number(height.value) / 100;
  const v = Number(weight.value) / (hM * hM);
  return Number(v.toFixed(1));
});

// 結果文字
const category = computed(() => {
  if (!valid.value) return { idx: 0, badge: "", scope: "", unit: "" };
  const v = bmi.value;
  if (v < 18.5)
    return {
      idx: 1,
      badge: "體重過輕!",
      scope: "BMI ＜ 18.5 kg/m²",
      unit: "需要多運動，均衡飲食，以增加體能，維持健康！",
      weightUrl: "", // 體重管理
      expertUrl: "#", // 諮詢專家
    };
  if (v < 24)
    return {
      idx: 2,
      badge: "健康體重!",
      scope: "18.5 ≦ BMI ＜ 24 kg/m²",
      unit: "恭喜！「健康體重」，要繼續保持！",
      weightUrl: "", // 體重管理
      expertUrl: "#", // 諮詢專家
    };
  if (v < 27)
    return {
      idx: 3,
      badge: "體重過重!",
      scope: "24 kg/m² ≦ BMI ＜ 27 kg/m²",
      unit: "哦！要小心囉，趕快力行「健康體重管理」！",
      weightUrl: "#", // 體重管理
      expertUrl: "#", // 諮詢專家
    };
  return {
    idx: 4,
    badge: "肥胖!",
    scope: "BMI ≧ 27 kg/m²",
    unit: "啊～「肥胖」，需要立刻力行「健康體重管理」囉！",
    weightUrl: "#", // 體重管理
    expertUrl: "#", // 諮詢專家
  };
});

// 立即計算
function calc() {
  touched.value = true;
  if (!valid.value) return;
  showResult.value = true;
}

// 再算一次
function recalc() {
  height.value = "";
  weight.value = "";
  touched.value = false;
  showResult.value = false;
}

onMounted(() => {
  // 分頁 ----------------
  const tabs = document.getElementById("tabs"); // 取得外層的分頁容器
  const panels = document.querySelectorAll(".panel"); // 抓到所有內容區塊
  const buttons = tabs.querySelectorAll("button[data-target]");

  // 分頁切換
  tabs.addEventListener("click", (e) => {
    // 從實際被點到的元素往上找，找到帶 data-target 的按鈕；若點到空白處就 return
    const btn = e.target.closest("button[data-target]");
    if (!btn) return;
    const id = btn.dataset.target;

    // 面板切換
    panels.forEach((p) => p.classList.toggle("is-active", p.id === id));

    // 按鈕切換
    buttons.forEach((b) => {
      b.classList.toggle("is-active", b === btn);
    });
  });
});
</script>

<template lang="pug">
div#defn.bg-amber-100.overflow-hidden(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-home")

  
  //- 背景曲線
  .w-full.h-20
    img.fit(src="/assets/img/wave.svg")
  .max-w-6xl.mx-auto

    .px-5
      //- 肥胖定義
      .ttl
        div
          img(src="/assets/img/ttl-icon.svg")
          h2 該怎麼衡量一個人是否肥胖？只測量體重足夠嗎？
      
      .content-p.text-center
        p(class="tracking-[2px] inline lg:block") BMI 和腰圍是最常見的工具，若需更精確評估，可再進一步
        p(class="tracking-[2px] inline lg:block") 參考脂肪率、腰臀比，掌握全方位健康指標。

      .flex.justify-center.items-center.mt-10(class="space-x-4 lg:space-x-10")
        .flex.flex-col.items-end(class="space-y-3 lg:space-y-8")
          img(src="/assets/img/libra-icon-1.svg" class="w-[100px]")
          img(src="/assets/img/libra-icon-2.svg" class="w-[130px]")
        .libra-girl(class="w-9/12 md:w-[460px]")
          img(src="/assets/img/libra-girl.svg")
        .flex.flex-col.items-center(class="space-y-3 lg:space-y-8")
          img(src="/assets/img/libra-icon-3.svg" class="w-[155px]")
          img(src="/assets/img/libra-icon-4.svg" class="w-[135px]")
          img(src="/assets/img/libra-icon-5.svg" class="w-[140px]")
        
      .ttl-t.-mt-4.mb-14
        div
          img.icon-2(src="/assets/img/ttl-t-icon-2.svg")
          p 建議您，若有過重或肥胖之疑慮，請主動諮詢專業醫師。
          img.icon-1(src="/assets/img/ttl-t-icon-1.svg")

    //- 分頁
    nav#tabs(role='tablist')
      button.is-active(data-target="bmi") BMI
      button(data-target="waist") 腰 圍

    //- 分頁 BMI 內容
    section.panel.is-active#bmi
      .ttl-rounded.px-5
        div
          img(src="/assets/img/ttl-rounded-icon.svg")
          h3 BMI：你有多久沒留意過自己的 BMI 指數呢？
      .max-w-xl.mx-auto.w-full.mb-10.px-5
        img(src="/assets/img/bmi.svg")

      //- BMI 計算機 --------------------------------
      .max-w-5xl.mx-auto

        //- 狀態 class 供手機結果頁套用
        .bmi-wrap(:class="{ 'is-result': showResult }")

          //- 插圖娃娃 --> 計算結果頁時隱藏
          Transition(name="doll" appear)
            .bmi-form-img(v-if="!showResult")
              img(src="/assets/img/bmi-form-img-1.svg")
              img(src="/assets/img/bmi-form-img-2.svg")

          //- 計算機
          .bmi-form
            .from
              img.w-24.mx-auto(src="/assets/img/scale-1.svg")
              h2.text-white.font-semibold.text-center.my-5(class="text-2xl md:text-3xl") 身體質量指數 (BMI) 
                span(class="block md:inline") 計算器
              //- 表單
              form(@submit.prevent="calc" novalidate)
                label.label 身高（公分）
                input.input(type="number" inputmode="decimal" placeholder="請輸入身高" v-model="height")
                label.label 體重（公斤）
                input.input(type="number" inputmode="decimal" placeholder="請輸入體重" v-model="weight")
                //- 防錯
                p.err(v-if="touched && !valid" role="alert") ※ 請輸入正確的身高和體重！
                //- 按鈕
                .actions
                  button.btn.blue(type="submit") 立即計算
                  button.btn.red(type="button" @click="recalc") 全部清除
              
          //- 結果頁
          //- .result-1 .result-2.result-3 .result-4
          Transition(name="fade-slide")
            .bmi-result(:key="category.idx" :class="`result-${category.idx}`" v-if="showResult")

              .badge 
                p {{ category.badge }}
              .bmi
                .value BMI = {{ bmi }}
                .scope
                  img.scope-icon(:src="getImageUrl(`result-${category.idx || 1}-icon.svg`)", alt="result-icon")
                  .scope-txt {{ category.scope }}
                .unit {{ category.unit }}
              .tip 資料來源：國健署
              img.result-pic(:src="getImageUrl(`result-${category.idx || 1}-pic.svg`)", alt="result-pic")
              .actions
                button.btn.recalc(type="button" @click="recalc") 再算一次
                a.btn.weight(:href="category.weightUrl" v-if="category.weightUrl" target="_blank") 體重管理
                a.btn.expert(:href="category.expertUrl" target="_blank") 諮詢專家


    //- 分頁 腰圍 內容
    section.panel.px-5#waist
      .ttl-rounded.mt-0
        div
          img(src="/assets/img/ttl-rounded-icon.svg")
          h3 你有多久沒量腰圍了呢？
      
      .flex.justify-center
        img.w-20(src="/assets/img/waist-icon-1.svg")
        .text-xl.pl-4
          p 腰圍測量可以初步檢視是否肥胖或內臟脂肪堆積。
          p 只需要準備一個皮尺，建議測量方式如下：
            sup 5
      ul.mt-8.text-xl.font-semibold.list-inside.list-decimal(class="ml-0 lg:ml-36")
        li 早上空腹，脫去腰部覆蓋衣物。
        li 輕鬆站立，雙手自然下垂。
        li 將皮尺繞過腰部，調整高度使皮尺通過腹部中線（骨盆上緣至肋骨下緣的中線）。
        li 保持自然呼吸，不要憋氣，記錄數值。
      
      img(src="/assets/img/waist-icon-2.svg" class="max-w-2xl mx-auto my-4")

      p.content-p.bg-amber-300.text-white.font-light.py-6.px-14.rounded-2xl.mx-auto.my-10.space-y-2.relative.tracking-widest(class="pl-6 sm:px-14 w-11/12 sm:w-10/12")
        span 根據國健署公布的腰圍標準，男性腰圍小於90公分；
        span(class="inline lg:block") 女性腰圍小於80公分，可遠離三高與代謝症候群的風險。
        img.w-28.absolute(class="-top-14 sm:-top-16 -right-12 sm:-right-10" src="/assets/img/intro-icon-1.svg")

    .flex.justify-center.items-center.mt-14.mb-8.px-5(class="flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0")
      img.w-20(src="/assets/img/apple.svg")
      p.text-3xl.font-bold.text-red-200 BMI ≥ 27 應盡速諮詢專業醫師！
      a.bg-red-200.text-white.rounded-full.py-3.px-6.text-2xl(href="#", class="hover:bg-red-500") 諮詢專家 ▶

    .content-p.text-center.mb-8.px-5
      p(class="tracking-[2px] inline lg:block") 依據衛生福利部公布之體位定義，18 歲以上成人區分為四種體位
        sup 4
        | ：

    img(src="/assets/img/scale-2.svg" class="w-11/12 sm:w-10/12 md:w-7/12 mx-auto")

    .content-p.text-center.mt-8.px-5
      p(class="tracking-[2px] inline lg:block") BMI 的好處是容易取得，缺點是無法了解身體組成；
      p(class="tracking-[2px] inline lg:block") BMI 相同的兩個人，肌肉量與體脂肪比例若有差異，
      p(class="tracking-[2px] inline lg:block") 健康狀況跟慢性病風險則完全不同。


</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'
@import '~/assets/sass/colors.sass'

// 計算機
.bmi-wrap
  display: flex
  flex-wrap: nowrap
  justify-content: center
  width: 100%
  position: relative
  overflow: hidden


// 結果頁
.bmi-wrap.is-result
  .bmi-form
    margin-left: 0
    // max-width: 360px
    +m-768
      margin-left: -50vw
    +m-640
      margin-left: -55vw
    +m-480
      margin-left: -72vw


// 插圖
.bmi-form-img
  img
    width: 170px
    position: absolute
    z-index: 0
    bottom: 15%
    +m-768
      width: 80px
      bottom: 0
      z-index: 2
  img:nth-child(1)
    left: 10%
    +m-768
      left: 0%
  img:nth-child(2)
    right: 8%
    +m-768
      right: 0%

// 表單
.bmi-form
  z-index: 1
  background-color: $amber-950
  max-width: 440px
  width: 80vw
  padding: 2rem
  border-radius: 2rem
  display: flex
  justify-content: center
  align-items: center
  .label
    display: block
    font-size: .75rem
    color: white
    margin-top: 1rem
    margin-bottom: .25rem
  .input
    width: 100%
    padding: .5rem 1rem
    border-radius: .5rem
    color: $amber-300
    font-size: 1.25rem
    &::placeholder
      color: $amber-300
    &:focus-visible
      outline: 2px solid $red-200

// 計算機結果
.bmi-result
  flex-grow: 1
  .badge
    text-align: center
    p
      font-size: 2rem
      font-weight: bold
      background-color: white
      display: inline-block
      padding: .75rem 2.5rem
      border-radius: 5rem
      position: relative
      margin-bottom: 1.25rem
      &::after
        content: '▼'
        position: absolute
        color: white
        bottom: -1.5rem
        left: 50%
        transform: translateX(-50%)
  .bmi
    text-align: center
    color: white
    padding: 1rem
    border-top-right-radius: 5rem
    border-bottom-right-radius: 5rem
    .value
      font-weight: 600
      font-size: 1rem
    .scope
      display: flex
      justify-content: center
      margin-bottom: .2rem
      .scope-icon
        width: 35px
        margin-right: .5rem
      .scope-txt
        font-weight: bold
        font-size: 1.35rem
    .unit
      font-size: 1.1rem
  .tip
    padding-left: 1rem
    padding-top: .5rem
    font-size: .75rem
  .result-pic
    width: 90%


// 先定義四組顏色
// 每組顏色用 list 包成一個值
$results: (1: (#29a5bb #76c6ce #c6ba8b), 2: (#8db228 #b5c96b #c6ba8b), 3: (#f38b2f #fca768 #c6ba8b), 4: (#e2342b #f47171 #c6ba8b))

@each $i, $colors in $results
  .bmi-result.result-#{$i}
    .badge
      color: nth($colors, 1)
    .bmi
      background-color: nth($colors, 2)
    .actions
      .btn.recalc
        background-color: nth($colors, 2)
        transition: all .3s ease
        &:hover
          background-color: darken(nth($colors, 2), 10%)
      .btn.weight
        background-color: nth($colors, 1)
        transition: all .3s ease
        &:hover
          background-color: darken(nth($colors, 1), 10%)
      .btn.expert
        background-color: nth($colors, 3)
        transition: all .3s ease
        &:hover
          background-color: darken(nth($colors, 3), 10%)
.err
  color: white
  margin-top: 1rem

// 計算機按鈕組
.actions
  display: flex
  justify-content: center
  margin: 1.5rem 0
.btn
  color: white
  font-size: 1.2rem
  padding: .5rem 1.5rem
  border-radius: 4rem
  margin-left: .5rem
  margin-right: .5rem
  +m-480
    padding: .5rem 1rem
    margin-left: .25rem
    margin-right: .25rem
  &.blue
    background-color: $blue-400
    transition: all .3s ease
    &:hover
      background-color: darken($blue-400, 10%)
  &.red
    background-color: $red-400
    transition: all .3s ease
    &:hover
      background-color: darken($red-400, 10%)
  &.cyan
    background-color: $cyan-300
    transition: all .3s ease
    &:hover
      background-color: darken($cyan-300, 10%)
  &.amber
    background-color: $amber-950
    transition: all .3s ease
    &:hover
      background-color: darken($amber-950, 10%)



// 背景曲線
.fit
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center


// 分頁按鈕
#tabs
  position: relative
  text-align: center
  &::after
    position: absolute
    content: ''
    width: 100%
    height: 2px
    background-color: $blue-400
    left: 0
    top: 1.25rem
  button
    z-index: 1
    position: relative
    display: inline-block
    background-color: white
    color: $blue-400
    font-weight: 600
    font-size: 1.25rem
    padding: .25rem 1.25rem
    margin: 0 .5rem
    border-radius: 2rem
    border: 3px solid $blue-400
    &.is-active
      background-color: $blue-400
      color: white
// 分頁
.panels
  position: relative
.panel
  opacity: 0
  visibility: hidden
  pointer-events: none
  transition: opacity .25s ease, visibility .25s ease
  height: 0
/* 顯示時淡入 */
.panel.is-active
  opacity: 1
  visibility: visible
  pointer-events: auto
  height: auto


// slide 轉場動畫
$dur-enter: .6s   // 進場時間
$dur-leave: 0s  // 退場時間接近 0
$ease: cubic-bezier(.22, .61, .36, 1)
$dist: 100px

.fade-slide-enter-active
  transition: opacity $dur-enter $ease, transform $dur-enter $ease
  will-change: opacity, transform

.fade-slide-leave-active
  transition: opacity $dur-leave linear, transform $dur-leave linear
  will-change: opacity, transform

.fade-slide-enter-from,
.fade-slide-leave-to
  opacity: 0
  transform: translate3d(-$dist, 0, 0)


// doll 轉場動畫
$dur: .8s
$ease: cubic-bezier(.22, .61, .36, 1)

.doll-enter-active,
.doll-leave-active
  transition: opacity $dur ease-in, transform $dur $ease
  will-change: opacity, transform

.doll-enter-from,
.doll-leave-to
  opacity: 0
  transform: translate3d(0, 20px, 0) scale(.975)
</style>
