<script setup>
import { useModal } from "@/composables/useModal";
import { useProjectImages } from "@/composables/useProjectImages";
import { useSwiperConfig } from "@/composables/useSwiperConfig";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Icon } from "@iconify/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

// ใช้ Composables
const { isModalOpen, currentImage, openModal, closeModal } = useModal();
const { webProjectImages } = useProjectImages();
const { modules, swiperConfig } = useSwiperConfig();
</script>

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
          class="h1-section sm:h3-res text-transparent bg-clip-text bg-grad-text"
        >
          Web Design Services
        </h1>
        <p class="sm:p-res mb-8 text-lg sm:text-xl">
          เรามีบริการออกแบบเว็บไซต์ที่ตอบโจทย์ทั้งในแง่ของดีไซน์ที่สวยงาม และการใช้งานที่สะดวกสบายสำหรับทุกธุรกิจไม่ว่าจะขนาดเล็กหรือขนาดใหญ่
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="/webdesign"
            class="bg-white hover:bg-opacity-70 text-black font-medium py-2 px-4 rounded-md sm:max-w-[150px] mx-auto sm:mx-0"
          >
            ดูผลงานของเรา
          </a>
        </div>
      </div>

      <!-- ส่วนรูปภาพ Swiper -->
      <div class="w-full mt-10">
        <Swiper :modules="modules" v-bind="swiperConfig" class="w-full h-full">
          <SwiperSlide
            v-for="(image, index) in webProjectImages"
            :key="index"
            class="relative group"
          >
            <img
              :src="image"
              :alt="`Web Design ${index + 1}`"
              class="w-full h-auto object-cover object-center rounded-lg"
            />
            <!-- ไอคอน Expand -->
            <button
              class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300"
              @click="openModal(image)"
            >
              <Icon icon="fluent:expand-up-right-20-filled" class="text-3xl" />
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <!-- Modal Popup -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      @click="closeModal"
    >
      <div class="relative" @click.stop>
        <button
          class="absolute top-2 right-2 text-white text-2xl"
          @click="closeModal"
        >
          &times;
        </button>
        <img
          :src="currentImage"
          alt="Expanded Image"
          class="max-w-full max-h-[90vh] rounded-lg"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>
