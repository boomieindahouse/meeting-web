// composables/useSwiperConfig.js
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";

export function useSwiperConfig() {
  const modules = [Navigation, Pagination, Autoplay, EffectCoverflow];

  const swiperConfig = {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      scale: 0.6,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
  };

  return { modules, swiperConfig };
}
