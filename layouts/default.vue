<template>
    <div>
      <!-- เรียกใช้ Navbar ในทุกหน้า -->
      <Navbar />
      <!-- เนื้อหาของหน้าที่จะถูกแสดงที่นี่ -->
      <NuxtPage />
    </div>
  </template>
  
  <script setup>
  // การ import Navbar
  import Navbar from '@/components/Navbar.vue'
  </script>
  