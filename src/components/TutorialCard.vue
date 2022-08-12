<script setup>
import { useTutorial } from "@/store/tutorialStore";
import controllerImg from "@/assets/images/controller.svg";
import emptyGif from "@/assets/images/empty-gif.gif";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useTutorial();

const handleUpdate = () => {
  router.push("/update");
};
const handleVideo = () =>
  window.open(store.tutorialCurrent.videoUrl, { _blank: true });
</script>

<template>
  <v-card id="id" class="card__container" v-if="store.tutorialCurrent.id">
    <v-card-title class="card__title">
      {{ store.tutorialCurrent.title }}
    </v-card-title>
    <v-card-text>{{ store.tutorialCurrent.description }}</v-card-text>

    <v-card-actions class="card__action">
      <v-btn outlined rounded class="btn" @click="handleUpdate"> Edit </v-btn>
      <v-btn variant="outlined" rounded class="btn" @click="handleVideo">
        Video
      </v-btn>
    </v-card-actions>
  </v-card>
  <div
    class="text-center"
    v-if="!store.tutorialCurrent.id && store.tutorialsList.length !== 0"
  >
    <img class="controller__img" :src="controllerImg" alt="icon controller" />
    <p>Select any tutorial</p>
  </div>
  <div class="text-center" v-if="store.tutorialsList.length === 0">
    <img :src="emptyGif" alt="empty gif" />
    <p>Ups... nothing to see.</p>
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
.card__action {
  display: flex;
  justify-content: space-between;
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
  margin-top: 1rem;
  width: 300px;
}
.controller__img {
  transform: rotate(-10deg);
}
</style>
