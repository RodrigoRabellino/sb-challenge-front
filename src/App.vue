<script>
import MainScreen from "./components/MainScreen.vue";
import MyFooter from "./components/MyFooter.vue";
import MyAppBar from "./components/MyAppBar.vue";
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
      <v-container> <MainScreen /></v-container>
    </v-main>
    <MyFooter />
  </v-app>
</template>
