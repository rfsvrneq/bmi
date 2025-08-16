<script setup>
// 點擊滾動
const HEADER_OFFSET = 32;
function moveTo(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
}

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
const resultBmi = ref(null); // 「立即計算」後才有數值，否則為 null

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
  const v = resultBmi.value;
  if (v == null)
    return {
      idx: 0,
      badge: "",
      scope: "",
      unit: "",
      weightUrl: "",
      expertUrl: "",
    };

  if (v < 18.5)
    return {
      idx: 1,
      badge: "體重過輕!",
      scope: "BMI ＜ 18.5 kg/m²",
      unit: "需要多運動，均衡飲食，以增加體能，維持健康！",
      weightUrl: "", // 體重管理
      expertUrl: "#experts", // 諮詢專家
      labelWeight: "",
      labelExpert: "click-LiliBMI-btn-calculator-expert1",
    };
  if (v < 24)
    return {
      idx: 2,
      badge: "健康體重!",
      scope: "18.5 ≦ BMI ＜ 24 kg/m²",
      unit: "恭喜！「健康體重」，要繼續保持！",
      weightUrl: "", // 體重管理
      expertUrl: "#experts", // 諮詢專家
      labelWeight: "",
      labelExpert: "click-LiliBMI-btn-calculator-expert1",
    };
  if (v < 27)
    return {
      idx: 3,
      badge: "體重過重!",
      scope: "24 kg/m² ≦ BMI ＜ 27 kg/m²",
      unit: "哦！要小心囉，趕快力行「健康體重管理」！",
      weightUrl: "#mgmt-1", // 體重管理
      expertUrl: "#experts", // 諮詢專家
      labelWeight: "click-LiliBMI-btn-calculator-weightcontrol1",
      labelExpert: "click-LiliBMI-btn-calculator-expert1",
    };
  return {
    idx: 4,
    badge: "肥胖!",
    scope: "BMI ≧ 27 kg/m²",
    unit: "啊～「肥胖」，需要立刻力行「健康體重管理」囉！",
    weightUrl: "#mgmt-1", // 體重管理
    expertUrl: "#experts", // 諮詢專家
    labelWeight: "click-LiliBMI-btn-calculator-weightcontrol2",
    labelExpert: "click-LiliBMI-btn-calculator-expert2",
  };
});

// 立即計算
function calc() {
  touched.value = true;
  if (!valid.value) return;
  const hM = Number(height.value) / 100;
  const v = Number(weight.value) / (hM * hM);
  resultBmi.value = Number(v.toFixed(1)); // 只在此處寫入
  showResult.value = true;
}

// 全部清除
function clearFields() {
  height.value = "";
  weight.value = "";
}

