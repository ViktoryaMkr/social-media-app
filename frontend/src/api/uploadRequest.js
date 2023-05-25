import axios from "axios";

const axioInstance = axios.create({baseURL: "http://localhost:5000"})

export const uploadImage = (formData) => axioInstance.post('/upload/', formData);