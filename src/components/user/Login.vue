<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUser } from "@/store/userStore";

const userStore = useUser();
const router = useRouter();

let email = ref("");
let password = ref("");

onMounted(() => {
  if (!userStore.user) {
    router.push("/");
  }
});

const handleSubmit = async () => {
  const resp = await userStore.login(email.value, password.value);
  if (resp) {
    router.push("/");
  }
};
</script>
<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" class="form">
      <h1>Login</h1>

      <v-text-field
        type="email"
        variant="outlined"
        label="Email"
        name="email"
        v-model="email"
      />
      <v-text-field
        type="password"
        variant="outlined"
        label="Password"
        name="password"
        v-model="password"
      />
      <v-btn
        :loading="userStore.isLoading"
        :disabled="userStore.isLoading"
        variant="outlined"
        type="submit"
        class="btn"
        disabled
        >Login</v-btn
      >
    </form>
    <div class="error" v-if="userStore.userError">
      <p>{{ userStore.userError }}</p>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/base.css";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  width: 500px;
}
.form h1 {
  margin-bottom: 0.65rem;
}

.error {
  color: red;
  margin-top: 1rem;
}

.btn {
  transition: 0.4s;
  color: var(--accentColor);
}
.btn:hover {
  transition: 0.6s;
  background-color: var(--accentColor);
  color: white;
  border-radius: 50px;
}
</style>
