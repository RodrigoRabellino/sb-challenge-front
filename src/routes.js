import { createRouter, createWebHistory } from "vue-router";
import MainScreen from "./components/MainScreen.vue";
import CreateScreen from "./components/createScreen/CreateScreen.vue";
import UpdateScreen from "@/components/UpdateScreen.vue";

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
  {
    path: "/update",
    name: "update",
    component: UpdateScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
