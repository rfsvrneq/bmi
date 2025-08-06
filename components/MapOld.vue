<script setup>
import { mayors } from "@/composables/useMayors"; // 引入 mayors 地圖資料
import mayorsSvg from "~/assets/img/mayors.svg?raw"; // 把 SVG 檔案當作字串引入
import Modal from "./Modal.vue"; // 新增 Modal 元件

// 動態圖片載入
const getImageUrl = (name) => {
  const assets = import.meta.glob("~/assets/img/*", {
    eager: true,
    import: "default",
  });
  return assets[`/assets/img/${name}`];
};

// 地圖容器
const mapContainer = ref(null);

// Modal 狀態
const showModal = ref(false);
const modalContent = ref("");

// 開啟 Modal，這裡改成讀取 item.promise
const openModal = (promise) => {
  showModal.value = true;
  modalContent.value = promise;
};

// 關閉 Modal
const closeModal = () => {
  showModal.value = false;
};

// ---------視差滾動效果---------
// scrollTrigger 參數
// trigger：指定觸發的 DOM 元素
// start：何時開始觸發動畫 當元素的位置(top/bottom/center)到達視窗的位置(top/bottom/center)時
// toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
// toggleActions: "play播放 none none reverse 反向播放
// scrub: true        // 動畫會隨著滾動同步（立即跟隨）
// scrub: 2           // 動畫會「平滑延遲 2 秒」跟隨滾動

// GSAP 初始化
const gsap = useGSAP(); // 呼叫一次 gsap 實體
const main = ref(); // GSAP Context 的作用域
let ctx; // 儲存 GSAP Context 回傳的物件

const zoomFactor = 1.018; // 統一放大倍率

// 使用 onMounted 來初始化 GSAP Context
onMounted(() => {
  ctx = gsap.context((self) => {
    // 始隱藏所有 SVG shape + label
    mayors.forEach((item) => {
      const els = self.selector(`#${item.id}_shape, #${item.id}_label`);
      gsap.set(els, { autoAlpha: 0 });
    });

    // 使用 ScrollTrigger 來監控滾動事件
    mayors.forEach((item, idx) => {
      const els = self.selector(`#${item.id}_shape, #${item.id}_label`);
      gsap.to(els, {
        autoAlpha: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: self.selector(".mayors")[idx],
          start: "top 70%",
          end: "center center",
          toggleActions: "play reverse play reverse",
          // markers: true,
          // scrub: true,
          onEnter: () => {
            const svgEl = document.querySelector("#mayors_svg");
            const shapeEl = svgEl.querySelector(`#${item.id}_shape`);
            const bb = shapeEl.getBBox();

            // shape 中心點
            const cx = bb.x + bb.width / 2;
            const cy = bb.y + bb.height / 2;

            // 取原始 viewBox
            const [vx, vy, vw, vh] = svgEl
              .getAttribute("viewBox")
              .split(" ")
              .map(Number);

            // 新的寬高
            const newW = vw / zoomFactor;
            const newH = vh / zoomFactor;

            // 計算以 (cx,cy) 為中心的新視窗左上角
            let newX = cx - newW / 2;
            let newY = cy - newH / 2;

            // —— clamp 到合法範圍，避免跑出外面 ——
            const minX = vx;
            const maxX = vx + vw - newW;
            const minY = vy;
            const maxY = vy + vh - newH;
            newX = Math.max(minX, Math.min(newX, maxX));
            newY = Math.max(minY, Math.min(newY, maxY));

            const vb = [newX, newY, newW, newH].join(" ");
            gsap.to(svgEl, {
              attr: { viewBox: vb },
              duration: 0.8,
              ease: "linear",
            });
          },
          onLeaveBack: () => {
            // 回到全圖
            gsap.to("#mayors_svg", {
              attr: { viewBox: "0 0 2013 1132.31" },
              duration: 0.8,
            });
          },
        },
      });
    });
  }, main.value);
});

// 3.組件卸載時，清除 GSAP Context
onUnmounted(() => {
  ctx.revert(); // 卸載清除動畫
});
</script>

<template lang="pug">


section#pledges(ref="main" class="imp_event" data-title="lunghealth" data-label="imp_section-lunghealth-pledges")
  .container.py-0
    h2.content-ttl.text-left.text-white.absolute.z-10.pt-10 22縣市首長許諾

  .mayors-map(ref="mapContainer" v-html="mayorsSvg")

  .text-gray-600
    div.mayors(v-for="(item, index) in mayors" :key="index" class="imp_event" data-title="lunghealth" :data-label="`imp_section-lunghealth-${item.id}`")
      span.county {{ item.county }}
      p.mayor.mt-4(v-html="item.mayor")
      img.photo.block(:src="getImageUrl(item.photo)" :alt="item.title" class="w-full")
      h2.declaration {{ item.declaration }}
      .content-p.text-right.mt-2
        //- useMayors，點擊帶入 promise
        a.text-green-200.underline(href="#" @click.prevent="openModal(item.promise)", class="hover:text-green-800")
          img(src="/assets/img/icon-1.svg" alt="觀看更多", class="w-[18px] inline mr-2 -mt-1 ")
          | 觀看更多
        
    //- 引入 Modal
    Modal(:show="showModal" :content="modalContent" @close="closeModal")
 
</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'
@import '~/assets/sass/colors.sass'
#pledges
  position: relative
  background: #021615

.mayors-map
  width: 100%
  height: calc(var(--vh, 1vh) * 105)
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 0
  pointer-events: none
  position: sticky
  overflow: hidden
  +m-480
    top: 73px
    height: calc(var(--vh, 1vh) * 100 - 73px)

.mayors
  background-color: rgba(white, 0.85)
  max-width: 380px
  width: 90%
  margin-left: auto
  margin-right: 10%
  padding: 1.5rem
  position: relative
  text-align: center
  margin-top: 50vh
  margin-bottom: 50vh
  z-index: 19
  @for $i from 17 through 19
    &:nth-child(#{$i})
      margin-right: auto
      margin-left: 10%
  +m-1200
    margin-right: 2%
    max-width: 350px
    @for $i from 17 through 19
      &:nth-child(#{$i})
        margin-left: 2%
  +m-1024
    max-width: 300px
  +m-768
    margin-left: auto
    margin-right: auto
    margin-top: 50vh
    margin-bottom: 50vh
    @for $i from 17 through 19
      &:nth-child(#{$i})
        margin-left: auto
  .photo
    filter: saturate(0.75)
  .county
    background-color: $green-200
    color: white
    font-size: 1.35rem
    letter-spacing: .5rem
    padding-left: 1rem
    padding-right: .5rem
    position: absolute
    left: 0
    top: 0
  .mayor
    font-size: 2rem
    font-weight: bold
  .declaration
    font-size: 1.35rem
    color: $gray-800
    padding-top: .5rem
    text-align: left
</style>
