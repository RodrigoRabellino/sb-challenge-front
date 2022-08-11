<script setup>
import { useTutorial } from "@/store/tutorialStore";
import { onMounted } from "vue";
import TutorialsView from "./TutorialsView.vue";

const store = useTutorial();

onMounted(() => store.fetchAllTutorials());
</script>
<template>
  <TutorialsView />
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
