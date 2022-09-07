import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.PROD ? import.meta.env.API_URL : import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetcher = (url: string) => client.get(url).then((res) => res.data)

export { client, fetcher }
