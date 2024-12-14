<template>
    <footer class="bg-secondbg text-white py-8">
      <div class="container mx-auto">
        
        <div class="flex items-center justify-between space-x-8">
          <!-- ส่วนที่ 1: Logo -->
          <div class="flex-shrink-0">
            <img src="../../assets/img/logo2.png" alt="Logo" class="w-40" />
          </div>
  
          <!-- ส่วนที่ 2: Quote -->
          <div class="flex-1 text-center">
            <p class="text-lg">"Meeting Your Vision, with Creative Solutions"</p>
          </div>
  
          <!-- Social Buttons -->
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/meetingcreative" class="icon-button" target="_blank">
              <Icon icon="fa-brands:facebook-f" />
            </a>
            <a href="https://lin.ee/gYvfSPi" class="icon-button" target="_blank">
              <Icon icon="fa-brands:line" />
            </a>
            <a href="tel:044-002221" class="icon-button" target="_blank">
              <Icon icon="fa-solid:phone" />
            </a>
            <a href="mailto:https://lin.ee/gYvfSPi" class="icon-button" target="_blank">
              <Icon icon="fa-solid:envelope" />
            </a>
          </div>
        </div>
  
        <!-- Divider -->
        <hr class="border-gray-600 my-6" />
  
        <!-- Copyright -->
        <div class="text-center">
          <p class="text-sm text-gray-400">
            &copy; Copyright 2024 Meeting Creative All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue'
  </script>
  
  <style scoped>
  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px; 
    height: 35px; 
    border-radius: 50%; 
    background-color: #626262; 
    color: white;
    transition: background-color 0.3s ease;
  }
  
  .icon-button:hover {
    background-color: #228897;
  }
  </style>
  