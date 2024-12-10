<template>
  <nav class="bg-gray-900 py-4 px-6">
    <div class="container mx-auto flex justify-between items-center">
      <!-- โลโก้ -->
      <nuxt-link to="/" class="text-yellow-400 font-bold text-xl">
        Meeting Creative
      </nuxt-link>

      <!-- เมนูนำทาง -->
      <ul class="flex space-x-6">
        <li>
          <nuxt-link
            to="/"
            class="text-white hover:text-yellow-400"
            :class="{ 'text-yellow-400 font-bold': isActive('/') }"
          >
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/webdesign"
            class="text-white hover:text-yellow-400"
            :class="{ 'text-yellow-400 font-bold': isActive('/webdesign') }"
          >
            Web Design
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/graphic-design"
            class="text-white hover:text-yellow-400"
            :class="{ 'text-yellow-400 font-bold': isActive('/graphic-design') }"
          >
            Graphic Design
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/network-service"
            class="text-white hover:text-yellow-400"
            :class="{ 'text-yellow-400 font-bold': isActive('/network-service') }"
          >
            Network Service
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/our-team"
            class="text-white hover:text-yellow-400"
            :class="{ 'text-yellow-400 font-bold': isActive('/our-team') }"
          >
            Our Team
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="text-white hover:text-yellow-400"
            :class="{ 'text-yellow-400 font-bold': isActive('/contact') }"
          >
            Contact
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from '#app' // ใช้ useRoute จาก Nuxt 3

// ฟังก์ชันตรวจสอบ Active Link
const route = useRoute();
const isActive = (path) => route.path === path;
</script>

<style scoped>
/* เพิ่มการกำหนดสไตล์เพิ่มเติมหากจำเป็น */
</style>
