import axios from "axios";

const axioInstance = axios.create({baseURL: "http://localhost:5000"})

export const getUser = (userId) => axioInstance.get(`/user/${userId}`);

export const updateUser = (id, formData) => axioInstance.put(`/user/${id}`, formData);