<script setup>
import { ref } from "vue";
import TutorialCard from "./TutorialCard.vue";
import { useTutorial } from "@/store/tutorialStore";
const store = useTutorial();

let inputSearch = ref("");

const handleSearchChange = (e) => {
  let text = e.target.value.toLowerCase();
  store.setFilterTutorials(text);
};

const handleClick = async (tutoId) => {
  await store.setCurrentTutorial(tutoId);
};
</script>
<template>
  <div class="container">
    <div class="tutorial__list__container">
      <v-text-field
        variant="outlined"
        density="comfortable"
        v-model="inputSearch"
        placeholder="Search"
        v-on:input="handleSearchChange"
        :disabled="store.tutorialLoading"
      />
      <div class="tutorial__list" v-if="store.tutorialsFiltered !== 0">
        <v-card
          v-for="tuto in store.tutorialsFiltered"
          :key="tuto.id"
          class="tuto__title"
          @click.prevent="() => handleClick(tuto.id)"
        >
          <p>{{ tuto.title }}</p>
        </v-card>
      </div>
    </div>
    <div class="tutorials__container">
      <TutorialCard />
    </div>
  </div>
</template>

<style scoped>
@import "../assets/base.css";
.tutorial__list__container {
  width: 25%;
}
.v-field__input .v-field__input {
  border-radius: 50px;
}

.tuto__title {
  display: flex;
  transition: 0.4s;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  padding: 1.65rem 0.65rem;
  border-left: 5px solid var(--accentColor);
  align-items: center;
}

.tuto__title:hover {
  transition: 0.4s;
  transform: translateY(-5px);
}

.tuto__title p {
  width: 20ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tutorial__list {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1rem 0;
  gap: 15px;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.tutorial__list::-webkit-scrollbar {
  display: none;
}
.container {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-items: center;
}
.tutorials__container {
  width: 75%;
}
</style>
