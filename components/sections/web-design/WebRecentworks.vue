<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import '@/assets/css/work-section.css'

const sectionRef = ref(null)
const works = ref([
    { image: 'https://placehold.co/800x500?text=Project+1', visible: true, exiting: false },
    { image: 'https://placehold.co/800x500?text=Project+2', visible: false, exiting: false },
    { image: 'https://placehold.co/800x500?text=Project+3', visible: false, exiting: false },
    { image: 'https://placehold.co/800x500?text=Project+4', visible: false, exiting: false },
    { image: 'https://placehold.co/800x500?text=Project+5', visible: false, exiting: false },
    { image: 'https://placehold.co/800x500?text=Project+6', visible: false, exiting: false },
    { image: 'https://placehold.co/800x500?text=Project+7', visible: false, exiting: false },
    { image: 'https://placehold.co/800x500?text=Project+8', visible: false, exiting: false }
])

let currentIndex = 0
let isAnimating = false

function handleScroll(event) {
    if (isAnimating) return

    if (event.deltaY > 0 && currentIndex < works.value.length - 1) {
        // Scrolling down
        isAnimating = true

        // Start exit animation for current image
        works.value[currentIndex].exiting = true

        // After a small delay, show next image
        setTimeout(() => {
            works.value[currentIndex + 1].visible = true
            works.value[currentIndex].visible = false
            works.value[currentIndex].exiting = false
            currentIndex++
            isAnimating = false
        }, 400)

    } else if (event.deltaY < 0 && currentIndex > 0) {
        // Scrolling up
        isAnimating = true

        // Start exit animation for current image
        works.value[currentIndex].exiting = true

        // After a small delay, show previous image
        setTimeout(() => {
            works.value[currentIndex].visible = false
            works.value[currentIndex].exiting = false
            works.value[currentIndex - 1].visible = true
            currentIndex--
            isAnimating = false
        }, 400)
    }

    // Prevent default scroll
    event.preventDefault()
}

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.addEventListener('wheel', handleScroll, { passive: false })
                } else {
                    window.removeEventListener('wheel', handleScroll)
                }
            })
        },
        { threshold: 0.5 }
    )

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
})

onUnmounted(() => {
    window.removeEventListener('wheel', handleScroll)
})
</script>

<template>
    <section class="works-section" ref="sectionRef">
        <h1 class="h1-section sm:h3-res text-transparent bg-clip-text bg-grad-text">
            Web Design Recent Works
        </h1>

        <p class="works-description">
            เรามีบริการออกแบบเว็บไซต์ที่ตอบโลกทั้งในแง่ของไซต์ที่วางขาย
            และการใช้งานที่สะดวกหลายสำหรับทุกธุรกิจไม่ว่าจะขนาดเล็กหรือขนาดใหญ่
        </p>

        <button class="works-button">ดูผลงานของเรา</button>

        <div class="works-container">
            <div v-for="(work, index) in works" :key="index" class="work-item" :style="{ zIndex: works.length - index }"
                :class="{
                    visible: work.visible,
                    exiting: work.exiting
                }">
                <img :src="work.image" :alt="`Work ${index + 1}`">
            </div>
        </div>
    </section>
</template>