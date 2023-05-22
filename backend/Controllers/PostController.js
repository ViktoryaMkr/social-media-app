import PostModel from "../Models/postModel.js";
import mongoose, { mongo } from "mongoose";
import UserModel from "../Models/userModel.js";


export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body);

    try {

        await newPost.save();
        res.status(200).json("Post created")
    } catch (error) {
        res.status(500).json(error);

    }
}

export const getPost = async (req, res) => {
    const id = req.params.id;

    try {

        const post = await PostModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatePost = async (req, res) => {
    const id = req.params.id;
    const { userId, userAdminStatus } = req.body;

    try {

        const post = await PostModel.findById(id);

        if (post.userId === userId || userAdminStatus) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("Post updated");
        } else {
            res.status(403).json("Action denied. You have no permission to update this post");
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

export const deletePost = async (req, res) => {
    const id = req.params.id;
    const { userId, userAdminStatus } = req.body;

    try {

        const post = await PostModel.findById(id);

        if (post.userId === userId || userAdminStatus) {
            await post.deleteOne();
            res.status(200).json("Post deleted");
        } else {
            res.status(403).json("Action denied. You have no permission to delete this post");
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

// liked and unliked
export const likePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;

    try {
        const post = await PostModel.findById(id);

        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } });
            res.status(200).json("liked");
        } else {
            await post.updateOne({ $pull: { likes: userId } });
            res.status(200).json("unliked");
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

export const getTimelinePosts = async (req, res) => {
    const id = req.params.id;

    try {
        const currentUserPosts = await PostModel.find({ userId: id });
        const followedUserPosts = await UserModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(id)
                }
            },
            {
                $lookup: {
                    from : "posts",
                    localField: "followings",
                    foreignField: "userId",
                    as : "followedUserPosts"
                }
            },
            {
                $project: {
                    followedUserPosts: 1,
                    _id: 0
                }
            }
        ]);

        res
        .status(200)
        .json(currentUserPosts.concat(...followedUserPosts[0].followedUserPosts)
        .sort((a,b)=> {
            return b.createdDate - a.createdDate;
        })
        )

    } catch (error) {
        res.status(500).json(error);
    }

}