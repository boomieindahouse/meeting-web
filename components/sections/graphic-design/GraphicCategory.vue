<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

// Import JSON data
import jsonData from "@/static/images.json";

// isolate categories from JSON
const categories = Object.keys(jsonData.graphic_design);
const projects = jsonData.graphic_design;

const selectedCategory = ref("all");
const filteredProjects = ref(projects.all || []);
const isModalOpen = ref(false);
const currentImage = ref("");

function filterProjects(category) {
  selectedCategory.value = category;
  filteredProjects.value = projects[category] || [];
}

function formatCategoryName(category) {
  // Convert name format
  const categoryMap = {
    all: "All",
    ads: "โฆษณา",
    banner: "แบนเนอร์",
    video: "วิดีโอ",
    motion_graphic: "กราฟิกเคลื่อนไหว",
    packaging: "บรรจุภัณฑ์",
    logo: "โลโก้",
    business_card: "นามบัตร",
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
        Check Our Graphic Design
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
          :class="[ 'px-4 py-1 rounded-xl hover:text-white hover:bg-turqoise hover:bg-opacity-85', selectedCategory === category ? 'bg-turqoise text-white text-[10pt]' : ' text-white text-[10pt]', ]"
        >
          {{ formatCategoryName(category) }}
        </button>
      </div>

      <div
        class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
      >
        <div
          v-for="image in filteredProjects"
          :key="image"
          class="relative overflow-hidden rounded-lg shadow-lg group break-inside-avoid-column"
        >
          <img
            :src="image"
            alt="Graphic Design"
            class="w-full h-auto transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex flex-row items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-6"
          >
            <button
              class="flex justify-center items-center text-white"
              @click="openModal(image)"
            >
              <Icon icon="fluent:expand-up-right-20-filled" class="text-3xl" />
            </button>
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

<style scoped>
.break-inside-avoid-column {
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
}
</style>
