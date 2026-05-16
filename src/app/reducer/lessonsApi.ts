import { Subject } from "@/types/subject";
import { baseApi } from "./baseApi"

type PaginatedSubjects = {
    data: Subject[];
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
}

export const lessonsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashBoardData: builder.query<any, void>({
            query: () => ({
                url: "get_dashboard_data.php"
            }),
            providesTags: (result, error, id) => [
                { type: "Subjects", id: "LIST" }
            ]
        }),
        createLesson: builder.mutation({
            query: (data) => ({
                url: "api/lessons/create",
                method: "POST",
                body: data
            }),
            invalidatesTags: [{ type: "Subjects", id: "LIST" }]
        }),
        getAllLessons: builder.query<PaginatedSubjects, { page: number, limit: number }>({
            query: ({ page, limit }) => ({
                url: `api/lessons?page=${page}&limit=${limit}`
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result?.data.map((lesson) => ({
                            type: "Subjects" as const,
                            id: lesson.id,
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
        deleteLesson: builder.mutation({
            query: (id: number) => ({
                url: "delete_lesson.php",
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
            invalidatesTags: ["Subjects"],
        }),
        getLessonById: builder.query<any, number>({
            query: (id: number) => ({
                url: `get_lesson.php?id=${id}`
            }),
            providesTags: (result, error, id) => [
                { type: "Subjects", id }
            ]
        }),
        updateLesson: builder.mutation({
            query: ({ id, data }) => ({
                url: "update_lesson.php",
                method: "PATCH",
                body: { id, ...data }
            }),
            invalidatesTags: [{ type: "Subjects", id: "LIST" }],
        }),
        updateStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: "update_status.php",
                method: "POST",
                body: { id, status }
            }),
            invalidatesTags: ["Subjects"]
        })
    }),
    overrideExisting: true
})

export const {
    useGetDashBoardDataQuery,
    useCreateLessonMutation,
    useGetAllLessonsQuery,
    useGetAllFavoritesQuery,
    useGetAllOngoingsQuery,
    useDeleteLessonMutation,
    useToggleFavoriteMutation,
    useLazyGetLessonByIdQuery,
    useUpdateLessonMutation,
    useUpdateStatusMutation
} = lessonsApi