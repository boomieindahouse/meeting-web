<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const navRef = ref(null);

const toggleMenu = (e) => {
  e.stopPropagation();
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClickOutside = (event) => {
  if (navRef.value && !navRef.value.contains(event.target) && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <nav ref="navRef" class="sticky top-0 left-0 right-0 z-50 bg-navbg py-1 px-6">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <nuxt-link to="/" class="text-gold font-bold text-xl" @click="closeMenu">
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
        :class="[
          'lg:flex lg:space-x-10 lg:flex-row',
          isMenuOpen 
            ? 'flex flex-col space-y-4 absolute top-16 left-0 w-full bg-navbg p-4'
            : 'hidden'
        ]"
      >
        <li class="py-2 text-center">
          <router-link to="/" active-class="text-gold" exact class="text-white hover:text-gold" @click="closeMenu">Home</router-link>
        </li>
        <li class="py-2 text-center">
          <router-link to="/webdesign" active-class="text-gold" exact class="text-white hover:text-gold" @click="closeMenu">Web Design</router-link>
        </li>
        <li class="py-2 text-center">
          <router-link to="/graphic-design" active-class="text-gold" exact class="text-white hover:text-gold" @click="closeMenu">Graphic Design</router-link>
        </li>
        <li class="py-2 text-center">
          <router-link to="/network-service" active-class="text-gold" exact class="text-white hover:text-gold" @click="closeMenu">Network Service</router-link>
        </li>
        <li class="py-2 text-center">
          <router-link to="/our-team" active-class="text-gold" exact class="text-white hover:text-gold" @click="closeMenu">Our Team</router-link>
        </li>
        <li class="py-2 text-center">
          <router-link to="/contact" active-class="text-gold" exact class="text-white hover:text-gold" @click="closeMenu">Contact</router-link>
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