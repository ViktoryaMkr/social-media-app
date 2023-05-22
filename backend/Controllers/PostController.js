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

export const updatePost = async(req, res) => {
    const id = req.params.id;
    const { userId, userAdminStatus } = req.body;

    try {

        var post = await PostModel.findById(id);
        
        if (post.userId === userId || userAdminStatus) {
            await post.updateOne( {$set : req.body} );
            res.status(200).json("Post updated");
        }else {
            res.status(403).json("Action denied. You have no permission to update this post");
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

export const deletePost = async(req, res) => {
    const id = req.params.id;
    const { userId, userAdminStatus } = req.body;

    try {

        var post = await PostModel.findById(id);
        
        if (post.userId === userId || userAdminStatus) {
            await post.deleteOne();
            res.status(200).json("Post deleted");
        }else {
            res.status(403).json("Action denied. You have no permission to delete this post");
        }

    } catch (error) {
        res.status(500).json(error);
    }
}