import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

export const fetchAccessToken = async () => {
  const resp = await axios.get(`${API_URL}/users/accesstoken`);
  return resp;
};
