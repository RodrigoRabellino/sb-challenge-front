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
    <v-container>
      <v-main>
        <RouterView />
      </v-main>
    </v-container>
    <MyFooter />
  </v-app>
</template>

<style></style>
