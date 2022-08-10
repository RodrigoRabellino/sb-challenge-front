<script setup>
import { formatDistance, subDays } from "date-fns";
import { useTutorial } from "@/store/tutorialStore";
const store = useTutorial();
const { createdAt, user, id, description, title } = store.tutorialCurrent;
// const createdDate = formatDistance(new Date(), new Date(createdAt), {
//   addSuffix: true,
// });
const handleReadMore = () => console.log(id);
</script>
<template>
  <keep-alive>
    <v-card
      id="id"
      class="card__container"
      v-if="id"
      v-bind:is="store.tutorialCurrent"
    >
      <v-card-title class="card__title">{{ title }}</v-card-title>
      <v-card-text>{{ description }}</v-card-text>
      <div class="user__data">
        <v-card-subtitle>
          <a href="#"> {{ user.username }}</a> -
        </v-card-subtitle>
        <v-card-actions>
          <v-btn outlined rounded class="btn" @click="handleReadMore"
            >Read More</v-btn
          >
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
  transition: 0.4s;
  padding: 1rem;
  border-radius: 15px;
  border-left: 10px solid var(--primaryColor);
}
.card__container:hover {
  transition: 0.4s;
  border-left: 10px solid var(--accentColor);
  transform: translateY(-5px);
}
</style>
