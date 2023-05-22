import UserModel from "../Models/userModel.js";


export const getUser = async (req, res) => {
    const id = req.params.id;


    try {
        const user = await UserModel.findById(id);

        if(user){
            // remove password from response
            const {password, ...noPasswordData} = user._doc

            res.status(200).json(noPasswordData);
        }
    } catch (error) {
        res.status(500).json(error);
        
    }
} 