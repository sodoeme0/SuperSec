import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const shiftsAdapter = createEntityAdapter({})

const initialState = shiftsAdapter.getInitialState()

export const shiftsApiSlice = apiSlice.injectEndpoints({
    
    endpoints: builder => ({
        getShifts: builder.query({
            query: () => '/shifts',
            
            validateStatus: (response, result) => {

                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedShifts = responseData.map(shift => {
                    shift.id = shift._id

                    return shift
                });
                return shiftsAdapter.setAll(initialState, loadedShifts)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Shift', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Shift', id }))
                    ]
                } else return [{ type: 'Shift', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetShiftsQuery,
} = shiftsApiSlice

// returns the query result object
export const selectShiftsResult = shiftsApiSlice.endpoints.getShifts.select()

// creates memoized selector
const selectShiftsData = createSelector(
    selectShiftsResult,
    shiftsResult => shiftsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllShifts,
    selectById: selectShiftById,
    selectIds: selectShiftIds
    // Pass in a selector that returns the users slice of state
} = shiftsAdapter.getSelectors(state => selectShiftsData(state) ?? initialState)