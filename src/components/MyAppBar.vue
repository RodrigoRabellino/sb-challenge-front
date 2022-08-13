<script setup>
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const handleClick = async (path) => {
  router.push(`/${path}`);
};
</script>
<template>
  <v-app-bar elevation="4" class="appbar">
    <v-container class="container">
      <div class="link__container" @click.prevent="() => handleClick(``)">
        <p>Home</p>
      </div>
      <div class="options">
        <div class="link__container" @click.prevent="() => handleClick(``)">
          <p>News</p>
        </div>
        <div
          class="link__container"
          @click.prevent="() => handleClick(`create`)"
        >
          <p>New Tutorial</p>
        </div>
        <div class="link__container">
          <p>Profile</p>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
@import "../assets/base.css";
.appbar {
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: var(--primaryColor);
  color: var(--secondaryColor);
}
.container {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link__container {
  transition: 0.4s;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  padding: 5px 16px;
}
.link__container:hover {
  transition: 0.4s;
  border-bottom: 2px solid #fcfaf6;
}
</style>
