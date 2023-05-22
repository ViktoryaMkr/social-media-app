import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';



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


// update user
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus, password } = req.body;

    if (id === currentUserId || currentUserAdminStatus) {
        try {

            if (password) {

                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(user);

        } catch (error) {
            res.status(404).json(error);
        }
    }else {
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
    }else{
        res.status(403).json("Action denied. You have no permission to delete this user");
    }
}


export const followUser = async (req,res) => {
    const id = req.params.id;

    const {currentUserId} = req.body;
    if (id === currentUserId) {
        res.status(403).json("Action denied.")
    }

    try {
        const userFollowed = await UserModel.findById(id);
        const userFollowing = await UserModel.findById(currentUserId);

        if(!userFollowed.followers.includes(currentUserId)){
            await userFollowed.updateOne({$push : {followers: currentUserId}});
            await userFollowing.updateOne({$push : {followings: id}});
            res.status(200).json(`${userFollowed.username} followed`);
        }else{
            res.status(403).json(`You are already following ${userFollowed.username}`)
        }
        
    } catch (error) {
        res.status(500).json(error);   
    }
}


export const unfollowUser = async (req,res) => {
    const id = req.params.id;

    const {currentUserId} = req.body;
    if (id === currentUserId) {
        res.status(403).json("Action denied.")
    }

    try {
        const userUnfollowed = await UserModel.findById(id);
        const userUnfollowing = await UserModel.findById(currentUserId);

        if(userUnfollowed.followers.includes(currentUserId)){
            await userUnfollowed.updateOne({$pull : {followers: currentUserId}});
            await userUnfollowing.updateOne({$pull : {followings: id}});
            res.status(200).json(`${userUnfollowed.username} unfollowed`);
        }else{
            res.status(403).json(`You are not following ${userUnfollowed.username}`)
        }
        
    } catch (error) {
        res.status(500).json(error);   
    }
}

