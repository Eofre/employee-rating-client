import axios, { type AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: `http://localhost:5000`,
  withCredentials: true
});

export default api;
