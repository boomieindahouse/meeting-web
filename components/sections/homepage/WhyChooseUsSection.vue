<template>
    <section class="py-16 px-4 bg-navbg text-center">
      <div class="container mx-auto">
        <h1 class="text-5xl sm:text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-grad-text">
          Why Choose Us
        </h1>
        <p class="text-lg text-gray-300 mb-8">เหตุผลที่คุณควรเลือก Meeting Creative</p>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <!-- ไอคอนสำหรับประสบการณ์ที่ยาวนาน -->
            <div class="flex justify-center items-center text-4xl mb-4">
              <Icon icon="icon-park-outline:time" class="text-4xl text-turqoise"></Icon>
            </div>
            <h3 class="text-xl font-semibold mb-2">ประสบการณ์ที่ยาวนาน</h3>
            <p class="text-gray-600 text-lg">เรามีประสบการณ์ในการให้บริการหลายปี ที่ช่วยให้เรารู้วิธีตอบสนองความต้องการของลูกค้าอย่างเต็มที่</p>
          </div>
  
          <div class="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <!-- ไอคอนสำหรับทีมงานมืออาชีพ -->
            <div class="flex justify-center items-center text-4xl mb-4">
              <Icon icon="fluent-mdl2:teamwork" class="text-4xl text-turqoise"></Icon>
            </div>
            <h3 class="text-xl font-semibold mb-2">ทีมงานมืออาชีพ</h3>
            <p class="text-gray-600 text-lg">ทีมงานของเราประกอบด้วยผู้เชี่ยวชาญ <br>ที่มีความสามารถและความชำนาญเฉพาะทางในแต่ละด้าน</p>
          </div>
  
          <div class="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <!-- ไอคอนสำหรับโซลูชันที่ปรับตามความต้องการ -->
            <div class="flex justify-center items-center text-4xl mb-4">
              <Icon icon="teenyicons:adjust-vertical-alt-outline" class="text-4xl text-turqoise"></Icon>
            </div>
            <h3 class="text-xl font-semibold mb-2">โซลูชันที่ปรับตามความต้องการ</h3>
            <p class="text-gray-600 text-lg">เราเข้าใจว่าธุรกิจแต่ละรายมีความต้องการที่แตกต่างกัน <br>ดังนั้นเราจึงมุ่งเน้นการพัฒนาโซลูชันที่ตรงกับความต้องการของคุณ</p>
          </div>
  
          <div class="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <!-- ไอคอนสำหรับบริการครบวงจร -->
            <div class="flex justify-center items-center text-4xl mb-4">
              <Icon icon="streamline:ai-technology-spark" class="text-4xl text-turqoise"></Icon>
            </div>
            <h3 class="text-xl font-semibold mb-2">บริการครบวงจร</h3>
            <p class="text-gray-600 text-lg">เรามีบริการครบวงจรที่ครอบคลุมตั้งแต่การออกแบบเว็บไซต์ <br>กราฟิกดีไซน์ ระบบเน็ตเวิร์ค และการตลาดออนไลน์</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue';
  </script>
  
  <style scoped></style>
  