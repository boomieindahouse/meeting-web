import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin(nuxtApp => {
  const lenis = new Lenis({
    smooth: true,  // เsmooth scroll mode
    lerp: 0.1,     // smooth adjust
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  // เรียกใช้เมื่อแอปเริ่มทำงาน
  requestAnimationFrame(raf)

  // ทำให้ Lenis สามารถใช้ได้ทั่วทั้งแอป
  nuxtApp.provide('lenis', lenis)
})
