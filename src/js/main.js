import components from '@/components';
import { createApp } from 'vue';

const vapp = createApp({
  components
});

vapp.mount('#app')
window.vapp = vapp;

document.addEventListener("DOMContentLoaded", function(event) { 

});

