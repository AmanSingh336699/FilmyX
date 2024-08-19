import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reduxSlice/homeSlice";
import searchReducer from "./reduxSlice/searchSlice";
import watchlistReducer from "./reduxSlice/watchlistSlice";

const store = configureStore({
    reducer: {
        home: homeReducer,
        search: searchReducer,
        watchlist: watchlistReducer,
    },
});

export default store;