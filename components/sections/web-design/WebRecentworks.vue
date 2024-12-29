<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from '#app';
import '@/assets/css/work-section.css';

const sectionRef = ref(null);
const works = ref([
  { image: 'https://backend.meeting.co.th/storage/5282/65604b75e2c33_653b7730dd6d4_colon-p.webp', visible: true, exiting: false },
  { image: 'https://backend.meeting.co.th/storage/6408/65b49f06821e3_2.webp', visible: false, exiting: false },
  { image: 'https://backend.meeting.co.th/storage/8018/66692fb250228_singha.webp', visible: false, exiting: false },
  { image: 'https://backend.meeting.co.th/storage/8201/667ffed3bb1a7_mehay.webp', visible: false, exiting: false },
  { image: 'https://backend.meeting.co.th/storage/5292/65604bc113062_653b7f7d7c7ef_you2play.webp', visible: false, exiting: false },
  { image: 'https://backend.meeting.co.th/storage/5646/6594dd5742e41_screencapture-127-0-0-1-8000-2024-01-03-10_34_18.webp', visible: false, exiting: false },
  { image: 'https://backend.meeting.co.th/storage/12707/675a4616599d2_thepnakorn.webp', visible: false, exiting: false },
  { image: 'https://backend.meeting.co.th/storage/5632/6593d187eb249_httpschouchou.salemood.com_15_11zon.webp', visible: false, exiting: false },
]);

let currentIndex = 0;
let isAnimating = false;
const { $lenis } = useNuxtApp();

function handleCustomScroll(event) {
  if (isAnimating) return;

  if (event.deltaY > 0) {
    // Scroll ลง
    if (currentIndex < works.value.length - 1) {
      isAnimating = true;
      works.value[currentIndex].exiting = true;

      setTimeout(() => {
        works.value[currentIndex + 1].visible = true;
        works.value[currentIndex].visible = false;
        works.value[currentIndex].exiting = false;
        currentIndex++;
        isAnimating = false;
      }, 400);

      event.preventDefault();
    } else if (currentIndex === works.value.length - 1) {
      // เมื่อถึงรูปสุดท้าย ให้ปลดล็อก Lenis
      $lenis.start();
    }
  } else if (event.deltaY < 0) {
    // Scroll ขึ้น
    if (currentIndex > 0) {
      isAnimating = true;
      works.value[currentIndex].exiting = true;

      setTimeout(() => {
        works.value[currentIndex].visible = false;
        works.value[currentIndex].exiting = false;
        works.value[currentIndex - 1].visible = true;
        currentIndex--;
        isAnimating = false;
      }, 400);

      event.preventDefault();
    } else if (currentIndex === 0) {
      // เมื่อ scroll ขึ้นถึงรูปแรก ให้ปล่อยให้ Lenis scroll กลับขึ้นไปได้
      $lenis.start();
    }
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Pause Lenis และใช้ scroll ที่กำหนดเอง
          $lenis.stop();
          window.addEventListener('wheel', handleCustomScroll, { passive: false });
        } else {
          // กลับมาใช้ Lenis scroll ปกติ
          $lenis.start();
          window.removeEventListener('wheel', handleCustomScroll);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleCustomScroll);
  $lenis.start();
});
</script>

<template>
  <section class="works-section bg-navbg" ref="sectionRef">
    <h1 class="h1-section sm:h3-res text-transparent bg-clip-text bg-grad-text">
      Web Design
    </h1>

    <p class="works-description">
      เรามีบริการออกแบบเว็บไซต์ที่ตอบโจทย์ทั้งในแง่ของการดีไซน์ที่สวยงาม
      และการใช้งานที่สะดวกสบายสำหรับทุกธุรกิจไม่ว่าจะขนาดเล็กหรือขนาดใหญ่
    </p>

    <div class="works-container">
      <div
        v-for="(work, index) in works"
        :key="index"
        class="work-item"
        :style="{ zIndex: works.length - index }"
        :class="{ visible: work.visible, exiting: work.exiting }"
      >
        <img :src="work.image" :alt="`Work ${index + 1}`" />
      </div>
    </div>
  </section>
</template>
