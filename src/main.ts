import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css'; //

// Create the Vue application
createApp(App)
  .use(router)  // Register Vue Router
  .mount('#app'); // Mount the app to the DOM

