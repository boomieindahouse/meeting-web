<template>
  <section class="bg-primarybg text-white py-10 sm:py-10 relative overflow-hidden">
    <div class="container mx-auto flex flex-col-reverse sm:flex-row items-center relative z-10">
      <!-- ส่วนข้อความ -->
      <div class="w-full sm:w-1/2 text-center sm:text-left">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">From Virtual Ideas</h1>
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">
          To Real
          <span class="text-transparent bg-clip-text bg-gradient-text">
            Achievements
          </span>
        </h1>
        <p class="mb-8">
          เราพร้อมที่จะดูแล และอยู่เคียงข้างคุณ <br />
          เพื่อให้ธุรกิจของคุณเติบโตบนโลกออนไลน์
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="/contact"
            class="bg-turqoise hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Line Contact
          </a>
          <a
            href="/contact"
            class="bg-white hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-md"
          >
            Telephone
          </a>
        </div>
      </div>

      <!-- ส่วนรูปภาพ Swiper -->
      <div class="w-full sm:w-1/2 absolute sm:relative top-0 right-0">
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
          class="w-full h-full"
        >
          <SwiperSlide v-for="(image, index) in projectImages" :key="index">
            <img
              :src="image"
              :alt="`Project ${index + 1}`"
              class="w-full h-auto object-cover object-right-top"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <!-- Layer PNG -->
    <div class="absolute inset-0">
      <img
        src="~/assets/img/layer.png"
        alt="Layer Image"
        class="w-full h-full object-cover"
      />
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Placeholder images using placehold.co
const projectImages = [
  'https://placehold.co/800x600?text=Project+1',
  'https://placehold.co/800x600?text=Project+2',
  'https://placehold.co/800x600?text=Project+3',
  'https://placehold.co/800x600?text=Project+4',
  'https://placehold.co/800x600?text=Project+5'
]

const modules = [Navigation, Pagination, Autoplay]
</script>