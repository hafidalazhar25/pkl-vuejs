import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import todo from './store/todos';
import store from './store/index';

const app = createApp(App);

// Plugin
app.use(store);
app.use(todo);
app.use(router).mount('#app');
