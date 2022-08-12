import { defineStore } from "pinia";
import { querySearch, fetchTutorialById, fetchAll } from "@/services/tutorial";

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
        const resp = await fetchAll();
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
      const resp = await fetchTutorialById(id);
      this.tutorialCurrent = { ...resp };
    },
    cleanStore() {
      this.tutorialsList = [];
      this.tutorialsFiltered = [];
      this.tutorialCurrent = {};
      this.tutorialLoading = false;
      this.tutorialErrors = "";
    },
  },
});
