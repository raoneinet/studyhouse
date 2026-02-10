import { baseApi } from "./baseApi"

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query<any, void>({
            query: () => ({
                url: "me.php"
            }),
            providesTags: ["Auth"]
        }),
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
    useGetMeQuery,
    useUpdateUserPersonalInfoMutation,
    useUpdateAvatarMutation,
} = userApi