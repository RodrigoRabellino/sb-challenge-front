import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

export const saveTutorial = async (data) => {
  const body = { ...data };
  const resp = await axios.post(`${API_URL}/tutorials`, body);
  return resp;
};

export const querySearch = async (query) => {
  const resp = await axios.get(`${API_URL}/tutorials/?search=${query}`);
  return resp;
};

export const updateTutorial = async (data) => {
  const body = { ...data };
  const resp = await axios.put(`${API_URL}/tutorials/${data.id}`, body);
  return resp;
};

//softDelete
export const deleteTutorial = async (id) => {
  console.log(id);
  const resp = await axios.delete(`${API_URL}/tutorials/${id}`);
  return resp;
};
