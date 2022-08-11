<script setup>
import { useTutorial } from "@/store/tutorialStore";
import { onMounted } from "vue";
import TutorialsView from "./TutorialsView.vue";

const store = useTutorial();

onMounted(() => store.fetchAllTutorials());
</script>
<template>
  <div>
    <TutorialsView />
  </div>
</template>

<style scoped>
.tutorials__container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
