import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("watchlist")
        if(serializedState === null) return []
        return JSON.parse(serializedState)
    } catch (error) {
        console.error(error)
        return []
    }
}

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("watchlist", serializedState)
    } catch (error) {
        console.error(error)
    }

}

const initialState = {
    watchlist: loadFromLocalStorage()
}

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        addWatchList: (state, action) => {
            const movie = action.payload
            const exists = state.watchlist.find(item => item.id === movie.id)
            if(!exists) {
                state.watchlist.push(movie)
                saveToLocalStorage(state.watchlist)
            }
        },

        removeWatchList: (state, action) => {
            state.watchlist = state.watchlist.filter(item => item.id !== action.payload.id)
            saveToLocalStorage(state.watchlist)
        }
    }
})

export const { addWatchList, removeWatchList } = watchlistSlice.actions
export default watchlistSlice.reducer