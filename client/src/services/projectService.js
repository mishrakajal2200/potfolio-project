
import axios from "axios";

// Frontend .env:
// VITE_API_URL=http://localhost:5000/api

const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000/api"
).replace(/\/+$/, "");

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

export default api;
