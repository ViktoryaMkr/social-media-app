import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";


export const createPost = async(req, res) => {
    const newPost = new PostModel(req.body);

    try {
        await newPost.save();
        res.status(200).json("Post created")
    } catch (error) {
        res.status(500).json(error);
        
    }
}

export const getPost = async(req, res) => {
    const id = req.params.id;

    try {
        const post = await PostModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

