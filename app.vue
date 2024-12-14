<template>
  <div>
    <NuxtLayout>
      <!-- ส่วนเนื้อหาของหน้าต่างๆ -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useHead } from "nuxt/app";

useHead({
  title:
    "Meeting Creative - บริษัท มีตติ้ง ครีเอทีฟ จำกัด บริษัทรับออกแบบเว็บไซต์ กราฟิก เน็ตเวิร์ค รวมถึงบริการ ด้านการตลาดออนไลน์",
  meta: [
    {
      name: "description",
      content:
        "Meeting Creative บริษัทรับพัฒนาเว็บไซต์ ออกแบบกราฟิก เน็ตเวิร์ค รวมถึงบริการ ด้านการตลาดออนไลน์",
    },
    {
      name: "keywords",
      content:
        "รับเขียนเว็บโคราช, รับเขียนเว็บไซต์, รับทำเว็บ, รับทำเว็บไซต์, ทำเว็บโคราช, รับทำเว็บไซต์โคราช, รับทำเว็บโคราช, พัฒนาเว็บไซต์, เขียนเว็บโคราช, มีตติ้งครีเอทีฟ, meeting creative, มิตติ้ง ครีเอทีฟ, meeting, มิตติ้ง, มีตติ้ง ครีเอทีฟ, ดูแลเว็บไซต์, เดินสายแลน,ระบบเน็ตเวิร์ค, กล้องวงจรปิด ,ออกแบบกราฟิก, ออกแบบโลโก้เว็บไซต์, ออกแบบกราฟิกโคราช, รับยิงโฆษณา, พัฒนา application โคราช, บริษัทรับเขียนเว็บในโคราช, บริษัทเขียนเว็บไซต์ โคราช, เขียนเว็บโคราช",
    },
    {
      property: "og:title",
      content:
        "Meeting Creative - บริษัท มีตติ้ง ครีเอทีฟ จำกัด บริษัทรับออกแบบเว็บไซต์ กราฟิก เน็ตเวิร์ค รวมถึงบริการ ด้านการตลาดออนไลน์",
    },
    {
      property: "og:description",
      content:
        "Meeting Creative บริษัทรับพัฒนาเว็บไซต์ ออกแบบกราฟิก เน็ตเวิร์ค รวมถึงบริการ ด้านการตลาดออนไลน์",
    },
    {
      property: "og:image",
      content: "https://backend.meeting.co.th/storage/3/meeting-logo.png",
    },
    {
      property: "og:url",
      content: "meeting.co.th",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
});
</script>
