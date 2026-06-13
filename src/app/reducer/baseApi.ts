import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const baseApi = createApi({
    reducerPath: "baseApi",
    refetchOnMountOrArgChange: false,
    tagTypes: ["Auth", "Subjects", "Notes"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        credentials: "include",

    }),
    endpoints: ()=>({})
})