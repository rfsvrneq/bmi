import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 註冊 MotionPath 外掛
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap, // 讓元件可以用 useNuxtApp().$gsap 呼叫
    },
  };
});
