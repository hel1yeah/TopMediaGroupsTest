import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "normalize.css/normalize.css";

import "./assets/scss/main.scss";

createApp(App).use(store).mount("#app");
