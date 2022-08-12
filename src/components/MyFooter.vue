<script setup>
import { ref } from "vue";
import { deleteAll } from "../services/tutorial";
import { useRouter } from "vue-router";
import { useTutorial } from "@/store/tutorialStore";
const store = useTutorial();
const router = useRouter();

let openModal = ref(false);

const handleModal = () => (openModal.value = true);

const handleDelete = async () => {
  const resp = await deleteAll();
  if (resp.status === 200) {
    store.cleanStore();
  }
  openModal.value = false;
};
</script>
<template>
  <v-footer class="footer">
    <v-col class="text-center" cols="6">
      <v-btn variant="text" color="warning" @click="handleModal"
        >Delete All Tutorials</v-btn
      >
    </v-col>
    <v-col class="text-center" cols="6">
      2022 - <strong>Rodrigo Rabellino</strong>
    </v-col>
  </v-footer>
  <v-dialog v-model="openModal" width="500">
    <v-card class="my__modal">
      <v-card-title> Are you sure to delete all tutorials? </v-card-title>
      <v-card-actions class="my__modal-actions">
        <v-btn variant="text" rounded color="warning" @click="handleDelete">
          Sure
        </v-btn>
        <v-btn
          variant="text"
          rounded
          color="success"
          @click="() => (openModal = false)"
        >
          NOP
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
@import "../assets/base.css";
.footer {
  position: absolute;
  bottom: 0;
  max-height: 50px;
  width: 100%;
  text-align: center;
  background-color: var(--secondaryColor);
  color: var(--primaryColor);
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
