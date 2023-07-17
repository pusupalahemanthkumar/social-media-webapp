// Importing Required Files and Packages
import { createApp } from 'vue';

import App from './App.vue';
import TheSpinner from "./components/Ui/TheSpinner.vue"
import router from "./router.js";
import store from "./store/index.js";

const app = createApp(App);

app.component('the-spinner',TheSpinner);

// Register global store
app.use(store);

// Register Routes Here
app.use(router);

app.mount("#app");
