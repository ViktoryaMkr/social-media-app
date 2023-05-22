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
                req.body.password = await bcrypt(password, salt);
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(user);

        } catch (error) {
            res.status(404).json(error);
        }
    }
}