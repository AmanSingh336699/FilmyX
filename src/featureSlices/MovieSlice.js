import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const apikey = import.meta.env.VITE_API_KEY
const apiUrl = import.meta.env.VITE_API_URL

export const searchMovies = createAsyncThunk(
    'movies/searchMovies',
    async (query, thunkAPI) =>{
        try {
            const response = await axios.get(`${apiUrl}/search/movie`,{
                params: {
                    api_key: apikey,query
                },
            });
            return response.data.results
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    } 
)


//Movie Slice

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(searchMovies.pending, (state)=>{
            state.status = 'loading'
        }).addCase(searchMovies.fulfilled, (state, action)=>{
            state.status='succeeded'
            state.list=action.payload
        }).addCase(searchMovies.rejected, (state, action)=>{
            state.status='failed'
            state.error=action.payload
        })
    }
})

export default movieSlice.reducer