<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const projectImages = [
  // 'https://meeting.co.th/images/348.png',
  'https://placehold.co/800x500?text=Project+1',
  'https://placehold.co/800x500?text=Project+2',
  'https://placehold.co/800x500?text=Project+3',
  'https://placehold.co/800x500?text=Project+4',
  'https://placehold.co/800x500?text=Project+5'
]

const modules = [Navigation, Pagination, Autoplay]
</script>

<template>
  <section class="bg-primarybg text-white py-10 sm:py-20 relative overflow-hidden">
    <div class="container mx-auto flex flex-col sm:flex-row items-center relative z-10">
      <!-- context hero section -->
      <div class="w-full sm:w-1/2 text-center sm:text-left sm:order-1">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">
          <span class="text-transparent bg-clip-text bg-gradient-text">Meeting</span> Your Vision</h1>
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">
          with
          <span class="text-transparent bg-clip-text bg-gradient-text">
            Creative
          </span>
          Solutions
        </h1>
        <p class="mb-8">
          เราพร้อมที่จะดูแล และอยู่เคียงข้างคุณ <br />
          เพื่อให้ธุรกิจของคุณเติบโตบนโลกออนไลน์
        </p>
        <div class="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://lin.ee/gYvfSPi"
            class="bg-turqoise hover:bg-opacity-60 text-white font-medium py-2 px-4 rounded-md"
          >
            ติดต่อแอดไลน์
          </a>
          <a
            href="tel:064-459-9997"
            class="bg-white hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-md"
          >
            โทรหาเรา
          </a>
        </div>
      </div>

      <!-- sample recent work swiper -->
      <div class="w-full sm:w-1/2 sm:order-2 mt-10 sm:mt-0">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="10"
          :navigation="false"
          :pagination="{ clickable: true }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          class="w-full h-full rounded-lg"
        >
          <SwiperSlide v-for="(image, index) in projectImages" :key="index">
            <img
              :src="image"
              :alt="`Project ${index + 1}`"
              class="w-full h-auto object-cover object-center"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <!-- layer bg PNG -->
    <div class="absolute inset-0">
      <img
        src="~/assets/img/layer1.png"
        alt="Layer Image"
        class="w-full h-full object-cover"
      />
    </div>
  </section>
</template>


