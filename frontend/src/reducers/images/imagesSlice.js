import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import imageService from "./imagesService";

const initialState  = {
    images: [],
    image: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const getImages = createAsyncThunk('images/getAll', async(thunkAPI) => {
    try {
       return await imageService.getImages();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
    };
});

export const getImageById = createAsyncThunk('images/getOne', async(imageId, thunkAPI) => {
    try {
        return await imageService.getImageById(imageId);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
    };
});

const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getImages.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getImages.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.images = action.payload
        })
        .addCase(getImages.rejected, (state, action) => {
            state.isError = true
            state.isSuccess = false
            state.images = []
            state.message = action.payload
        })
        .addCase(getImageById.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getImageById.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess  = true
            state.image = action.payload
        })
        .addCase(getImageById.rejected, (state, action) => {
            state.isSuccess = false
            state.isError = true
            state.image = {}
            state.message = action.payload
        })
    }
});

export const { reset } = imageSlice.actions;
export const imageReducer = imageSlice.reducer;