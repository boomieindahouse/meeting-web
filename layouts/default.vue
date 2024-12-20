<script setup>
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'
</script>

<template>
    <div>
      <!-- ใส่ Navbar ที่นี่ -->
      <Navbar />
      <!-- เนื้อหาของหน้า -->
      <NuxtPage />
      <Footer />
    </div>
  </template>
