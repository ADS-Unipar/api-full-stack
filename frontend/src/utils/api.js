import axios from 'axios';
import { toast } from 'react-toastify';
const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Erro na resposta da API:', error.response.data);
      toast(error.response.data);
    } else if (error.request) {
      console.error('Erro na requisição da API:', error.request);
      toast('Erro na requisição da API');
    } else {
      console.error('Erro desconhecido na API:', error.message);
      toast(error.message);
    }
    return Promise.reject(error);
  }
);

export default api;