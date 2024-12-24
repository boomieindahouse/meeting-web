<script setup>
import HeroSection from '@/components/sections/homepage/HeroSection.vue'
import WebdesignSection from '@/components/sections/homepage/WebdesignSection.vue'
import GraphicdesignSection from '@/components/sections/homepage/GraphicdesignSection.vue'
import NetworkserviceSection from '@/components/sections/homepage/NetworkserviceSection.vue'
import WhyChooseUsSection from '@/components/sections/homepage/WhyChooseUsSection.vue'
import ClientLogoSlider from '~/components/common/ClientLogoSlider.vue'
import GetintouchSection from '~/components/sections/homepage/GetintouchSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <WhyChooseUsSection />
    <!-- <OurserviceSection /> -->
    <WebdesignSection />
    <GraphicdesignSection />
    <NetworkserviceSection />
    <ClientLogoSlider />
    <GetintouchSection />
  </div>
</template>


