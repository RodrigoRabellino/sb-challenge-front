<script setup>
import { useRoute, useRouter, RouterLink } from "vue-router";
import { useUser } from "@/store/userStore";
const router = useRouter();
const route = useRoute();
const userStore = useUser();
</script>
<template>
  <v-app-bar elevation="4" class="appbar">
    <v-container class="container">
      <div class="link__container" @click.prevent="() => handleClick(``)">
        <RouterLink to="/" class="link"> Home</RouterLink>
      </div>
      <div class="options">
        <div class="link__container" @click.prevent="() => handleClick(``)">
          <RouterLink to="/" class="link"> News</RouterLink>
        </div>
        <div class="link__container">
          <RouterLink to="/create" class="link"> New Tutorial</RouterLink>
        </div>
        <div class="link__container" v-if="!userStore.user">
          <RouterLink to="/profile" class="link"> Profile</RouterLink>
        </div>
        <div class="link__container" v-else>
          <RouterLink to="/login" class="link"> Login</RouterLink>
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

.link {
  text-decoration: none;
  color: white;
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
