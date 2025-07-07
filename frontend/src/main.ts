import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import { router } from './router/index.ts';


const app = createApp(App);
app.use(router).use(vuetify).mount("#app");
