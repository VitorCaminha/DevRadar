import axios from 'axios';
import IP from './utils/IP';

const api = axios.create({
    baseURL: `http://${IP}:3333`,
});

export default api;