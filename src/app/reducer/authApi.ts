import { baseApi } from "./baseApi"

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        registerUser: builder.mutation<any, FormData>({
            query: (formData) => ({
                url: "api/auth/register",
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
        }),
        changePassword: builder.mutation({
            query: ({actualPassword, newPassword})=>({
                url: "change_password.php",
                method: "POST",
                body: {actualPassword, newPassword}
            })
        }),
        pauseAccount: builder.mutation<any, void>({
            query: ()=>({
                url: "pause_account.php",
                method: "POST"
            })
        }),
        deleteAccount: builder.mutation<any, void>({
            query: ()=>({
                url: "delete_account.php",
                method: "POST"
            })
        })
    }),
    overrideExisting: true
})

export const {
    useLoginUserMutation,
    useLogoutMutation,
    useRegisterUserMutation,
    useChangePasswordMutation,
    usePauseAccountMutation,
    useDeleteAccountMutation
} = authApi