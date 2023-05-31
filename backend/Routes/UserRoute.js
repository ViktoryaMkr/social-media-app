import express from "express";
import { deleteUser, followUser, getUser, unfollowUser, updateUser } from "../Controllers/UserController.js";
import cors from 'cors'
const router = express.Router();

var app = express() 

router.get('/:id', getUser);
// make put request when updating
router.put('/:id',cors(), updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unfollowUser);




export default router