import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// get user
export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);

        if (user) {
            // remove password from response
            const { password, ...noPasswordData } = user._doc

            res.status(200).json(noPasswordData);
        } else {
            res.status(404).json("User dosen't exist");
        }
    } catch (error) {
        res.status(500).json(error);

    }
}

export const getAllUsers = async (req, res) => {
    try {
        let users = await UserModel.find();

        users = users.map((user) => {
            const {password, ...data} = user._doc;
            return data
        })
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json(error)
    }
}


// update user
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { _id, currentUserAdminStatus, password } = req.body;
    console.log(_id +" : "+ id);
    console.log(req.body);

    if (id === _id || currentUserAdminStatus) {
        try {
            console.log("here 1");
            console.log("here 2");
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }
            console.log("here 3");

            console.log(req.body);
            
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
            console.log("here 4");
            const token = jwt.sign({
                username: user.username,
                id: user._id
            }, process.env.JWT_PKEY, { expiresIn: '1h' })
            
            console.log("here 5");
            res.status(200).json({user, token});
            console.log("here 6");

        } catch (error) {
            console.log(error);
            res.status(404).json(error);
        }
    } else {
        res.status(403).json("Action denied. You have no permission to update this user");
    }
}


// delete user
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId, currentUserAdminStatus } = req.body;
    if (id === currentUserId || currentUserAdminStatus) {
        try {
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("User deleted")
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("Action denied. You have no permission to delete this user");
    }
}


export const followUser = async (req, res) => {
    const id = req.params.id;

    const { _id } = req.body;
    if (id === _id) {
        res.status(403).json("Action denied.")
    }

    try {
        const userFollowed = await UserModel.findById(id);
        const userFollowing = await UserModel.findById(_id);

        if (!userFollowed.followers.includes(_id)) {
            await userFollowed.updateOne({ $push: { followers: _id } });
            await userFollowing.updateOne({ $push: { followings: id } });
            res.status(200).json(`${userFollowed.username} followed`);
        } else {
            res.status(403).json(`You are already following ${userFollowed.username}`)
        }

    } catch (error) {
        res.status(500).json(error);
    }
}


export const unfollowUser = async (req, res) => {
    const id = req.params.id;

    const { _id } = req.body;
    if (id === _id) {
        res.status(403).json("Action denied.")
    }

    try {
        const userUnfollowed = await UserModel.findById(id);
        const userUnfollowing = await UserModel.findById(_id);

        if (userUnfollowed.followers.includes(_id)) {
            await userUnfollowed.updateOne({ $pull: { followers: _id } });
            await userUnfollowing.updateOne({ $pull: { followings: id } });
            res.status(200).json(`${userUnfollowed.username} unfollowed`);
        } else {
            res.status(403).json(`You already unfollowed ${userUnfollowed.username}`)
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

