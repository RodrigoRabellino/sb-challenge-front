import { createRouter, createWebHistory } from "vue-router";
import MainScreen from "./components/MainScreen.vue";
import CreateScreen from "./components/CreateScreen.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainScreen,
  },
  {
    path: "/create",
    name: "create",
    component: CreateScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
