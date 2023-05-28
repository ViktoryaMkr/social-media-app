import axios from "axios";

const axioInstance = axios.create({baseURL: "http://localhost:5000"})

export const getUser = (userId) => axioInstance.get(`/user/${userId}`);