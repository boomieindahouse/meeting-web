<script setup>
import { usePartners } from "@/composables/usePartners";

const { partners } = usePartners();
</script>

<template>
  <div class="w-full overflow-hidden bg-white py-8">
    <div class="mx-auto max-w-7xl px-4">
      <div class="relative">
        <div class="flex animate-scroll">
          <!-- First set of logos -->
          <div class="flex min-w-full justify-around items-center gap-8">
            <div
              v-for="(partner, index) in partners"
              :key="`logo-1-${index}`"
              class="w-32 flex-shrink-0"
            >
              <img
                :src="partner.logo_url"
                :alt="`Client logo ${index + 1}`"
                class="h-16 w-auto object-contain"
              />
            </div>
          </div>

          <!-- Duplicate set for seamless loop -->
          <div class="flex min-w-full justify-around items-center gap-8">
            <div
              v-for="(partner, index) in partners"
              :key="`logo-2-${index}`"
              class="w-32 flex-shrink-0"
            >
              <img
                :src="partner.logo_url"
                :alt="`Client logo ${index + 1}`"
                class="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
