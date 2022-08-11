<script>
import MainScreen from "./components/MainScreen.vue";
import MyFooter from "./components/MyFooter.vue";
import MyAppBar from "./components/MyAppBar.vue";
import { RouterView } from "vue-router";
export default {
  name: "App",
  components: { MainScreen, MyFooter, MyAppBar },
  data: () => ({}),
};
</script>
<template>
  <v-app>
    <MyAppBar />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    <MyFooter />
  </v-app>
</template>