// 再算一次
function recalc() {
  height.value = "";
  weight.value = "";
  touched.value = false;
  showResult.value = false;
  resultBmi.value = null;
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
div#defn.bg-amber-100(class="imp_event" data-title="2025obesity" data-label="imp_section-2025obesity-definition")

  //- 背景曲線
  .w-full.h-20
    img.fit(src="/assets/img/wave.svg")
  .max-w-6xl.mx-auto.relative

    //- 插圖
    img.w-16.absolute(src="/assets/img/dna-2.svg" data-speed=".65" class="top-[12%] left-[0%] lg:-left-[5%]")
    img.w-16.absolute(src="/assets/img/dna-1.svg" data-speed=".55" class="top-[20%] right-[2%] lg:-right-[5%]")

    .px-5
      //- 肥胖定義
      .ttl.gs-fade
        div
          img(src="/assets/img/ttl-icon.svg")
          h2 該怎麼衡量一個人是否肥胖？只測量體重足夠嗎？
      
      .content-p.text-center
        p(class="tracking-[2px] inline lg:block") BMI 和腰圍是最常見的工具，若需更精確評估，可再進一步
        p(class="tracking-[2px] inline lg:block") 參考脂肪率、腰臀比，掌握全方位健康指標。

      .flex.justify-center.items-center.mt-10(class="space-x-0 lg:space-x-10 flex-col md:flex-row mb-8 md:mb-0")
        .flex.gs-fade(class="space-y-3 lg:space-y-8 space-x-4 md:space-x-0 order-2 md:order-none flex-row md:flex-col items-end")
          img(src="/assets/img/libra-icon-1.svg" class="w-[70px] xs:w-[75px] sm:w-[100px] -mb-1 sm:mb-0")
          img(src="/assets/img/libra-icon-2.svg" class="w-[90px] xs:w-[100px] sm:w-[130px]")
        .libra-girl(class="w-9/12 md:w-[460px] order-1 mb-4 md:mb-0")
          img(src="/assets/img/libra-girl.svg")
        .flex.gs-fade(class="space-y-3 lg:space-y-8 space-x-4 md:space-x-0 order-3 flex-row md:flex-col items-center md:items-center")
          img(src="/assets/img/libra-icon-3.svg" class="w-[110px] xs:w-[115px] sm:w-[155px] -mb-2 sm:mb-0")
          img(src="/assets/img/libra-icon-4.svg" class="w-[90px] xs:w-[105px] sm:w-[135px]")
          img(src="/assets/img/libra-icon-5.svg" class="w-[100px] xs:w-[105px] sm:w-[140px]")
        
      .ttl-t.-mt-4.mb-14.gs-fade
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
          Transition(name="doll" appear mode="out-in")
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
                  button.btn.blue(type="submit" class="click_event" data-title="2025obesity" data-label="click-LiliBMI-btn-calculator") 立即計算
                  button.btn.red(type="button" @click="clearFields") 全部清除
              
          //- 結果頁
          //- .result-1 .result-2.result-3 .result-4
          Transition(name="fade-slide")
            .bmi-result(:key="category.idx" :class="`result-${category.idx}`" v-if="showResult")

              .badge 
                p {{ category.badge }}
              .bmi
                .value BMI = {{ resultBmi }}
                .scope
                  img.scope-icon(:src="getImageUrl(`result-${category.idx || 1}-icon.svg`)", alt="result-icon")
                  .scope-txt {{ category.scope }}
                .unit {{ category.unit }}
              .tip 資料來源：國健署
              img.result-pic(:src="getImageUrl(`result-${category.idx || 1}-pic.svg`)", alt="result-pic")
              .actions
                button.btn.recalc(type="button" @click="recalc") 再算一次
                button.btn.weight(
                  type="button"
                  v-if="category.weightUrl"
                  @click="moveTo(category.weightUrl)"
                  :data-label="category.labelWeight"
                  class="click_event" data-title="2025obesity"
                ) 體重管理

                button.btn.expert(
                  type="button"
                  @click="moveTo(category.expertUrl)"
                  :data-label="category.labelExpert"
                  class="click_event" data-title="2025obesity"
                ) 諮詢專家


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

    .flex.justify-center.items-center.mt-14.mb-8.px-5.gs-fade(class="flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0")
      img.w-20(src="/assets/img/apple.svg")
      p.font-bold.text-red-200(class="text-2xl md:text-3xl") BMI ≥ 27 應盡速諮詢專業醫師！
      a.bg-red-200.text-white.rounded-full.py-3.px-6(
        href="javascript:void(0)"
        @click="moveTo('#experts')"
        class="hover:bg-red-500 text-xl md:text-2xl click_event"
        data-title="2025obesity"
        data-label="click-LiliBMI-btn-calculator-expert3"
      ) 諮詢專家 ▶

    .content-p.text-center.mb-8.px-5
      p(class="tracking-[2px] inline lg:block") 依據衛生福利部公布之體位定義，18 歲以上成人區分為四種體位
        sup 4
        | ：

    .relative
      img.gs-fade(src="/assets/img/scale-2.svg" class="w-11/12 sm:w-10/12 md:w-7/12 mx-auto z-10 relative")
      img#bmi-img(src="/assets/img/bmi-img.svg" data-speed="0.62" data-lag="0.2")

    .content-p.mt-8.px-5(class="text-justify sm:text-center")
      p(class="tracking-[2px] inline lg:block") BMI 的好處是容易取得，缺點是無法了解身體組成；
      p(class="tracking-[2px] inline lg:block") BMI 相同的兩個人，肌肉量與體脂肪比例若有差異，
      p(class="tracking-[2px] inline lg:block") 健康狀況跟慢性病風險則完全不同。


</template>

<style scoped lang="sass">
@use '@/assets/sass/media' as *
@use '@/assets/sass/colors' as *
@use 'sass:color'


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
    +m-768
      display: none
  .bmi-result
    +m-768
      margin-left: 0
      margin-right: auto
      max-width: 95%

// 插圖
.bmi-form-img
  img
    width: 220px
    position: absolute
    z-index: 0
    bottom: 15%
    +m-1024
      width: 170px
    +m-768
      width: 80px
      bottom: 0
      z-index: 2
  img:nth-child(1)
    left: 10%
    animation: wobble-hor-bottom 8s both infinite -.5s
    +m-768
      left: 0%
  img:nth-child(2)
    animation: wobble-hor-bottom 8s both infinite -2s
    right: 8%
    +m-768
      right: 0%

@keyframes wobble-hor-bottom
  0%, 100%
    transform: translateX(0) rotate(0deg) translateY(0)
    transform-origin: 50% 50%
  15%
    transform: translateX(-10px) rotate(-3deg) translateY(1px)
  30%
    transform: translateX(8px) rotate(3deg) translateY(0)
  45%
    transform: translateX(-6px) rotate(-2deg) translateY(-1px)
  60%
    transform: translateX(4px) rotate(1.2deg) translateY(0.5px)
  75%
    transform: translateX(-3px) rotate(-1deg) translateY(0)

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
  +m-375
    padding: 1.5rem
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
        +m-480
          font-size: 1.25rem
        +m-380
          font-size: 1.15rem
    .unit
      font-size: 1.1rem
  .tip
    padding-left: 1rem
    padding-top: .5rem
    font-size: .75rem
  .result-pic
    width: 90%

// result-1
.bmi-result.result-1
  .badge
    color: #29a5bb
  .bmi
    background-color: #76c6ce
  .actions
    .btn.recalc
      background-color: #76c6ce
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#76c6ce, $lightness: -10%)
    .btn.weight
      background-color: #29a5bb
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#29a5bb, $lightness: -10%)
    .btn.expert
      background-color: #c6ba8b
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#c6ba8b, $lightness: -10%)

// result-2
.bmi-result.result-2
  .badge
    color: #8db228
  .bmi
    background-color: #b5c96b
  .actions
    .btn.recalc
      background-color: #b5c96b
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#b5c96b, $lightness: -10%)
    .btn.weight
      background-color: #8db228
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#8db228, $lightness: -10%)
    .btn.expert
      background-color: #c6ba8b
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#c6ba8b, $lightness: -10%)

// result-3
.bmi-result.result-3
  .badge
    color: #f38b2f
  .bmi
    background-color: #fca768
  .actions
    .btn.recalc
      background-color: #fca768
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#fca768, $lightness: -10%)
    .btn.weight
      background-color: #f38b2f
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#f38b2f, $lightness: -10%)
    .btn.expert
      background-color: #c6ba8b
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#c6ba8b, $lightness: -10%)

// result-4
.bmi-result.result-4
  .badge
    color: #e2342b
  .bmi
    background-color: #f47171
  .actions
    .btn.recalc
      background-color: #f47171
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#f47171, $lightness: -10%)
    .btn.weight
      background-color: #e2342b
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#e2342b, $lightness: -10%)
    .btn.expert
      background-color: #c6ba8b
      transition: all .3s ease
      &:hover
        background-color: color.adjust(#c6ba8b, $lightness: -10%)
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
      // background-color: darken($blue-400, 10%)
      background-color: color.adjust($blue-400, $lightness: -10%)
  &.red
    background-color: $red-400
    transition: all .3s ease
    &:hover
      // background-color: darken($red-400, 10%)
      background-color: color.adjust($red-400, $lightness: -10%)
  &.cyan
    background-color: $cyan-300
    transition: all .3s ease
    &:hover
      // background-color: darken($cyan-300, 10%)
      background-color: color.adjust($cyan-300, $lightness: -10%)

  &.amber
    background-color: $amber-950
    transition: all .3s ease
    &:hover
      // background-color: darken($amber-950, 10%)
      background-color: color.adjust($amber-950, $lightness: -10%)

// 計算機插圖
#bmi-img
  position: absolute
  max-width: 360px
  left: -5%
  top: 0
  z-index: 0
  +m-480
    width: 140px
    left: 0%
    top: -15%


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
// 進場
.doll-enter-from
  opacity: 0
  transform: translate3d(0, 20px, 0) scale(.975)

.doll-enter-active
  transition: opacity $dur-enter ease-in, transform $dur-enter $ease

.doll-enter-to
  opacity: 1
  transform: translate3d(0, 0, 0) scale(1)

// 退場
.doll-leave-from
  opacity: 1
  transform: translate3d(0, 0, 0) scale(1)

.doll-leave-active
  transition: opacity $dur-leave ease-out, transform $dur-leave $ease

.doll-leave-to
  opacity: 0
  transform: translate3d(0, 20px, 0) scale(.975)
</style>
