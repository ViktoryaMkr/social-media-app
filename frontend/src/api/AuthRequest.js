import axios from "axios";

const axioInstance = axios.create({baseURL: "http://localhost:5000"})

export const login = (formData) => axioInstance.post('/auth/login', formData);
export const register = (formData) => axioInstance.post('/auth/register', formData);