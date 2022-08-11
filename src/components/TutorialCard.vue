<script setup>
import { useTutorial } from "@/store/tutorialStore";
import controllerImg from "@/assets/images/controller.svg";
const store = useTutorial();

const handleUpdate = () => console.log(store.tutorialCurrent.id);
const handleVideo = () =>
  window.open(store.tutorialCurrent.videoUrl, { _blank: true });
</script>
<template>
  <v-card id="id" class="card__container" v-if="store.tutorialCurrent.id">
    <v-card-title class="card__title">
      {{ store.tutorialCurrent.title }}
    </v-card-title>
    <v-card-text>{{ store.tutorialCurrent.description }}</v-card-text>
    <div class="user__data">
      <v-card-subtitle>
        <a href="#"> {{ store.tutorialCurrent.user.username }}</a>
      </v-card-subtitle>
      <v-card-actions>
        <v-btn outlined rounded class="btn" @click="handleUpdate"> Edit </v-btn>
        <v-btn variant="outlined" rounded class="btn" @click="handleVideo">
          Video
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
  <div class="text-center" v-if="!store.tutorialCurrent.id">
    <img :src="controllerImg" alt="icon controller" />
    <p>Select any tutorial</p>
  </div>
</template>

<style scoped>
@import "../assets/base.css";

.user__data {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__title::first-letter {
  text-transform: uppercase;
}

.btn {
  color: var(--accentColor);
}

a {
  text-decoration: none;
  color: var(--accentColor);
}
a:hover {
  text-decoration: underline;
}
.card__container {
  padding: 1rem;
  border-radius: 15px;
  border-left: 10px solid var(--accentColor);
}

.text-center p {
  text-align: center;
  font-size: 20px;
  margin-top: 2rem;
}
.text-center img {
  transform: rotate(-10deg);
  width: 300px;
}
</style>
