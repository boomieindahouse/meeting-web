<template>
    <div class="w-full h-full">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :pagination="{ 
          clickable: true,
          dynamicBullets: true
        }"
        :navigation="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        class="mySwiper"
      >
        <swiper-slide class="flex items-center justify-center bg-gray-800 text-white h-64">
          <p>Slide 1</p>
        </swiper-slide>
        <swiper-slide class="flex items-center justify-center bg-gray-700 text-white h-64">
          <p>Slide 2</p>
        </swiper-slide>
        <swiper-slide class="flex items-center justify-center bg-gray-600 text-white h-64">
          <p>Slide 3</p>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Navigation, Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/autoplay';
  
  const modules = [Pagination, Navigation, Autoplay];
  </script>
  
  <style scoped>
  .mySwiper {
    width: 100%;
    height: 100%;
  }
  
  :deep(.swiper-pagination-bullet) {
    background-color: white;
    opacity: 0.5;
  }
  
  :deep(.swiper-pagination-bullet-active) {
    background-color: white;
    opacity: 1;
  }
  
  :deep(.swiper-button-prev, .swiper-button-next) {
    color: white;
  }
  </style>