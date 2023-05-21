import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
        firstName : {
            type: String,
            required: true
        },
        lastName : {
            type: String,
            required: true
        },
        isAdmin : {
            type: Boolean,
            default: false
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksat: String,
        relationshipStatus: String,
        followers: [],
        followings: []
    },
    { timestamps: { createdAt: 'createdDate',updatedAt: 'updatedDate' } },
    {
        versionKey: false
    }
)

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;