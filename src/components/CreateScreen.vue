<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { saveTutorial } from "../services/tutorial";
const router = useRouter();

const title = ref("");
const description = ref("");
const videoUrl = ref("");
const publishedStatus = ref(true);

const handleSubmit = async () => {
  const resp = await saveTutorial({
    title: title.value,
    description: description.value,
    videoUrl: videoUrl.value,
    publishedStatus: publishedStatus.value,
    userId: 1,
  });
  if (resp.status === 201) {
    router.push("/");
  }
};
</script>
<template>
  <v-card class="card__container">
    <v-form @submit.prevent="handleSubmit">
      <v-row>
        <v-col cols="12">
          <v-text-field
            variant="underlined"
            label="Title"
            v-model="title"
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            variant="underlined"
            label="Video URL"
            v-model="videoUrl"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            variant="underlined"
            label="Description"
            v-model="description"
          />
        </v-col>
      </v-row>
      <v-row class="action__container">
        <v-switch
          inset
          label="Public"
          v-model="publishedStatus"
          class="my_switch"
          hide-details
        />
        <v-btn variant="outlined" rounded type="submit">SAVE</v-btn>
      </v-row>
    </v-form>
  </v-card>
</template>

<style scoped>
@import "../assets/base.css";
.card__container {
  padding: 0.65rem 1.5rem;
  border-radius: 15px;
  border-left: 10px solid var(--accentColor);
}

.action__container {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  padding-bottom: 1rem;
}
.action__container button {
  color: var(--accentColor);
}
</style>
