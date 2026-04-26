import api from "./apiService";

export const getEventsAPI = async () => {
    return await api.get("/events");
};