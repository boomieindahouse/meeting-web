<template>
    <div class="service-card bg-zinc-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <!-- แสดงไอคอนแทนรูป -->
      <div class="icon mb-4 text-primary text-5xl flex justify-center items-center">
        <Icon :icon="icon" />
      </div>
      <h3 class="text-2xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-lg">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue';
  
  defineProps({
    icon: {
      type: String, // เปลี่ยนจาก imageUrl เป็น icon
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .service-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* เพิ่มการกำหนดสีหรือปรับแต่งไอคอน */
  .icon {
    color: #228897; /* สีไอคอน */
  }
  </style>
  