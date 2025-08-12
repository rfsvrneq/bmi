<script setup>
import rotationgirlSvg from "~/assets/img/rotation-girl.svg?raw"; // 把 SVG 檔案當作字串引入
const { $gsap } = useNuxtApp(); // 呼叫 gsap

// 收合
const toggleClamp = (event) => {
  // 只切換「父層容器」的 active
  event.currentTarget.classList.toggle("active");
};

onMounted(() => {
  // gsap
  $gsap.to("#rotation-icon-1-runner", {
    duration: 5,
    repeat: -1,
    ease: "none",
    opacity: 0,
    motionPath: {
      path: "#rotation-icon-1-curve",
      align: "#rotation-icon-1-curve",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
  });
  $gsap.to("#rotation-icon-2-runner", {
    duration: 5,
    repeat: -1,
    ease: "none",
    opacity: 0,
    motionPath: {
      path: "#rotation-icon-2-curve",
      align: "#rotation-icon-2-curve",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
  });
});
</script>

<template lang="pug">
div#causes.bg-cyan-100(class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-home")

  //- 背景曲線
  .w-full.h-20
    img.fit(src="/assets/img/wave-2.svg")


  .container.pt-0

    //- 肥胖成因
    .ttl
      div
        img(src="/assets/img/ttl-icon.svg")
        h2 你知道嗎？關於肥胖，多的是你不知道的事

    .content-p
      p(class="tracking-[2.8px]") 肥胖的成因普遍被歸納為個人的生活型態與飲食習慣，因此對體重管理的第一印象常是「少吃多動」。
        span.text-red-500 事實上，肥胖是一種複雜的慢性疾病，肥胖成因也因人而異。
    

    //- 展開/收合
    .toggleClamp(@click="toggleClamp")
      .ttl-rounded.drop
        div
          img(src="/assets/img/ttl-rounded-icon.svg")
          h3 研究顯示，腸道荷爾蒙與大腦的溝通失衡，可能會增加你的食慾！
            sup.sup 6
          img.w-10.triangle(src="/assets/img/triangle.svg", alt="triangle")
      .drop-content
        .content-p
          p(class="tracking-[-1px]") 管不住的食慾不是你意志力不足，可能是你的腸道荷爾蒙讓你「很難瘦」。
          p(class="tracking-[-1px]") 舉例來說，我們常聽到的
            span.text-red-500 「腸泌素」
            | 就是其中一種腸道賀爾蒙，它會向大腦傳送「飽」的訊號，大腦就會提醒我們吃飽了。缺少腸泌素，就像手機沒有網路，訊息無法傳遞，大腦會以為還沒吃飽，所以就可能不小心吃太多。
        .content-p.mb-10
          p(class="tracking-[-0.5px]") 其他和調控食慾相關的腸道荷爾蒙包含 Ghrelin（胃促生長激素）、PYY（多肽YY）、CCK（膽囊收縮素）等。除了腸道荷爾蒙外，還有許多荷爾蒙掌握著我們的飢餓與飽足感，包含脂肪細胞分泌的 Leptin（瘦體素）、中樞神經分泌的 NPY（神經肽）。

        .rotation-girl(class="w-9/12 md:w-10/12 mx-auto" v-html="rotationgirlSvg")


    //- 展開/收合
    .toggleClamp(@click="toggleClamp")
      .ttl-rounded.drop
        div
          img(src="/assets/img/ttl-rounded-icon.svg")
          h3 科學證實，持續處於高壓會刺激皮質醇分泌，造成脂肪堆積！
            sup.sup 7
          img.w-10.triangle(src="/assets/img/triangle.svg", alt="triangle")
      .drop-content
        .content-p
          p(class="tracking-[-.5px]") 腎上腺皮質醇（Cortisol，俗稱壓力賀爾蒙），是由腎上腺分泌的激素。當感受到壓力時，大腦會通知腎上腺釋放皮質醇，幫助身體應對挑戰。若長期處於高壓，皮質醇過高，可能透過以下反應造成肥胖：
          .flex.justify-around.my-4.text-red-200(class="flex-col lg:flex-row")
            p 
              span.mr-1 •
              | 促進內臟脂肪堆積
            p
              span.mr-1 •
              | 影響食慾調節相關荷爾蒙，增加食慾、偏好高熱量選擇
              
        .max-w-72.block.mx-auto(class="w-7/12")
          img(src="/assets/img/troubled-girl.svg", alt="troubled-girl")
          


    //- 展開/收合
    .toggleClamp(@click="toggleClamp")
      .ttl-rounded.drop
        div
          img(src="/assets/img/ttl-rounded-icon.svg")
          h3 BMI 大於等於27，可能來自於你的基因。
            sup.sup 8
          img.w-10.triangle(src="/assets/img/triangle.svg", alt="triangle")
      .drop-content
        .content-p
          p(class="tracking-[-.5px]") 基因地位舉足輕重，一個人胖，可能全家都胖！
        .content-p
          p 根據全基因組關聯研究（GWAS），影響肥胖或是BMI的基因座（gene locus）超過900個，這些基因可能影響中樞神經系統、脂肪組織、胰島素訊號等多個路徑。其中有20多個基因突變，和肥胖有高度關聯！除了先天的「原生基因」影響，後天成長的環境因素也舉足輕重。家庭的生活習慣、作息與飲食觀念等，也潛在的影響了一個人的健康狀況。


    .ttl-t
      div
        img.icon-2(src="/assets/img/ttl-t-icon-2.svg")
        p 肥胖症成因複雜，諮詢專業醫師找出健康處方！
        img.icon-1(src="/assets/img/ttl-t-icon-1.svg")


</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *


.fit
  width: 100%
  height: 100%
  object-fit: cover
  object-position: center

.toggleClamp
  .drop-content
    height: 0
    overflow: hidden
    transition: height .3s ease
  .triangle
    transform: rotate(0deg)
    transition: transform .3s ease

.toggleClamp.active
  .drop-content
    height: auto
  .triangle
    transform: rotate(180deg)

.ttl-rounded.drop
  user-select: none
</style>
