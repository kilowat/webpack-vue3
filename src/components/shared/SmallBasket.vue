<script setup>
import basket from '@/js/store/basket';
import { onMounted } from '@vue/runtime-core';

onMounted(() => {
  basket.init();
});

</script>

<template>
  <div>basket items: {{ basket.items }}</div>
</template>