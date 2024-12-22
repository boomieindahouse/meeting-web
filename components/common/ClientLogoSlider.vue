<script setup>
import { usePartners } from "@/composables/usePartners";

const { partners } = usePartners();
const halfLength = Math.ceil(partners.length / 2); // หาความยาวครึ่งหนึ่ง
</script>

<template>
    <div class="w-full overflow-hidden bg-white py-8">
        <div class="mx-auto max-w-7xl px-4">
            <div class="relative">
                <div class="flex animate-scroll flex-col">
                    <!-- First row of logos -->
                    <div class="flex justify-center gap-16">
                        <div v-for="(partner, index) in partners.slice(0, halfLength)" :key="`logo-1-${index}`"
                            class="w-32 flex-shrink-0 flex items-center justify-center">
                            <img :src="partner.logo_url" :alt="`Client logo ${index + 1}`"
                                class="h-16 w-auto object-contain" />
                        </div>
                    </div>

                    <!-- Second row of logos -->
                    <div class="flex justify-center gap-16">
                        <div v-for="(partner, index) in partners.slice(halfLength)" :key="`logo-2-${index}`"
                            class="w-32 flex-shrink-0 flex items-center justify-center">
                            <img :src="partner.logo_url" :alt="`Client logo ${index + 1}`"
                                class="h-16 w-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
    animation-play-state: paused;
}
</style>
