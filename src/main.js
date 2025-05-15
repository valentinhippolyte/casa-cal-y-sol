import { createApp } from "vue";
import { icons } from "../src/plugins/icons.js";
import App from "./App.vue";
import { i18n } from "./plugins/i18n";
import router from "./router";
import "./style.css";

const app = createApp(App);

for (const [key, component] of Object.entries(icons)) {
  app.component(key, component);
}

app.use(i18n);
app.use(router);

app.mount("#app");
