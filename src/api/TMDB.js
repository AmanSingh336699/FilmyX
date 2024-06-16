import axios from "axios";

const Api_Key = import.meta.env.VITE_API_KEY
const Url = import.meta.env.VITE_API_URL

export const fetchMovies = async ()=>{
    try {
        const response = await axios.get(`${Url}/movie/now_playing`, {
            params: {
                api_key: Api_Key,
                language: 'en-US',
                page: 1,
            },
        })
        return response.data.results;
    } catch (error) {
        console.log("ERROR Fetching:", error)
        return [];
    }
};

export const fetchTrendingMovies = async ()=>{
    try {
        const response = await axios.get(`${Url}/trending/movie/week`, {
            params: {
                api_key: Api_Key,
            },
        })
        return response.data.results;
    } catch (error) {
        console.error('Error fetching in trending movies:', error);
        return [];
    }
};

export const fetchMovieCasts = async (id) =>{
    try {
        const response = await axios.get(`${Url}/movie/${id}/credits`,{
            params: {
                api_key: Api_Key,
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }
}


export const fetchMovieDetail = async (id)=>{
    try {
        const response = await axios.get(`${Url}/movie/${id}`, {
            params: {
                api_key: Api_Key,
            },
        })
        return response.data;
    } catch (error) {
        console.log("ERROR Fetching:", error)
        throw error;
    }
};
