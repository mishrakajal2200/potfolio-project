
import api from "./api";

export const submitContact = async (contactData) => {
  const response = await api.post("/", contactData);
  return response.data;
};
