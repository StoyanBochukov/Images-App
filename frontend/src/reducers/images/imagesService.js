import axios from "axios";
const API_URL = '/api/images/';

const getImages = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};

const getImageById = async(imageId) => {
    const { data } = await axios.get(API_URL + imageId);
    return data;
};

const createComment = async(comment, imageId) => {
    console.log('imageService - commentData!!', comment)
    console.log('Image ID!!', imageId);
    console.log(typeof imageId);
    const { data } = await axios.post(`${API_URL}/${imageId}/comments`, {comment: comment});
    return data;
}

const imageService = {
    getImages,
    getImageById,
    createComment
};
export default imageService;