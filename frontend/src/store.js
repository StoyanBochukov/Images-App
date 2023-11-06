import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth/authSlice";
// import { imageReducer } from "./reducers/images/imagesSlice";
import { apiSlice } from "./reducers/apiSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        // images: imageReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;