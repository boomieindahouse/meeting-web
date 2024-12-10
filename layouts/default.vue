<template>
    <div>
      <!-- ใส่ Navbar ที่นี่ -->
      <Navbar />
      <!-- เนื้อหาของหน้า -->
      <NuxtPage />
    </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/Layout/Navbar.vue'
  </script>