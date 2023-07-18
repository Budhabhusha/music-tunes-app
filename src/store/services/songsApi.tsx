import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const songsApi =  createApi({
    reducerPath:'',
    baseQuery: fetchBaseQuery({baseUrl:"https://itunes.apple.com/"}),
    endpoints :(builder)=>({
        getSongs: builder.query({
            query: (offset) => `search/?term='100'&offset=${offset}`
        })
    })
})
export const {useGetSongsQuery} = songsApi