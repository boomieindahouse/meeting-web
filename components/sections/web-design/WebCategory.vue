<script setup>
  import { ref } from 'vue';
  
  const categories = ['ALL', 'COMPANIES', 'CLINICS', 'BEAUTY', 'EDUCATION'];
  const projects = [
    { title: 'Project A', image: 'https://backend.meeting.co.th/storage/5282/65604b75e2c33_653b7730dd6d4_colon-p.webp', category: 'COMPANIES' },
    { title: 'Project B', image: 'https://backend.meeting.co.th/storage/6408/65b49f06821e3_2.webp', category: 'CLINICS' },
    { title: 'Project C', image: 'https://backend.meeting.co.th/storage/8018/66692fb250228_singha.webp', category: 'BEAUTY' },
    { title: 'Project D', image: 'https://backend.meeting.co.th/storage/5292/65604bc113062_653b7f7d7c7ef_you2play.webp', category: 'EDUCATION' },
    // เพิ่มโปรเจคเพิ่มเติมตามที่คุณต้องการ
  ];
  
  const selectedCategory = ref('ALL');
  const filteredProjects = ref(projects);
  
  function filterProjects(category) {
    selectedCategory.value = category;
    filteredProjects.value = category === 'ALL' ? projects : projects.filter(project => project.category === category);
  }
  </script>

<template>
    <section class="py-16 px-4 bg-primarybg text-center">
      <div class="container mx-auto">
        <h1 class="text-3xl sm:text-4xl font-bold mb-8">All Works: Web Design</h1>
        
        <div class="flex justify-center space-x-4 mb-8">
          <button
            v-for="category in categories"
            :key="category"
            @click="filterProjects(category)"
            :class="['px-4 py-2 rounded-lg', selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700']"
          >
            {{ category }}
          </button>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="project in filteredProjects"
            :key="project.title"
            class="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-40 object-cover"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* คุณสามารถปรับแต่งสไตล์เพิ่มเติมได้ที่นี่ */
  </style>
  