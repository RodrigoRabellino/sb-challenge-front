<script setup>
import { useTutorial } from "@/store/tutorialStore";
import errorCloud from "@/assets/images/error-cloud.svg";
const store = useTutorial();
</script>
<template>
  <div class="text-center">
    <img loading="lazy" :src="errorCloud" alt="error connection" />
    <p>{{ store.tutorialErrors }}.</p>
  </div>
</template>

<style scoped>
.text-center p {
  text-align: center;
  font-size: 20px;
}
.text-center img {
  width: 300px;
}
</style>
