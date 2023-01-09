import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getEntries = async () => {
  const response = await api.get(`/entries?_sort=id&_order=desc`);
  return response.data;
};

export const createEntry = async (newFormData) => {
  const response = await api.post(`/entries`, newFormData);
  return response.data;
};

const deleteEntryFn = async (id) => {
  await axios.delete(`/entries/${id}`);
  setProductivityData(productivityData.filter((item) => item.id !== id));
  setModalOpen(false);
  setEntryId(null);
};
