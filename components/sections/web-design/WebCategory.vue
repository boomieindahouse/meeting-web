<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

// Import JSON data
import jsonData from "@/static/images.json";

// isolate categories from JSON
const categories = Object.keys(jsonData.web_design);
const projects = jsonData.web_design;

const selectedCategory = ref("all");
const filteredProjects = ref(projects.all);
const isModalOpen = ref(false);
const currentImage = ref("");

function filterProjects(category) {
  selectedCategory.value = category;
  filteredProjects.value = projects[category];
}

function formatCategoryName(category) {
  // Convert name format
  const categoryMap = {
    all: "All",
    company_office_organization: "บริษัท / สำนักงาน / องค์กร",
    clinic_beauty_medicine: "คลินิกฟัน / ความงาม / แพทย์แผนจีน",
    online_shopping: "ช็อปปิ้งออนไลน์",
    entertainment: "ความบันเทิง",
    government: "ราชการ / รัฐวิสาหกิจ",
    education_institution: "สถาบันการศึกษา",
    hotel_restaurant_travel: "โรงแรม / ร้านอาหาร / ท่องเที่ยว",
    village_project: "โครงการหมู่บ้าน",
    hospital_health_center: "โรงพยาบาล / ศูนย์สุขภาพ",
  };
  return categoryMap[category] || category;
}

function openModal(image) {
  currentImage.value = image;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  currentImage.value = "";
}
</script>

<template>
  <section class="py-16 px-4 bg-primarybg text-center">
    <div class="container mx-auto">
      <h1
        class="h1-section sm:h3-res text-transparent bg-clip-text bg-grad-text"
      >
        Check Our Web Design
      </h1>

      <!-- Dropdown for sm res -->
      <div class="sm:hidden flex justify-center mb-8">
        <select
          @change="filterProjects($event.target.value)"
          class="px-3 py-3 rounded-lg bg-white text-black text-sm"
        >
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
            @click="filterProjects(category)"
          >
            {{ formatCategoryName(category) }}
          </option>
        </select>
      </div>

      <!-- Buttons for desktop view -->
      <div class="hidden sm:flex flex-wrap justify-center gap-8 mb-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="filterProjects(category)"
          :class="[
            'px-4 py-1 rounded-xl hover:text-white hover:bg-turqoise hover:bg-opacity-85',
            selectedCategory === category ? 'bg-turqoise text-white text-[10pt]' : ' text-white text-[10pt]',
          ]"
        >
          {{ formatCategoryName(category) }}
        </button>
      </div>

      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.website"
          class="relative overflow-hidden rounded-lg shadow-lg group"
        >
          <img
            :src="project.preview"
            :alt="project.website"
            class="w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex flex-row items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-6"
          >
            <button
              class="flex justify-center items-center text-white"
              @click="openModal(project.preview)"
            >
              <Icon icon="fluent:expand-up-right-20-filled" class="text-3xl" />
            </button>
            <a
              :href="project.website"
              target="_blank"
              rel="noopener noreferrer"
              class="flex justify-center items-center text-white px-2 py-2 rounded-lg"
            >
              <Icon icon="line-md:link" class="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-10 sm:px-0"
        aria-label="Expand"
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
    </div>
  </section>
</template>

<style scoped></style>
