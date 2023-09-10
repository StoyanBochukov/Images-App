import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth/authSlice";
import { imageReducer } from "./reducers/images/imagesSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        images: imageReducer,
    }
});

export default store;