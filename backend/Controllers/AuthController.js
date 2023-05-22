import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'

// For new user
export const registerUser = async(req, res)=> {
    const {username, password, firstName, lastName} = req.body;

    
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);


    const newUser = new UserModel({username, password : hashPassword, firstName, lastName});

    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message:error.message})
    }

} 



export const loginUser = async(req, res)=> {
    const {username, password} = req.body;

    try {
        const user = await UserModel.findOne({username});
        if(user){
            const validPassword = await bcrypt.compare(password, user.password);

            validPassword? res.status(200).json(user): res.status(400).json("Wrong Credentials");
        }else {
            res.status(404).json("Wrong credentials. User does not exist");
        }

    } catch (error) {
        
    }
}