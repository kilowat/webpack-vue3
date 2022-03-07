import components from '@/components';
import { createApp } from 'vue';

const app = createApp({

});


components.forEach(component => {
  app.component(component.name, component)
})

app.mount('#app')
