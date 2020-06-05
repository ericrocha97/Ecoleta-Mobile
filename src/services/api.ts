import axios from 'axios';


const api = axios.create({
    baseURL: 'https://ecoleta-api.ericrocha.dev/'
});

export default api;