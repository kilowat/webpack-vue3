import { defineAsyncComponent } from "vue";
import SmallBasket from '@/components/shared/SmallBasket';

const FullSlider = defineAsyncComponent(() =>
  import("@/components/sliders/FullSlider.vue")
);
export default {
  FullSlider,
  SmallBasket,
};
