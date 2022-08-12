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

<style>
#app {
  max-height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#app::-webkit-scrollbar {
  display: none;
}
</style>
