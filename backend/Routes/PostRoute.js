import express from "express";
import { createPost, deletePost, getPost, likePost, updatePost } from "../Controllers/PostController.js";



const router = express.Router();

// quick test
// router.get('/', async(req, res)=>{
//     res.send("working")
// });

router.post('/create', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)





export default router