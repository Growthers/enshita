import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
