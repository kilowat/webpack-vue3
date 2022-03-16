import components from '@/components';
import { createApp } from 'vue';

const app = createApp({
  components
});

/*
components.forEach(component => {
  console.log(component);
  app.component(component.name, component)
})
*/
app.mount('#app')
