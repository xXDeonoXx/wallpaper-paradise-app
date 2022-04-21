import axios from 'axios';
import {API_URL} from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export default api;
