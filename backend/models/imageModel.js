import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
   
}, {
    timestamps: true
})

const imageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
   
    comments: [commentSchema],
},{
    timestamps: true
})

const Image = mongoose.model('Image', imageSchema);

export default Image;