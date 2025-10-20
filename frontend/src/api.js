import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.140.191:8000/api", // Ton backend Laravel
});

export default api;
