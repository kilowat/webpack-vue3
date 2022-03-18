<template>
  <div>basket items: {{ items }}</div>
</template>
<script>
import basket from '@/js/store/basket';
import { onMounted } from '@vue/runtime-core';

export default {
  name: 'small-basket',
  setup() {
    onMounted(() => {
      basket.init();
    });
    return {
      items: basket.items,
    }
  },
}
</script>