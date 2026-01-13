import { baseApi } from "./baseApi"

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        registerUser: builder.mutation<any, FormData>({
            query: (formData) => ({
                url: "register.php",
                method: "POST",
                body: formData
            })
        }),
        loginUser: builder.mutation({
            query: ({ email, password }) => ({
                url: "login.php",
                method: "POST",
                body: { email, password }
            }),
            invalidatesTags: ["Auth"]
        }),
        logout: builder.mutation<any, void>({
            query: () => ({
                url: "logout.php",
                method: "POST"
            }),
            invalidatesTags: ["Auth"]
        })
    })
})

export const {
    useLoginUserMutation,
    useLogoutMutation,
    useRegisterUserMutation,
} = authApi