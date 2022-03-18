<template>
  <div class="swiper full-slider" ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import { onMounted, ref } from "@vue/runtime-core";
import Swiper, { Navigation, Pagination } from "swiper";
import basket from '@/js/store/basket';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "full-slider",
  setup(props) {
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

    return {
      slider,
    };
  },
};
</script>
<style scoped lang="scss"></style>
