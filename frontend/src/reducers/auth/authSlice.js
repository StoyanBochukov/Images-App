import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null, 
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.user = null
            localStorage.removeItem('user')
        }
    },
});

export const { setCredentials, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;