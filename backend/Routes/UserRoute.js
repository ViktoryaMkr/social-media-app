import express from "express";
import { getUser, updateUser } from "../Controllers/UserController.js";


const router = express.Router();

router.get('/:id', getUser);
// make put request when updating
router.put('/:id', updateUser);




export default router