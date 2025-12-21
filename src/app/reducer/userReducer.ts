import { Subject } from "@/types/subject"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userapi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost/studyhouse_backend/api/",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: ({ email, password }) => ({
                url: "login.php",
                method: "POST",
                body: { email, password }
            })
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: "register.php",
                method: "POST",
                body: data
            })
        }),
        createSubject: builder.mutation({
            query: (data) => ({
                url: "create_subject.php",
                method: "POST",
                body: data
            })
        }),
        getAllCards: builder.query<any, void>({
            query: () => ({
                url: "cards.php"
            })
        }),
        deleteCard: builder.mutation({
            query: (id: number) => ({
                url: "delete_subject.php",
                method: "POST",
                body: { id }
            })
        })
    })
})

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useCreateSubjectMutation,
    useGetAllCardsQuery,
    useDeleteCardMutation
} = userApi