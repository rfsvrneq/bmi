// plugins/aos.js
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    nuxtApp.AOS = AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease',
      delay: 100,
      once: true,
    })
    window.addEventListener('scroll', () => {
      nuxtApp.AOS = AOS.refresh() // 在页面滚动时重新初始化 AOS.js
    })
  }
})
