import { baseApi } from "./baseApi"

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateUserPersonalInfo: builder.mutation({
            query: (data) => ({
                url: "api/user",
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["Auth"]
        }),
        updateAvatar: builder.mutation({
            query: (data) => ({
                url: "api/user/avatar",
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["Auth"]
        }),
    }),
    overrideExisting: true
})

export const {
    useUpdateUserPersonalInfoMutation,
    useUpdateAvatarMutation,
} = userApi