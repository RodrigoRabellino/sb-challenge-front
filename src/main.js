import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";
import router from "./routes";

const pinia = createPinia();

loadFonts();

createApp(App).use(pinia).use(vuetify).use(router).mount("#app");
