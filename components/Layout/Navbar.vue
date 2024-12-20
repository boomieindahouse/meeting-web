<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="sticky top-0 left-0 right-0 z-50 bg-navbg py-1 px-6">
    <div class="container  mx-auto flex justify-between items-center">
      <!-- Logo -->
      <nuxt-link to="/" class="text-gold font-bold text-xl">
        <img
          src="../../assets/img/logo2.png"
          alt="Meeting Creative"
          class="h-16"
        />
      </nuxt-link>

      <!-- Ham button in sm res -->
      <button
        @click="toggleMenu"
        class="lg:hidden text-white focus:outline-none"
      >
        <span class="sr-only">Open Menu</span>
        <span v-if="!isMenuOpen" class="text-2xl">☰</span>
        <span v-if="isMenuOpen" class="text-2xl">✖</span>
      </button>

      <!-- Nav menu -->
      <ul
        :class="{
          'hidden lg:flex': !isMenuOpen,
          'flex flex-col space-y-4 absolute top-16 left-0 w-full bg-navbg p-4':
            isMenuOpen,
        }"
        class="lg:space-x-10 lg:flex-row"
      >
        <li class="py-2 text-center">
          <router-link to="/" active-class="text-gold" exact class="text-white hover:text-gold">Home</router-link>
        </li>
        <li class="py-2 text-center">
          <router-link to="/webdesign" active-class="text-gold" exact class="text-white hover:text-gold">Web Design</router-link>
        </li>
        <li class="py-2 text-center">
          <router-link to="/graphic-design" active-class="text-gold" exact class="text-white hover:text-gold">Graphic Design</router-link>
        </li>
        <li class="py-2 text-center">
          <router-link to="/network-service" active-class="text-gold" exact class="text-white hover:text-gold">Network Service</router-link>
        </li>
        <li class="py-2 text-center">
          <router-link to="/our-team" active-class="text-gold" exact class="text-white hover:text-gold">Our Team</router-link>
        </li>
        <li class="py-2 text-center">
          <router-link to="/contact" active-class="text-gold" exact class="text-white hover:text-gold">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
ul {
  z-index: 10;
}

.router-link-exact-active {
  color: #DEC07B;
}
</style>
