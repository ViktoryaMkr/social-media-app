import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';


// For new user
export const registerUser = async(req, res)=> {
    
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    
    req.body.password = hashPassword;
    console.log(req.body.password);
    const newUser = new UserModel(req.body);

    const { username } = req.body;

    try {

        const existingUser = await UserModel.findOne({username});
        if(existingUser){
            return res.status(400).json("Username already taken");
        }

        const newRegisteredUser = await newUser.save()
        const token = jwt.sign({
            username: newRegisteredUser.username,
            id: newRegisteredUser._id
        }, process.env.JWT_PKEY , {expiresIn: '5000'})
        res.status(200).json({newRegisteredUser, token})

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