<template>
    <section class="bg-secondbg text-white py-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl sm:text-3xl font-regular mb-10">Our Services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <!-- Web Design -->
          <div class="service-card bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div class="icon mb-4">
              <img src="https://via.placeholder.com/80x80?text=Web+Design" alt="Web Design" class="mx-auto"/>
            </div>
            <h3 class="text-2xl font-semibold mb-2">Web Design</h3>
            <p class="text-lg">ออกแบบเว็บไซต์ ดีไซน์เว็บ ทำเว็บ Web Development ด้วยมาตรฐานสากล รองรับการแสดงทั้งบนมือถือ และ Desktop พร้อมให้บริการทั้งในรูปแบบเว็บส่วนตัว (Web Blog) เว็บร้านค้า SME เว็บองค์กร บริษัท(Corporate) ห้างร้าน รวมไปถึง E-Commerce</p>
          </div>
  
          <!-- Graphic Design -->
          <div class="service-card bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div class="icon mb-4">
              <img src="https://via.placeholder.com/80x80?text=Graphic+Design" alt="Graphic Design" class="mx-auto"/>
            </div>
            <h3 class="text-2xl font-semibold mb-2">Graphic Design</h3>
            <p class="text-lg">บริการกราฟิคดีไซน์ รับออกแบบโลโก้ แบนเนอร์ โปสเตอร์ ปกหนังสือ สื่อสิ่งพิมพ์ต่างๆ รวมไปถึงงานออกแบบออนไลน์ หน้าปก Social Media ตลอดจนการวาง Branding Corporate Identity ให้กับธุรกิจของคุณ</p>
          </div>
  
          <!-- Network Service -->
          <div class="service-card bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div class="icon mb-4">
              <img src="https://via.placeholder.com/80x80?text=Network+Service" alt="Network Service" class="mx-auto"/>
            </div>
            <h3 class="text-2xl font-semibold mb-2">Network Service</h3>
            <p class="text-lg">รับดูแลและออกแบบระบบเน็ตเวิร์คให้คำปรีกษาการเชื่อมต่อระบบเน็ตเวิร์ค ให้ใช้งานได้เสถียร และครอบคลุมทั้งสำนักงานตลอดจนการเดินสายแลน เดินระบบกล้องวงจรปิด โดยบุคลากรที่เชี่ยวชาญด้านเทคนิคแก้ไขปัญหา ได้อย่างตรงจุด รับประกันงานติดตั้ง 1 ปีเต็ม</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
    // Placeholder for any logic or data
  </script>
  
  <style scoped>
    .service-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
  
    .icon img {
      width: 80px;
      height: 80px;
    }
  </style>
  