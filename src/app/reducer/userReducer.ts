import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userapi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost/studyhouse_backend/api",
        headers: {
            "Content-Type": "application/json"
        },
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/register.php",
                method: "POST",
                body: data
            })
        })
    })
})

export const {
    useRegisterUserMutation
} = userApi