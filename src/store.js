import {configureStore} from '@reduxjs/toolkit'
import watchListReducer from './featureSlices/WatchListSlice'
import movieReducer from './featureSlices/MovieSlice'
export const store = configureStore({
    reducer: {
        watchlist: watchListReducer,
        movies: movieReducer
    },
})