// plugins/gsap.client.js
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 1. 先註冊所有外掛
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ScrollSmoother);

export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) return;

  let smoother; // 後面賦值

  // 2. 每次 page 完成渲染後才初始化
  nuxtApp.hook("page:finish", () => {
    // 確保容器存在
    if (!document.querySelector("#smooth-wrapper")) return;

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    // .ttl 與 .ttl-rounded 淡入效果
    document.querySelectorAll(".gs-fade").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 80,
        duration: 1.5,
        ease: "power2.out",
      });
    });
  });

  // 3. 在下一次 page 開始前，先釋放上次的動畫資源
  nuxtApp.hook("page:start", () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    smoother?.kill();
    gsap.globalTimeline.clear();
  });

  // 4. 提供 $gsap 讓組件內可用 useNuxtApp().$gsap
  return {
    provide: {
      gsap,
    },
  };
});
