<script setup>
import { useWhyChooseUs } from "./composables/useWhyChooseUs";
import { Icon } from "@iconify/vue";

const WhyChooseUs = useWhyChooseUs();
</script>

<template>
  <section class="py-16 px-4 bg-navbg text-center">
    <div class="container mx-auto">
      <h1 class="h1-section sm:h3-res text-transparent bg-clip-text bg-grad-text">
        Why Choose Us
      </h1>
      <p class="sm:p-res mb-8 text-lg sm:text-xl text-white">
        เหตุผลที่คุณควรเลือก Meeting Creative
      </p>

      <!-- ปรับ grid ให้เหมือนตาราง -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-0">
        <!-- ใช้ข้อมูลจาก useWhyChooseUs -->
        <div
          v-for="item in WhyChooseUs"
          :key="item.title"
          class="flex flex-col justify-start items-start bg-transparent text-left border-t border-gray-300 pt-6"
        >
          <div class="flex items-center justify-center mb-4 text-4xl text-turqoise">
            <Icon :icon="item.icon" class="text-4xl"></Icon>
          </div>
          <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>
          <p class="text-gray-300 text-base mt-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

