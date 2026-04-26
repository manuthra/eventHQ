import axios from "axios";

const api = axios.create({
    baseURL:"https://eventhq-s55w.onrender.com"
});

export default api;