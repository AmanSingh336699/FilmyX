import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResults: (state, action) => {
            state.results = action.payload
            console.log('updated results ',state.results)
        }
    }
})

export const { setSearchResults } = searchSlice.actions
export default searchSlice.reducer