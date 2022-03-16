
import { defineAsyncComponent } from 'vue';
import FloatMenu from '@/components/utils/FloatMenu';
const FullSlider = defineAsyncComponent(() =>
  import('@/components/sliders/FullSlider.vue')
)

export default  
{
    FloatMenu,
    FullSlider,
};
