import * as lucideIcons from "lucide-vue-next";
import { createApp } from "vue";
import App from "./App.vue";
import { i18n } from "./plugins/i18n";
import router from "./router";
import "./style.css";

const app = createApp(App);

for (const [key, component] of Object.entries(lucideIcons)) {
  app.component(key, component);
}

app.use(i18n);
app.use(router);

app.mount("#app");
