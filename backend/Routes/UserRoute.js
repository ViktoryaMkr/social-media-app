import express from "express";
import { deleteUser, followUser, getUser, unfollowUser, updateUser, getAllUsers } from "../Controllers/UserController.js";

const router = express.Router();


router.get('/:id', getUser);
router.get('/', getAllUsers);
// make put request when updating
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unfollowUser);




export default router