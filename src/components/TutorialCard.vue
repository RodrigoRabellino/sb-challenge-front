<script setup>
import { format, subDays } from "date-fns";
import { useTutorial } from "@/store/tutorialStore";
const store = useTutorial();
console.log(store.tutorialCurrent.createdAt);

const handleUpdate = () => console.log(store.tutorialCurrent.id);
const handleVideo = () =>
  window.open(store.tutorialCurrent.videoUrl, { _blank: true });
</script>
<template>
  <keep-alive>
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
          <v-btn outlined rounded class="btn" @click="handleUpdate">
            Edit
          </v-btn>
          <v-btn variant="outlined" rounded class="btn" @click="handleVideo">
            Video
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </keep-alive>
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
</style>
