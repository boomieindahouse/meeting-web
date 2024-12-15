<template>
    <div class="service-card bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <div class="icon mb-4">
        <img :src="imageUrl" :alt="title" class="mx-auto w-20 h-20"/>
      </div>
      <h3 class="text-2xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-lg">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    imageUrl: {
      type: String,
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
  })
  </script>
  
  <style scoped>
  .service-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  </style>