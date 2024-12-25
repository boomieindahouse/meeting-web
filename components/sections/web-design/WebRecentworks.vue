<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import '@/assets/css/work-section.css'
  
  const sectionRef = ref(null)
  const works = ref([
    { image: 'https://backend.meeting.co.th/storage/5282/65604b75e2c33_653b7730dd6d4_colon-p.webp', visible: true, exiting: false },
    { image: 'https://backend.meeting.co.th/storage/6408/65b49f06821e3_2.webp', visible: false, exiting: false },
    { image: 'https://backend.meeting.co.th/storage/8018/66692fb250228_singha.webp', visible: false, exiting: false },
    { image: 'https://backend.meeting.co.th/storage/8201/667ffed3bb1a7_mehay.webp', visible: false, exiting: false },
    { image: 'https://backend.meeting.co.th/storage/5292/65604bc113062_653b7f7d7c7ef_you2play.webp', visible: false, exiting: false },
    { image: 'https://backend.meeting.co.th/storage/5646/6594dd5742e41_screencapture-127-0-0-1-8000-2024-01-03-10_34_18.webp', visible: false, exiting: false },
    { image: 'https://backend.meeting.co.th/storage/12707/675a4616599d2_thepnakorn.webp', visible: false, exiting: false },
    { image: 'https://backend.meeting.co.th/storage/5632/6593d187eb249_httpschouchou.salemood.com_15_11zon.webp', visible: false, exiting: false },
  ])
  
  let currentIndex = 0
  let isAnimating = false
  let isLocked = true
  
  function lockScroll() {
    document.body.classList.add('scroll-lock')
  }
  
  function unlockScroll() {
    document.body.classList.remove('scroll-lock')
  }
  
  function handleScroll(event) {
    if (isAnimating) return
    
    if (event.deltaY > 0) {
      if (currentIndex < works.value.length - 1) {
        // ยังแสดงรูปไม่ครบ ให้แสดงรูปถัดไป
        isAnimating = true
        works.value[currentIndex].exiting = true
        
        setTimeout(() => {
          works.value[currentIndex + 1].visible = true
          works.value[currentIndex].visible = false
          works.value[currentIndex].exiting = false
          currentIndex++
          isAnimating = false
        }, 400)
        
        event.preventDefault()
      } else if (isLocked) {
        // แสดงรูปครบแล้ว และนี่เป็นครั้งแรกที่ scroll ลงหลังจากแสดงรูปครบ
        unlockScroll()
        isLocked = false
      }
    } else if (event.deltaY < 0) {
      if (currentIndex > 0) {
        // ยังมีรูปก่อนหน้า ให้กลับไปรูปก่อนหน้า
        isAnimating = true
        works.value[currentIndex].exiting = true
        
        setTimeout(() => {
          works.value[currentIndex].visible = false
          works.value[currentIndex].exiting = false
          works.value[currentIndex - 1].visible = true
          currentIndex--
          isAnimating = false
        }, 400)
        
        event.preventDefault()
      }
    }
  }
  
  onMounted(() => {
    // ล็อก scroll ทันทีที่ component mount
    lockScroll()
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            window.addEventListener('wheel', handleScroll, { passive: false })
          } else {
            window.removeEventListener('wheel', handleScroll)
            // ถ้า scroll ออกจาก section ให้ปลดล็อก
            unlockScroll()
          }
        })
      },
      { threshold: 0.5 }
    )
  
    if (sectionRef.value) {
      observer.observe(sectionRef.value)
    }
  })
  
  onUnmounted(() => {
    window.removeEventListener('wheel', handleScroll)
    unlockScroll()
  })
  </script>

<template>
    <section class="works-section bg-navbg" ref="sectionRef">
        <h1
          class="h1-section sm:h3-res text-transparent bg-clip-text bg-grad-text"
        >
          Web Design
        </h1>
      
      <p class="works-description">
        เรามีบริการออกแบบเว็บไซต์ที่ตอบโจทย์ทั้งในแง่ของการดีไซน์ที่สวยงาม
        และการใช้งานที่สะดวกสบายสำหรับทุกธุรกิจไม่ว่าจะขนาดเล็กหรือขนาดใหญ่
      </p>
  
      <div class="works-container">
        <div v-for="(work, index) in works" 
             :key="index"
             class="work-item"
             :style="{ zIndex: works.length - index }"
             :class="{ 
               visible: work.visible,
               exiting: work.exiting 
             }">
          <img :src="work.image" :alt="`Work ${index + 1}`">
        </div>
      </div>
    </section>
  </template>
  
  