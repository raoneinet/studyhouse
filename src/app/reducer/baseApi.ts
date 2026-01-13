import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
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
    endpoints: ()=>({})
})