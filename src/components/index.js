import { defineAsyncComponent } from "vue";
import FloatMenu from "@/components/utils/FloatMenu";
import SmallBasket from '@/components/shared/SmallBasket';
const FullSlider = defineAsyncComponent(() =>
  import("@/components/sliders/FullSlider.vue")
);

export default {
  FloatMenu,
  FullSlider,
  SmallBasket,
};
