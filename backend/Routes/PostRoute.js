import express from "express";
import { createPost, getPost, updatePost } from "../Controllers/PostController.js";



const router = express.Router();

// quick test
// router.get('/', async(req, res)=>{
//     res.send("working")
// });

router.post('/create', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)




export default router