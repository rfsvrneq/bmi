import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 註冊外掛
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ScrollSmoother);

export default defineNuxtPlugin(() => {
  if (process.client) {
    // 初始化 ScrollSmoother
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper", // 外層容器
      content: "#smooth-content", // 內容容器
      smooth: 1.5, // 滾動平滑時間
      effects: true, // 開啟 data-speed 視差效果
    });

    // kv 兩個 icon 不停自轉
    gsap.to("#gpani-kv-1", {
      rotation: 360,
      repeat: -1,
      duration: 12,
      ease: "none",
    });

    gsap.to("#gpani-kv-2", {
      rotation: -360,
      repeat: -1,
      duration: 12,
      ease: "none",
    });

    // .ttl 區塊淡入效果
    gsap.utils.toArray(".ttl").forEach((ttl) => {
      gsap.from(ttl, {
        scrollTrigger: {
          trigger: ttl,
          start: "top 80%", // 元素頂部進入視窗 80% 高度時觸發
          toggleActions: "play none none reverse", // 滾回去時反播
        },
        opacity: 0,
        y: 80, // 從下方滑入
        duration: 1.5,
        ease: "power2.out",
      });
    });
    gsap.utils.toArray(".ttl-rounded").forEach((ttl) => {
      gsap.from(ttl, {
        scrollTrigger: {
          trigger: ttl,
          start: "top 80%", // 元素頂部進入視窗 80% 高度時觸發
          toggleActions: "play none none reverse", // 滾回去時反播
        },
        opacity: 0,
        y: 80, // 從下方滑入
        duration: 1.5,
        ease: "power2.out",
      });
    });

    // 蹺蹺板女孩
    gsap.utils.toArray(".ani-1").forEach((wrap) => {
      const imgs = wrap.querySelectorAll("img");
      // 以捲動推進時間軸，回捲會反播
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top 80%", // 區塊頂到視窗 80% 高度才開始
          toggleActions: "play none none reverse", // 滾回去時反播
          scrub: 1.5, // 與捲動綁定
          // markers: true,
        },
      });
      tl.from(imgs, {
        opacity: 0,
        x: 100,
        duration: 0.8, // 每個項目的基礎時長（scrub 會線性推進）
        stagger: 0.15, // 逐一出現
        ease: "power2.out",
        immediateRender: false,
      });
    });

    // BMI 文字
    gsap.fromTo(
      "#bmi-img",
      { xPercent: -350 }, // 起點（左邊）
      {
        xPercent: 450, // 終點（右邊）
        ease: "none",
        scrollTrigger: {
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }
  return {
    provide: {
      gsap, // 讓元件可以用 useNuxtApp().$gsap 呼叫
    },
  };
});
