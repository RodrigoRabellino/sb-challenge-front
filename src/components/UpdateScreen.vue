<script setup>
import { ref, onMounted } from "vue";
import { useTutorial } from "@/store/tutorialStore";
import { useRouter } from "vue-router";
import { updateTutorial, deleteTutorial } from "../services/tutorial";
import validUrl from "valid-url";
import ErrorConnection from "./ErrorConnection.vue";
const store = useTutorial();
const router = useRouter();

onMounted(() => {
  if (!store.tutorialCurrent.id) router.push("/");
});

const title = ref(store.tutorialCurrent.title);
const description = ref(store.tutorialCurrent.description);
const videoUrl = ref(store.tutorialCurrent.videoUrl);
const publishedStatus = ref(true);
let loading = ref(false);
let error = ref(false);
let openModal = ref(false);
let openSnack = ref(false);
let snackMessage = ref("");

const handleModal = () => (openModal.value = true);

const handleSubmit = async () => {
  loading.value = true;
  error.value = false;
  const data = {
    id: store.tutorialCurrent.id,
    title: title.value,
    description: description.value,
    videoUrl: videoUrl.value,
    publishedStatus: publishedStatus.value,
    userId: 1,
  };

  Object.keys(data).forEach((key) => {
    if (key === "videoUrl" && !validUrl.isWebUri(data[key])) {
      return (error.value = true);
    }
    if (data[key] === "") return (error.value = true);
  });

  if (!error.value) {
    const resp = await updateTutorial(data);

    if (resp.status === 200) {
      store.setCurrentTutorial(-1);
      router.push("/");
    }
  } else {
    error.value = true;
  }
  loading.value = false;
};

const handleDelete = async () => {
  const date = new Date();
  const resp = await deleteTutorial(store.tutorialCurrent.id);
  if (resp.status) {
    store.setCurrentTutorial(-1);
    snackMessage.value = "Tutorial deleted";
    openSnack.value = true;
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }
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
          label="Public"
          inset
          v-model="publishedStatus"
          class="my_switch"
          hide-details
        />
        <p v-if="error">All Fields are required</p>
        <div>
          <v-btn
            variant="text"
            color="warning"
            rounded
            v-if="!loading"
            @click="handleModal"
            >DELETE</v-btn
          >
          <v-btn variant="outlined" rounded type="submit" v-if="!loading"
            >SAVE</v-btn
          >
        </div>
        <v-progress-circular indeterminate v-if="loading" />
      </v-row>
    </v-form>
  </v-card>
  <v-dialog v-model="openModal" width="500">
    <v-card class="my__modal">
      <v-card-title> Are you sure to delete this tutorial? </v-card-title>
      <v-card-actions class="my__modal-actions">
        <v-btn variant="text" rounded color="warning" @click="handleDelete"
          >Sure</v-btn
        >
        <v-btn
          variant="text"
          rounded
          color="success"
          @click="() => (openModal = false)"
          >NOP</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-snackbar v-model="openSnack" rounded="pill" absolute bottom>
    {{ snackMessage }}
  </v-snackbar>
</template>

<style scoped>
@import "../assets/base.css";
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
.my__modal {
  border-top: 3px solid red;
  padding: 1rem 2rem;
}

.my__modal-actions {
  justify-content: space-between;
}

.action__container p {
  text-align: center;
  color: red;
  font-size: 16px;
}
</style>
