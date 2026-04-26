import api from "./apiService";

// GET
export const getEventsAPI = async () => {
    return await api.get("/events");
};

// ADD
export const addEventAPI = async (data) => {
    return await api.post("/events", data);
};

// DELETE 
export const deleteEventAPI = async (id) => {
    return await api.delete(`/events/${id}`);
};

// GET bookings
export const getBookingsAPI = async () => {
    return await api.get("/bookings");
};

// DELETE booking
export const deleteBookingAPI = async (id) => {
    return await api.delete(`/bookings/${id}`);
};