import axios from "axios";

const axioInstance = axios.create({baseURL: "http://localhost:5000"})

export const getUser = (userId) => axioInstance.get(`/user/${userId}`);

export const updateUser = (id, formData) => axioInstance.put(`/user/${id}`, formData);

export const getAllUsers = () => axioInstance.get('/user');

export const followUser = (id, data) => axioInstance.put(`/user/${id}/follow`, data);

export const unfollowUser = (id, data) => axioInstance.put(`/user/${id}/unfollow`, data);