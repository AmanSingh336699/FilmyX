import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
    name: 'watchlist',
    initialState: [],
    reducers: {
        addToWatchList: (state, action)=>{
            const MovieExist = state.find(movie => movie.id === action.payload.id);
            if(!MovieExist){
                state.push(action.payload)
            }
        },
        removeFromWatchList: (state, action)=>{
            return state.filter(movie => movie.id !== action.payload.id)
        },
    },
})

export const {addToWatchList, removeFromWatchList} = watchListSlice.actions

export default watchListSlice.reducer