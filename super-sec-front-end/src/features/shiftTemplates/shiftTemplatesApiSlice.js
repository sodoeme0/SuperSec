import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const shiftTemplatesAdapter = createEntityAdapter({})

const initialState = shiftTemplatesAdapter.getInitialState()

export const shiftTemplatesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getShiftTemplates: builder.query({
            query: () => '/templates',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedShiftTemplates = responseData.map(shiftTemplate => {
                    shiftTemplate.id = shiftTemplate._id
                    return shiftTemplate
                });
                return shiftTemplatesAdapter.setAll(initialState, loadedShiftTemplates)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'ShiftTemplate', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'ShiftTemplate', id }))
                    ]
                } else return [{ type: 'ShiftTemplate', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetShiftTemplatesQuery,
} = shiftTemplatesApiSlice

// returns the query result object
export const selectShiftTemplatesResult = shiftTemplatesApiSlice.endpoints.getShiftTemplates.select()

// creates memoized selector
const selectShiftTemplatesData = createSelector(
    selectShiftTemplatesResult,
    shiftTemplatesResult => shiftTemplatesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllShiftTemplates,
    selectById: selectShiftTemplateById,
    selectIds: selectShiftTemplateIds
    // Pass in a selector that returns the users slice of state
} = shiftTemplatesAdapter.getSelectors(state => selectShiftTemplatesData(state) ?? initialState)