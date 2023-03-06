import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const personalAdapter = createEntityAdapter({})

const initialState = personalAdapter.getInitialState()

export const personalApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPersonal: builder.query({
            query: () => '/personal',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedPersonal = responseData.map(personal => {
                    personal.id = personal._id
                    return personal
                });
                return personalAdapter.setAll(initialState, loadedPersonal)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Personal', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Personal', id }))
                    ]
                } else return [{ type: 'Personal', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetPersonalQuery,
} = personalApiSlice

// returns the query result object
export const selectPersonalResult = personalApiSlice.endpoints.getPersonal.select()

// creates memoized selector
const selectPersonalData = createSelector(
    selectPersonalResult,
    personalResult => personalResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPersonal,
    selectById: selectPersonalById,
    selectIds: selectPersonalIds
    // Pass in a selector that returns the users slice of state
} = personalAdapter.getSelectors(state => selectPersonalData(state) ?? initialState)