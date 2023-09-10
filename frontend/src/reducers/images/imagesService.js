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

const imageService = {
    getImages,
    getImageById
};
export default imageService;