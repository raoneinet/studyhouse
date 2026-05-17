import { baseApi } from "./baseApi"

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateUserPersonalInfo: builder.mutation({
            query: (data) => ({
                url: "update_user_personalInfo.php",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Auth"]
        }),
        updateAvatar: builder.mutation({
            query: (data) => ({
                url: "update_user_picture.php",
                method: "POST",
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