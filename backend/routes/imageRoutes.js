import express from "express";
const router = express.Router();
import { getImages, getImageById } from "../controllers/imageControler.js";


router.route('/').get(getImages);
router.route('/:id').get(getImageById);



export default router;