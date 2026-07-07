import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://6a4bbf74f5eab0bb6b6365ed.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});