<template>
  <section class="bg-secondbg text-white py-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
    <div class="container mx-auto text-center">
      <h1 class="text-5xl sm:text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-grad-text">
        Our Services
      </h1>
      <p class="mb-8 text-lg sm:text-xl">
        โซลูชันเพื่อความสำเร็จของคุณ<br>ยกระดับประสบการณ์ของคุณด้วยบริการที่ครอบคลุมและโดดเด่นของเรา
        </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          v-bind="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useServices } from '~/composables/useServices'
import ServiceCard from '../../common/ServiceCard.vue'

const { services } = useServices()
</script>