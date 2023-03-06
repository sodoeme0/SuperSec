import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes:['Shift','Template', 'Personal' ],
    endpoints: builder =>({})

})