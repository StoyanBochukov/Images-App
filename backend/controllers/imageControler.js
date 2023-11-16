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

const createComment = asyncHandler(async (req, res) => {
    const { comment } = req.body;
    console.log(comment);
    console.log(req.body);
    const image = await Image.findById(req.params.id);

    if(image){
        const newComment = {
            user: req.user._id,
            name: req.user.firstName,
            comment: comment,
        }
        image.comments.push(newComment)
        await image.save();
        console.log(image.comments);
        res.status(201).json(image);
    }else{
        res.status(400);
        throw new Error('Oops, something went wrong!')
    }
})

export { getImages, getImageById, createComment };