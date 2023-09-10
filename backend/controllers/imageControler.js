import Image from "../models/imageModel.js";
import asyncHandler from '../middleware/asyncHandler.js'

const getImages = asyncHandler(async (req, res) => {
    const images = await Image.find({});
    res.json(images)
})

const getImageById = asyncHandler(async (req, res) => {
    const image = await Image.findById(req.params.id);
    if(image){
        res.json(image)
    }else{
        res.status(404);
        throw new Error('Image not found');
    };
});

export { getImages, getImageById };