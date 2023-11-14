import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      userLogin: builder.mutation({
        query: ({ userData }) => ({
            url: `${USERS_URL}/login`,
            method: 'POST',
            body: userData  
        })
      }),
       userLogout: builder.mutation({
        query: () => ({
          url:`${USERS_URL}/logout`,
          method: 'POST',
        })
       }),
       userRegister: builder.mutation({
        query: ({userData}) => ({
          url:`${USERS_URL}`,
          method: 'POST',
          body: userData
        })
       }),
       updateUserProfile: builder.mutation({
        query: (data) => ({
          url: `${USERS_URL}/profile`,
          method: 'PUT',
          body: data,
        })
       })
    })
})

export const { useUserLoginMutation, useUserLogoutMutation, useUserRegisterMutation, useUpdateUserProfileMutation } = usersApiSlice