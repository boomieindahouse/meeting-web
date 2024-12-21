// composables/useSwiperConfig.js
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";

export function useSwiperConfig() {
  const modules = [Navigation, Pagination, Autoplay, EffectCoverflow];

  const swiperConfig = {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
      scale: 0.8,  // slides ข้างๆ จะมีขนาด 80% ของ slide ปัจจุบัน
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale: 0.8,
        },
      }
    }
  };

  return { modules, swiperConfig };
}