import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

export const fetchAccessToken = async () => {
  const resp = await axios.get(`${API_URL}/users/accesstoken`);
  return resp;
};

export const fetchUser = async (mail, pass) => {
  body = { mail, pass };
  const resp = await axios.post(`${API_URL}/users`, body);
  return resp;
};
