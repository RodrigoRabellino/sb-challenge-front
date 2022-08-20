import { defineStore } from "pinia";
import { fetchAccessToken } from "../services/user";

export const useUser = defineStore({
  id: "userStore",
  state: () => {
    return { user: {}, userLoading: false, userError: "" };
  },
  actions: {
    async loginUser(email, pass) {
      this.userLoading = true;
      try {
        const resp = fetchUser(email, pass);
        if ((resp.status = 401)) this.userError = "bad credentials";
        if ((resp.status = 500)) this.userError = "Unknown error";
        if ((resp.status = 200)) this.user = { ...resp.data };
      } catch (error) {
        this.userError = "Unknown error";
      }
      this.userLoading = false;
    },
  },
});
