<template>
  <footer class="bg-secondbg text-white py-8">
    <div class="container mx-auto">
      <div class="flex flex-col sm:flex-row items-center justify-between">
        <!-- logo meeting -->
        <div class="flex-shrink-0">
          <img src="../../assets/img/logo2.png" alt="Logo" class="w-40" />
        </div>

        <!-- quote -->
        <div class="flex-1 text-center mt-3">
          <p class="text-lg">"EVERYDAY IS A FRESH START"</p>
        </div>

        <!-- social buttons -->
        <div class="flex space-x-4 mt-5">
          <a href="https://www.facebook.com/meetingcreative" aria-label="Meeting Facebook" class="icon-button"
            target="_blank">
            <Icon icon="fa-brands:facebook-f" class="text-gray-500" />
          </a>
          <a href="https://lin.ee/gYvfSPi" aria-label="Meeting Line" class="icon-button" target="_blank">
            <Icon icon="fa-brands:line" class="text-gray-500" />
          </a>
          <a href="tel:044-002221" aria-label="Meeting Telephone" class="icon-button" target="_blank">
            <Icon icon="fa-solid:phone" class="text-gray-500" />
          </a>
          <a href="mailto:https://lin.ee/gYvfSPi" aria-label="Meeting Email" class="icon-button" target="_blank">
            <Icon icon="fa-solid:envelope" class="text-gray-500" />
          </a>
        </div>
      </div>

      <!-- divider -->
      <hr class="border-gray-600 my-6" />

      <!-- copyright -->
      <div class="text-center">
        <p class="text-sm text-gray-400">
          &copy; Copyright 2024 Meeting Creative All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ffffff;
  color: white;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
}

.icon-button:hover {
  box-shadow: rgba(255, 255, 255, 0.24) 0px 5px 8px;
  animation: bounce 0.5s ease-in-out;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}
</style>
