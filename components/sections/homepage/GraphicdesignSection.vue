<template>
    <section
      class="bg-secondbg text-white py-10 sm:py-20 relative overflow-hidden"
    >
      <div
        class="container mx-auto flex flex-col lg:flex-col xl:flex-col 2xl:flex-col items-center sm:items-start relative z-10 gap-10"
      >
        <!-- ส่วนข้อความ -->
        <div class="w-full text-center lg:text-center">
          <h1
            class="text-5xl sm:text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-grad-text"
          >
            Graphic Design Services
          </h1>
          <p class="mb-8 text-lg sm:text-xl">
            บริการกราฟิคดีไซน์ รับออกแบบโลโก้ แบนเนอร์ โปสเตอร์ ปกหนังสือสื่อสิ่งพิมพ์ต่างๆ รวมไปถึงงานออกแบบออนไลน์ <br>หน้าปก Social Media ตลอดจนการวาง Branding Corporate Identity ให้กับธุรกิจของคุณ
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="/graphicdesign"
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
    "https://backend.meeting.co.th/storage/5220/6560435d3d922_65258abfdae84_IMG_2288.webp",
    "https://backend.meeting.co.th/storage/5219/6560434ec8315_65258b11ebfc4_IMG_2289.webp",
    "https://backend.meeting.co.th/storage/5222/6560437441b3a_65258c619cedd_IMG_2291.webp",
    "https://backend.meeting.co.th/storage/5225/6560439f152f0_65263da59af2e_382241719_846181834036229_1473077938394443299_n.webp",
    "https://backend.meeting.co.th/storage/5226/656043abaf295_65263db8c9d19_382693038_846179470703132_5556555187676053574_n.webp",
    "https://backend.meeting.co.th/storage/5227/656043ca733ae_65263dce239eb_382762580_846181494036263_8839296525949030498_n.webp",
    "https://backend.meeting.co.th/storage/5232/656044afaa8c2_65263fc181567_383950481_846182527369493_4320169372339203245_n.webp",
    "https://backend.meeting.co.th/storage/5234/656044de2cc7e_65263fe2a24e8_383975933_846183657369380_469675831393580584_n.webp",
    "https://backend.meeting.co.th/storage/12127/66f4c4edba02e_LINE_ALBUM_%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%9C%E0%B8%A5%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%8A%E0%B8%B8%E0%B8%94_240926_18.webp",
    "https://backend.meeting.co.th/storage/12705/675a447b5c5ec_Untitled-5.webp",
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
  