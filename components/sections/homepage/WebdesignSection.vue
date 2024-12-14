<template>
  <section
    class="bg-primarybg text-white py-10 sm:py-20 relative overflow-hidden"
  >
    <div
      class="container mx-auto flex flex-col lg:flex-col xl:flex-col 2xl:flex-col items-center sm:items-start relative z-10 gap-10"
    >
      <!-- ส่วนข้อความ -->
      <div class="w-full text-center lg:text-center">
        <h1
          class="text-5xl sm:text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-grad-text"
        >
          Web Design Services
        </h1>
        <p class="mb-8 text-lg sm:text-xl">
          เรามีบริการออกแบบเว็บไซต์ที่ตอบโจทย์ทั้งในแง่ของดีไซน์ที่สวยงาม
          <br />และการใช้งานที่สะดวกสบายสำหรับทุกธุรกิจไม่ว่าจะขนาดเล็กหรือขนาดใหญ่
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="/webdesign"
            class="bg-white hover:bg-opacity-70 text-black font-medium py-2 px-4 rounded-md"
          >
            ดูผลงานของเรา
          </a>
        </div>
      </div>

      <!-- ส่วนรูปภาพ Swiper -->
      <div class="w-full mt-10">
        <Swiper
          :modules="modules"
          :slides-per-view="3"
          :centered-slides="true"
          :space-between="30"
          :effect="'coverflow'"
          :coverflow-effect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 0.8,
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          class="w-full h-full"
        >
          <SwiperSlide v-for="(image, index) in projectImages" :key="index">
            <img
              :src="image"
              :alt="`Web Design ${index + 1}`"
              class="w-full h-auto object-cover object-center rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

// Img placeholder
const projectImages = [
  "https://backend.meeting.co.th/storage/5282/65604b75e2c33_653b7730dd6d4_colon-p.webp",
  "https://backend.meeting.co.th/storage/5634/6593d2738bd6a_httpsdiricats.com_13_11zon.webp",
  "https://backend.meeting.co.th/storage/6407/65b476d61ffcf_Candy.webp",
  "https://backend.meeting.co.th/storage/6408/65b49f06821e3_2.webp",
  "https://backend.meeting.co.th/storage/8018/66692fb250228_singha.webp",
  "https://backend.meeting.co.th/storage/8201/667ffed3bb1a7_mehay.webp",
  "https://backend.meeting.co.th/storage/5292/65604bc113062_653b7f7d7c7ef_you2play.webp",
  "https://backend.meeting.co.th/storage/5646/6594dd5742e41_screencapture-127-0-0-1-8000-2024-01-03-10_34_18.webp",
  "https://backend.meeting.co.th/storage/5636/6593d36a8c313_httpspassionfooddelivery.com_7_11zon.webp",
  "https://backend.meeting.co.th/storage/5631/6593d0cf21bc1_httpschalisapoolvilla.com_20_11zon.webp",
];

const modules = [Navigation, Pagination, Autoplay, EffectCoverflow];
</script>

<style scoped>
/* เรียงในแนว column สำหรับทุกขนาดหน้าจอ */
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ขนาดหน้าจอ lg และใหญ่กว่า */
@media (min-width: 1024px) {
  .container {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
