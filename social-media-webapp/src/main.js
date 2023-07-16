// Importing Required Files and Packages
import { createApp } from 'vue';

import App from './App.vue';
import router from "./router.js";

const app = createApp(App);

// Register Routes Here
app.use(router);

app.mount("#app");
