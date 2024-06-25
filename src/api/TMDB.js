import axios from "axios";

const Api_Key = import.meta.env.VITE_API_KEY
const Url = import.meta.env.VITE_API_URL

export const fetchTopRatedMovies = async ()=>{
    try {
        const response = await axios.get(`${Url}/movie/top_rated`, {
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

export const fetchTopRatedTvShow = async ()=>{
    try {
        const response = await axios.get(`${Url}/tv/top_rated`,{
            params: {
                api_key: Api_Key,
                language: 'en-Us',
                page: 1
            }
        })
        return response.data.results
    } catch (error) {
        console.error(error)
        return []
    }
}

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

export const fetchTrendingTVShows = async () =>{
    try {
        const response = await axios.get(`${Url}/trending/tv/week`, {
            params: {
                api_key: Api_Key
            }

        })
        return response.data.results;
    } catch (error) {
        console.error(error)
        return [];
    }
}

export const fetchTVCasts = async (id)=>{
    try {
        const response = await axios.get(`${Url}/tv/${id}/credits`,{
            params: {
                api_key: Api_Key,
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }
}
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

export const fetchTVDetail = async (id)=>{
    try {
        const response = await axios.get(`${Url}/tv/${id}`,{
            params: {
                api_key: Api_Key,
            },
        })
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const fetchMovieByQuery = async (query,type)=>{
    try {
        const response = await axios.get(`${Url}/search/${type}`,{
            params: {
                api_key: Api_Key,
                query,
            }
        })
        return response.data.results
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const fetchMovieVideos = async (movieId) =>{
    try {
        const reponse = await axios.get(`${Url}/movie/${movieId}/videos`,{
            params: {
                api_key: Api_Key,
            }
        })
        return reponse.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
