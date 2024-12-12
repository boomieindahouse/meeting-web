<template>
    <section class="relative">
      <div class="flex space-x-4 overflow-x-auto">
        <div
          class="project-container"
          v-for="(image, index) in images"
          :key="index"
          :ref="el => imageRefs[index] = el"
        >
          <img :src="image" alt="Project Image" class="project-image" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const images = ref([
  require('../../assets/img/11.png'),
  require('@/assets/img/image2.jpg'),
  require('@/assets/img/image3.jpg'),
  require('@/assets/img/image4.jpg'),
  require('@/assets/img/image5.jpg')
]);
  
  onMounted(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      imageRefs.value.forEach((imageRef, index) => {
        if (imageRef) {
          imageRef.style.transform = `translateX(${scrollY * 0.1 * (index + 1)}px)`;
        }
      });
    });
  });
  </script>
  
  <style scoped>
  .project-container {
    position: relative;
    min-width: 300px;
  }
  .project-image {
    transition: transform 0.2s ease;
  }
  </style>
  