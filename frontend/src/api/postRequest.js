import axios from "axios";

const axioInstance = axios.create({baseURL: "http://localhost:5000"})

export const postTimeline = (id) => axioInstance.get(`/post/${id}/timeline`);