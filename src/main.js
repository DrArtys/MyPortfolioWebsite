import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import VueKinesis from 'vue-kinesis';

createApp(App).use(store).use(router).use(VueKinesis).mount('#app');
