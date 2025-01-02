<script setup>
import ContactTitle from "@/components/sections/contact/ContactTitle.vue";
import ContactSection from "@/components/sections/contact/ContactSection.vue";
import ClientLogoSlider from "~/components/common/ClientLogoSlider.vue";
import GetintouchSection from "~/components/sections/homepage/GetintouchSection.vue";
import ContactForm from "~/components/sections/contact/ContactForm.vue";
</script>

<template>
  <div>
    <ContactTitle />
    <ContactSection />
    <ContactForm />
    <ClientLogoSlider />
    <GetintouchSection />
  </div>
</template>
