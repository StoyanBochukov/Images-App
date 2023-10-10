import express from "express";
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js'
import { getImages, getImageById, createComment } from "../controllers/imageControler.js";


router.route('/').get(getImages);
router.route('/:id').get(getImageById);
router.route('/:id/comments').post(protect, createComment);



export default router;