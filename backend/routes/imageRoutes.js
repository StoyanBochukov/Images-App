import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Image from '../models/imageModel.js';


router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.find({});
    res.json(images);
}));
router.get('/:id', asyncHandler(async (req, res) => {
    const image = await Image.findById(req.params.id);
    if(image){
       return res.json(image);
    }else{
        res.status(404)
        throw new Error('Image not found')
    }
}));



export default router