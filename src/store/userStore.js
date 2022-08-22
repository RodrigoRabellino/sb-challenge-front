import { defineStore } from "pinia";
import { fetchAccessToken, fetchUser } from "../services/user";

export const useUser = defineStore({
  id: "userStore",
  state: () => {
    return { user: {}, isLoading: false, userError: "" };
  },
  actions: {
    async login(email, pass) {
      this.isLoading = true;
      this.userError = "";
      try {
        const resp = await fetchUser(email, pass);
        if (resp.status === 404)
          return (this.userError = "Email not registered");
        if (resp.status === 500) return (this.userError = "Unknown error");
        if (resp.status === 401) return (this.userError = "Bad credentials");
        if (resp.status === 200) {
          this.user = { ...resp.data };
          return true;
        }
      } catch (error) {
        console.log("error in login", error);
        this.userError = "Unknown error";
      } finally {
        this.isLoading = false;
      }
    },
    logOut() {
      this.user = {};
    },
  },
});
