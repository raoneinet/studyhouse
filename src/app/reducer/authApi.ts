import { baseApi } from "./baseApi"

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation<any, FormData>({
            queryFn: async (formData) => {
                try {
                    const res = await fetch("/api/auth/register", {
                        method: "POST",
                        credentials: "include",
                        body: formData,
                    })
                    const data = await res.json()
                    return { data }
                } catch (error) {
                    return { error: { status: "FETCH_ERROR", error: String(error) } }
                }
            },
        }),
        loginUser: builder.mutation({
            query: ({ email, password }) => ({
                url: "api/auth/login",
                method: "POST",
                body: { email, password },
            }),
            invalidatesTags: ["Auth"],
        }),
        logout: builder.mutation<any, void>({
            query: () => ({
                url: "api/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["Auth"],
        }),
        getMe: builder.query<any, void>({
            query: () => ({ url: "api/auth/me" }),
            providesTags: ["Auth"],
        }),
        changePassword: builder.mutation({
            query: ({ actualPassword, newPassword }) => ({
                url: "api/auth/change-password",
                method: "PATCH",
                body: { actualPassword, newPassword },
            }),
        }),
        pauseAccount: builder.mutation<any, void>({
            query: () => ({
                url: "pause_account.php",
                method: "POST",
            }),
        }),
        deleteAccount: builder.mutation<any, void>({
            query: () => ({
                url: "delete_account.php",
                method: "POST",
            }),
        }),
    }),
    overrideExisting: true,
})

export const {
    useLoginUserMutation,
    useLogoutMutation,
    useRegisterUserMutation,
    useGetMeQuery,
    useChangePasswordMutation,
    usePauseAccountMutation,
    useDeleteAccountMutation,
} = authApi
