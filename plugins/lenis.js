import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin(nuxtApp => {
  const lenis = new Lenis({
    smooth: true,  // เปิดโหมด scroll ที่ลื่นไหล
    lerp: 0.1,     // ปรับค่าความลื่นไหล
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
