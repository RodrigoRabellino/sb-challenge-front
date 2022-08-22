import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

export const fetchAccessToken = async () => {
  const resp = await axios.get(`${API_URL}/users/accesstoken`);
  return resp;
};

export const fetchUser = async (email, password) => {
  const body = { email, password };
  try {
    const resp = await axios.post(`${API_URL}/login`, body);
    return resp;
  } catch (error) {
    console.log("fetchuserError", error);
    return error.response;
  }
};
