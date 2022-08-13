<script setup>
import { fetchAccessToken } from "@/services/user";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTutorial } from "@/store/tutorialStore";
import { saveTutorial } from "../../services/tutorial";
import { schema } from "./validator";
import validUrl from "valid-url";
import ErrorConnection from "../ErrorConnection.vue";
const store = useTutorial();
const router = useRouter();
let openSnack = ref(false);
let snackMessage = ref("");
let accessToken = ref("");

const title = ref("");
const description = ref("");
const videoUrl = ref("");
const publishedStatus = ref(true);
let loading = ref(false);
let error = ref(false);

onMounted(async () => {
  const resp = await fetchAccessToken();
  if (resp.status === 201) {
    accessToken = resp.data.accessToken;
  }
  console.log("create make token", accessToken);
});

const handleSubmit = async () => {
  loading.value = true;
  error.value = false;
  const data = {
    title: title.value,
    description: description.value,
    videoUrl: videoUrl.value,
    publishedStatus: publishedStatus.value,
  };

  Object.keys(data).forEach((key) => {
    if (key === "videoUrl" && !validUrl.isWebUri(data[key])) {
      return (error.value = true);
    }
    if (data[key] === "") return (error.value = true);
  });
  if (!error.value) {
    const resp = await saveTutorial(data, accessToken);

    if (!resp) {
      loading.value = false;
      snackMessage.value = "Token expired";
      return (openSnack.value = true);
    }

    if (resp.status && resp.status === 201) {
      snackMessage.value = "Tutorial created";
      openSnack.value = true;
      setTimeout(() => {
        return router.push("/");
      }, 1000);
    }
  } else {
    error.value = true;
  }
  loading.value = false;
};
</script>
<template>
  <v-card class="card__container">
    <ErrorConnection v-if="store.tutorialErrors !== ''" />
    <v-form @submit.prevent="handleSubmit" v-if="!store.tutorialErrors">
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
          v-model="publishedStatus"
          class="my_switch"
          hide-details
        />
        <p v-if="error">All Fields are required</p>
        <v-btn variant="outlined" rounded type="submit" v-if="!loading"
          >SAVE</v-btn
        >
        <v-progress-circular indeterminate v-if="loading" />
      </v-row>
    </v-form>
  </v-card>
  <v-snackbar v-model="openSnack" rounded="pill" absolute bottom>
    {{ snackMessage }}
  </v-snackbar>
</template>

<style scoped>
@import "../../assets/base.css";
.card__container {
  padding: 0.65rem 1.5rem;
  border-radius: 15px;
  border-left: 10px solid var(--accentColor);
}
.card__container-error {
  border-left: 10px solid error;
}

.action__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  padding-bottom: 1rem;
}
.action__container button {
  color: var(--accentColor);
}
.my_switch {
  max-width: 100px;
}

.action__container p {
  text-align: center;
  color: red;
  font-size: 16px;
}
</style>
