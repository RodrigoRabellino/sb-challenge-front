<script setup>
import { ref } from "vue";
import TutorialCard from "./TutorialCard.vue";
import { useTutorial } from "@/store/tutorialStore";
const store = useTutorial();
const { tutorialsFiltered, setFilterTutorials, setCurrentTutorial } = store;

let inputSearch = ref("");

const handleSearchChange = (e) => {
  let text = e.target.value.toLowerCase();
  setFilterTutorials(text);
};

const handleClick = async (tutoId) => {
  await setCurrentTutorial(tutoId);
};
</script>
<template>
  <div class="container" v-if="tutorialsFiltered.length !== 0">
    <div class="tutorial__list__container">
      <input
        outlined
        v-model="inputSearch"
        placeholder="Search"
        v-on:input="handleSearchChange"
      />
      <div class="tutorial__list">
        <v-card
          v-bind:is="tutorialsFiltered"
          v-for="tuto in tutorialsFiltered"
          :key="tuto.id"
          class="tuto__title"
          @click.prevent="() => handleClick(tuto.id)"
        >
          <p>{{ tuto.title }}</p>
        </v-card>
      </div>
    </div>
    <div class="tutorials__container" v-if="store">
      <TutorialCard />
    </div>
  </div>
</template>

<style scoped>
@import "../assets/base.css";
.tutorial__list__container {
  width: 25%;
}

.tuto__title {
  display: flex;
  transition: 0.4s;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  padding: 1rem 0.65rem;
  border-left: 10px solid var(--accentColor);
  transform: translateY(-5px);
  align-items: center;
}

.tuto__title:hover {
  transition: 0.4s;
  transform: translateY(-5px);
}

.tuto__title p {
  white-space: nowrap;
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

input {
  width: 100%;
  transition: 0.4s;
  padding: 0.65rem 1rem;
  background-color: var(--primaryColor);
  color: var(--secondaryColor);
  border-radius: 50px;
  border: 2px solid var(--primaryColor);
}
input:focus-visible {
  transition: 0.4s;
  border: none;
  outline: none;
  border: 2px solid var(--accentColor);
}
</style>
