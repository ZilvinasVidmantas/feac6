/* eslint-disable no-param-reassign */
import axios, { InternalAxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
