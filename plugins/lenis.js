import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin(nuxtApp => {
  const lenis = new Lenis({
    smooth: true,  // เปิด smooth scroll
    lerp: 0.1,     // ค่าการปรับ smooth
  })

  // เรียกใช้ Lenis animation frame loop
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // ฟังก์ชันล็อค scroll
  const lockScroll = () => {
    lenis.stop()
  }

  // ฟังก์ชันปลดล็อค scroll
  const unlockScroll = () => {
    lenis.start()
  }

  // ทำให้ Lenis และฟังก์ชันล็อค/ปลดล็อค scroll ใช้ได้ทั่วแอป
  nuxtApp.provide('lenis', lenis)
  nuxtApp.provide('lockScroll', lockScroll)
  nuxtApp.provide('unlockScroll', unlockScroll)
})
