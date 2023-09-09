// import asyncHandler from "../middleware/asyncHandler";
// import Image from "../models/imageModel";

// const getImages = asyncHandler(async (req, res) => {
//     const images = await Image.find({});
//     return res.json(images);
// })

// const getImageById = asyncHandler(async (req, res) => {
//     const image = await Image.findById(req.params.id);
//     if(image){
//         return res.json(image);
//     }else{
//         res.status(404);
//         throw new Error('Image not found');
//     }
// })

// export { getImages, getImageById }