import { defineStore } from "pinia";
import axios from "axios";
import { querySearch } from "@/services/tutorial";
const API_URL = process.env.VUE_APP_API_URL;

export const useTutorial = defineStore({
  id: "tutorialStore",
  state: () => {
    return {
      tutorialsList: [],
      tutorialsFiltered: [],
      tutorialCurrent: {},
      tutorialLoading: false,
      tutorialErrors: "",
    };
  },
  actions: {
    async fetchAllTutorials() {
      this.tutorialLoading = true;
      this.tutorialErrors = "";

      try {
        const resp = await axios.get(`${API_URL}/tutorials`);
        if (resp.data) {
          this.tutorialsList = [...resp.data];
          this.tutorialsFiltered = [...resp.data];
        } else {
          this.tutorialErrors = "Cannot connect the computer to the server";
        }
      } catch (error) {
        this.tutorialErrors = "Cannot connect the computer to the server";
      }
      this.tutorialLoading = false;
    },
    async setFilterTutorials(text) {
      this.tutorialsFiltered = [];
      this.tutorialLoading = true;
      if (text === "") {
        this.tutorialsFiltered = [...this.tutorialsList];
      } else {
        const resp = await querySearch(text);
        this.tutorialsFiltered = [...resp.data];
      }
      this.tutorialLoading = false;
    },
    async setCurrentTutorial(id) {
      if (id === -1) return (this.tutorialCurrent = {});

      const { data } = await axios.get(`${API_URL}/tutorials/${id}`);
      this.tutorialCurrent = { ...data };
    },
  },
});
