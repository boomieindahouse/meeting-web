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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
        <!-- ใช้ข้อมูลจาก useWhyChooseUs -->
        <div v-for="item in WhyChooseUs" :key="item.title" class="bg-white p-4 rounded-xl shadow-custom-light hover:shadow-custom-dark transition duration-300 ease-in-out">
          <div class="flex justify-center items-center text-4xl mb-4">
            <Icon :icon="item.icon" class="text-4xl text-turqoise"></Icon>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 text-lg">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
