// composables/useModal.js
import { ref } from "vue";

export function useModal() {
  const isModalOpen = ref(false);
  const currentImage = ref("");

  const openModal = (image) => {
    currentImage.value = image;
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };

  return {
    isModalOpen,
    currentImage,
    openModal,
    closeModal,
  };
}
