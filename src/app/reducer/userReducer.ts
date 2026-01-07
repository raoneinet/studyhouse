import { Subject } from "@/types/subject"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type PaginatedSubjects = {
    data: Subject[];
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
};

export const userApi = createApi({
    reducerPath: "userapi",
    refetchOnMountOrArgChange: false,
    tagTypes: ["Auth", "Subjects"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost/studyhouse_backend/api/",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
    }),
    endpoints: (builder) => ({
        getMe: builder.query<any, void>({
            query: () => ({
                url: "me.php"
            }),
            providesTags: ["Auth"]
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
        registerUser: builder.mutation<any, FormData>({
            query: (formData) => ({
                url: "register.php",
                method: "POST",
                body: formData
            })
        }),
        getDashBoardData: builder.query<any, void>({
            query: () => ({
                url: "get_dashboard_data.php"
            }),
            providesTags: (result, error, id) => [
                { type: "Subjects", id: "LIST" }
            ]
        }),
        createSubject: builder.mutation({
            query: (data) => ({
                url: "create_subject.php",
                method: "POST",
                body: data
            }),
            invalidatesTags: [{ type: "Subjects", id: "LIST" }]
        }),
        getAllSubjects: builder.query<PaginatedSubjects, { page: number, limit: number }>({
            query: ({ page, limit }) => ({
                url: `get_subjects.php?page=${page}&limit=${limit}`
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result?.data.map((subject) => ({
                            type: "Subjects" as const,
                            id: subject.id,
                        })),
                        { type: "Subjects" as const, id: "LIST" }
                    ]
                    : [{ type: "Subjects" as const, id: "LIST" }]
        }),
        getAllFavorites: builder.query<PaginatedSubjects, { page: number, limit: number }>({
            query: ({ page, limit }) => ({
                url: `get_favorites.php?page=${page}&limit=${limit}`
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result?.data.map((subject) => ({
                            type: "Subjects" as const,
                            id: subject.id,
                        })),
                        { type: "Subjects" as const, id: "LIST" }
                    ]
                    : [{ type: "Subjects" as const, id: "LIST" }]
        }),
        getAllOngoings: builder.query<PaginatedSubjects, { page: number, limit: number }>({
            query: ({ page, limit }) => ({
                url: `get_ongoings.php?page=${page}&limit=${limit}`
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result?.data.map((subject) => ({
                            type: "Subjects" as const,
                            id: subject.id,
                        })),
                        { type: "Subjects" as const, id: "LIST" }
                    ]
                    : [{ type: "Subjects" as const, id: "LIST" }]
        }),
        deleteSubject: builder.mutation({
            query: (id: number) => ({
                url: "delete_subject.php",
                method: "POST",
                body: { id }
            }),
            invalidatesTags: [{ type: "Subjects", id: "LIST" }]
        }),
        toggleFavorite: builder.mutation({
            query: ({ id, isFavorite }) => ({
                url: `favorite.php`,
                method: "POST",
                body: { id, isFavorite }
            }),
            invalidatesTags: [{ type: "Subjects", id: "LIST" }]
        }),
        getSubjectById: builder.query<Subject, number>({
            query: (id: number) => ({
                url: `get_subject.php?id=${id}`
            }),
            providesTags: (result, error, id) => [
                { type: "Subjects", id }
            ]
        }),
        updateUserPersonalInfo: builder.mutation({
            query: (data) => ({
                url: "update_user_personalInfo.php",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Auth"]
        })
    })
})

export const {
    useLoginUserMutation,
    useGetMeQuery,
    useLogoutMutation,
    useRegisterUserMutation,
    useGetDashBoardDataQuery,
    useCreateSubjectMutation,
    useGetAllSubjectsQuery,
    useGetAllFavoritesQuery,
    useGetAllOngoingsQuery,
    useDeleteSubjectMutation,
    useToggleFavoriteMutation,
    useLazyGetSubjectByIdQuery,
    useUpdateUserPersonalInfoMutation
} = userApi