<script setup>
import basket from '@/js/store/basket';
import { onMounted } from '@vue/runtime-core';

onMounted(() => {
  basket.init();
});

 const items = basket.items;
</script>

<template>
  <div>basket items: {{ items }}</div>
</template>