// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from "axios";

// export const songsApi =  createApi({
//     reducerPath:'',
//     baseQuery: fetchBaseQuery({baseUrl:"https://itunes.apple.com/"}),
//     endpoints :(builder)=>({
//         getSongs: builder.query({
//             query: (offset) => `search/?term='100'&offset=${offset}`
//         })
//     })
// })
// export const {useGetSongsQuery} = songsApi


const getSongsData = async (term = '', offset = 0) => {
    try {
      const response = await axios.get(`https://itunes.apple.com/search/?term=${term}&offset=${offset}&limit=30`);
      return response.data.results
    } catch (error) {
      console.error('Error fetching music data:', error);
    }
};

export default getSongsData