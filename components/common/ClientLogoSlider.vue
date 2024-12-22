<script setup>
import { usePartners } from "@/composables/usePartners";

const { partners } = usePartners();
</script>

<template>
  <div class="overflow-hidden">
    <div class="flex space-x-4 animate-marquee">
      <div
        v-for="(partner, index) in partners"
        :key="index"
        class="flex-shrink-0 w-40 h-40 bg-gray-200 flex items-center justify-center"
      >
        <img
          :src="partner.logo_url"
          alt="Partner Logo"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* เลื่อนโลโก้ซ้ายไปขวา */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 15s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

.overflow-hidden {
  width: 100%;
  overflow: hidden;
}

.flex {
  display: flex;
}

@media (max-width: 768px) {
  /* ปรับขนาดของโลโก้สำหรับหน้าจอมือถือ */
  .flex-shrink-0 {
    width: 30px; /* ขนาดโลโก้เล็กลงในหน้าจอมือถือ */
    height: 30px; /* ขนาดโลโก้เล็กลงในหน้าจอมือถือ */
  }

  .animate-marquee {
    animation: marquee 15s linear infinite; /* ลดความเร็วการเลื่อนสำหรับมือถือ */
  }
}

@media (max-width: 480px) {
  /* ปรับขนาดโลโก้ในหน้าจอมือถือที่เล็กลง */
  .flex-shrink-0 {
    width: 100px; /* ขนาดโลโก้เล็กที่สุด */
    height: 100px;
  }

  .animate-marquee {
    animation: marquee 15s linear infinite; /* ลดความเร็วการเลื่อนมากขึ้นในหน้าจอที่เล็กที่สุด */
  }
}
</style>
