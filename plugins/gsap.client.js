// plugins/gsap.client.js
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 1. 註冊所有外掛
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ScrollSmoother);

export default defineNuxtPlugin((nuxtApp) => {
  // 只在 client 端執行
  if (!process.client) return;

  let smoother; // ScrollSmoother 實例

  // 2. 每次頁面渲染完成後初始化（page:finish hook）
  nuxtApp.hook("page:finish", () => {
    const wrapper = document.querySelector("#smooth-wrapper");
    if (!wrapper) return; // 無容器就跳過

    // 判斷是否為手機（viewport 寬度小於 768px）
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      // 3. 桌機端初始化 ScrollSmoother
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
    }

    // 4. gs-fade 淡入動畫（桌機 + 手機皆適用）
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

  // 5. 在下一次 page 開始前，釋放上次資源（page:start hook）
  nuxtApp.hook("page:start", () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    smoother?.kill();
    gsap.globalTimeline.clear();
  });

  // 6. 提供 $gsap 給組件使用
  return {
    provide: {
      gsap,
    },
  };
});
