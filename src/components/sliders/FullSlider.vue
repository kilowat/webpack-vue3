<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    src: "/uploads/slide-1.png",
  },
  {
    id: 2,
    src: "/uploads/slide-1.png",
  }
];

Swiper.use([Navigation, Pagination]);
const slider = ref(null);
const sliderInit = (rootEl) => {
  const sw = new Swiper(rootEl, {
    direction: "horizontal",
    pagination: {
      el: rootEl.querySelector(".swiper-pagination"),
    },
    navigation: {
      nextEl: rootEl.querySelector(".swiper-button-next"),
      prevEl: rootEl.querySelector(".swiper-button-prev"),
    },
  });
};


onMounted(() => {
  sliderInit(slider.value);
});

</script>

<template>
  <div class="swiper full-slider" ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in slides" :key="slide.id">
        <img class="img-slide" :src="slide.src" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<style scoped lang="scss">
  .img-slide{
    object-fit: cover;
    height: 600px;
    max-width: 100%;
  }
</style>
