import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

export const saveTutorial = async (data) => {
  const body = { ...data };
  const resp = await axios.post(`${API_URL}/tutorials`, body);
  return resp;
};
