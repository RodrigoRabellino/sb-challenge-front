import { defineStore } from "pinia";
import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

export const useTutorial = defineStore({
  id: "tutorialStore",
  state: () => {
    return {
      tutorialsList: [],
      tutorialsFiltered: [],
      tutorialCurrent: {},
      tutorialLoading: false,
    };
  },
  actions: {
    async fetchAllTutorials() {
      this.tutorialLoading = true;
      const { data } = await axios.get(`${API_URL}/tutorials`);
      this.tutorialsList = [...data];
      this.tutorialsFiltered = [...data];
      if (this.tutorialsList.length !== 0) console.log("allTutorials ready");
      this.tutorialLoading = false;
    },
    setFilterTutorials(text) {
      console.log(text);
      if (text === "") {
        this.tutorialsFiltered = [...this.tutorialsList];
      } else {
        this.tutorialsFiltered = [
          ...this.tutorialsList.filter((item) =>
            item.title.toLowerCase().includes(text)
          ),
        ];
      }
    },
    async setCurrentTutorial(id) {
      const { data } = await axios.get(`${API_URL}/tutorials/${id}`);
      this.tutorialCurrent = { ...data };
    },
  },
});
