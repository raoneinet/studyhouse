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
                url: "api/dashboard"
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
                url: `api/lessons/favorites?page=${page}&limit=${limit}`
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
                url: `api/lessons/ongoing?page=${page}&limit=${limit}`
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
                url: `api/lessons/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Subjects", id: "LIST" }]
        }),
        toggleFavorite: builder.mutation({
            query: ({ id, isFavorite }) => ({
                url: `api/lessons/favorite`,
                method: "POST",
                body: { id, isFavorite }
            }),
            async onQueryStarted({ id, isFavorite }, { dispatch, queryFulfilled }) {
                // Optimistic update para todas as listas que podem conter esta lição
                const patchResultAll = dispatch(
                    lessonsApi.util.updateQueryData('getAllLessons', { page: 1, limit: 10 }, (draft) => {
                        const lesson = draft.data.find(l => l.id === id);
                        if (lesson) lesson.is_favorite = isFavorite ? 1 : 0;
                    })
                );

                const patchResultFav = dispatch(
                    lessonsApi.util.updateQueryData('getAllFavorites', { page: 1, limit: 10 }, (draft) => {
                        if (!isFavorite) {
                            draft.data = draft.data.filter(l => l.id !== id);
                            draft.totalItems -= 1;
                        } else {
                            // Optionally, if we toggle to true, we might want to add it, 
                            // but usually it requires refetch since we don't have the full object here.
                            // We invalidate tags so it will re-fetch anyway.
                        }
                    })
                );
                
                try {
                    await queryFulfilled;
                } catch {
                    patchResultAll.undo();
                    patchResultFav.undo();
                }
            },
            invalidatesTags: ["Subjects"],
        }),
        getLessonById: builder.query<any, number>({
            query: (id: number) => ({
                url: `api/lessons/${id}`
            }),
            providesTags: (result, error, id) => [
                { type: "Subjects", id }
            ]
        }),
        updateLesson: builder.mutation({
            query: ({ id, data }) => ({
                url: `api/lessons/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: [{ type: "Subjects", id: "LIST" }],
        }),
        updateStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `api/lessons/${id}`,
                method: "PATCH",
                body: { status }
            }),
            invalidatesTags: ["Subjects"]
        }),
        getNotes: builder.query<any, number>({
            query: (lessonId) => ({
                url: `api/lessons/${lessonId}/notes`,
            }),
            providesTags: (result, error, lessonId) => [{ type: "Notes", id: lessonId }]
        }),
        addNote: builder.mutation({
            query: ({ lessonId, content }) => ({
                url: `api/lessons/${lessonId}/notes`,
                method: "POST",
                body: { content },
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Notes", id: arg.lessonId }]
        }),
        deleteNote: builder.mutation({
            query: ({ noteId, lessonId }) => ({
                url: `api/notes/${noteId}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Notes", id: arg.lessonId }]
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
    useUpdateStatusMutation,
    useGetNotesQuery,
    useAddNoteMutation,
    useDeleteNoteMutation
} = lessonsApi