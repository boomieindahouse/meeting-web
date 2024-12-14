<template>
    <div>
      <HeroSection />
      <OurserviceSection />
      <WebdesignSection />
    </div>
</template>

<script setup>
// นำเข้า HeroSection จาก components/sections
import HeroSection from '@/components/sections/homepage/HeroSection.vue'
import OurserviceSection from '@/components/sections/homepage/OurserviceSection.vue'
import WebdesignSection from '@/components/sections/homepage/WebdesignSection.vue'
</script>