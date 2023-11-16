import { IMAGES_URL } from "../../constants";
import { apiSlice } from "../apiSlice";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import imageService from "./imagesService";

// const initialState  = {
//     images: [],
//     image:{
//         comments: ''
//     },
//     isLoading: false,
//     isError: false,
//     isSuccess: false,
//     message: ''
// }

// export const getImages = createAsyncThunk('images/getAll', async(thunkAPI) => {
//     try {
//        return await imageService.getImages();
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) ||
//         error.message || error.toString();

//         return thunkAPI.rejectWithValue(message);
//     };
// });

// export const getImageById = createAsyncThunk('images/getOne', async(imageId, thunkAPI) => {
//     try {
//         return await imageService.getImageById(imageId);
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) ||
//         error.message || error.toString();

//         return thunkAPI.rejectWithValue(message);
//     };
// });

// export const createComment = createAsyncThunk('images/comments', async({comment, imageId}, thunkAPI) => {
//     console.log('imageSlice - comment from the function', comment);
//     console.log('Image ID', imageId);
//     console.log(typeof imageId);
//     try {
//         return await imageService.createComment(comment, imageId);
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) ||
//         error.message || error.toString();

//         return thunkAPI.rejectWithValue(message);
//     }
// });

// const imageSlice = createSlice({
//     name: 'images',
//     initialState,
//     reducers: {
//         reset: (state) => {
//             state.isLoading = false
//             state.isError = false
//             state.isSuccess = false
//             state.message = ''
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//         .addCase(getImages.pending, (state) => {
//             state.isLoading = true
//         })
//         .addCase(getImages.fulfilled, (state, action) => {
//             state.isLoading = false
//             state.isSuccess = true
//             state.images = action.payload
//         })
//         .addCase(getImages.rejected, (state, action) => {
//             state.isError = true
//             state.isSuccess = false
//             state.images = []
//             state.message = action.payload
//         })
//         .addCase(getImageById.pending, (state) => {
//             state.isLoading = true
//         })
//         .addCase(getImageById.fulfilled, (state, action) => {
//             state.isLoading = false
//             state.isSuccess  = true
//             state.image = action.payload
//         })
//         .addCase(getImageById.rejected, (state, action) => {
//             state.isSuccess = false
//             state.isError = true
//             state.image = {}
//             state.message = action.payload
//         })
//         .addCase(createComment.pending, (state) => {
//             state.isLoading = true
//         })
//         .addCase(createComment.fulfilled, (state, action) => {
//             console.log('imageSlice action.payload!!', action.payload);
//             state.isLoading = false
//             state.isSuccess = true
//             state.image.comments = action.payload
//         })
//         .addCase(createComment.rejected, (state, action) => {
//             state.isSuccess = false
//             state.isLoading = false
//             state.isError = true
//             state.image.comments = {}
//             state.message = action.payload
//         })
//     }
// });

// export const { reset } = imageSlice.actions;
// export const imageReducer = imageSlice.reducer;


export const imagesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getImages: builder.query({
            query: () => ({
               url: IMAGES_URL, 
            }),
            keepUnusedDataFor: 5
        }),
        getImageById: builder.query({
           query: (imageId) => ({
            url: `${IMAGES_URL}/${imageId}`,
           }),
           keepUnusedDataFor: 5
        }),
        createComment: builder.mutation({
            query:(comment) => ({
                url: `${IMAGES_URL}/${comment.imageId}/comments`,
                method: 'POST',
                body: comment,
            }),
            invalidatesTags: ['Image'],
        })
    }),
});

export const { useGetImagesQuery, useGetImageByIdQuery, useCreateCommentMutation } = imagesApiSlice;