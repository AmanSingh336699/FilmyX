import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'
import MovieCard from './MovieCard'
import { fetchMovieByQuery } from '../api/TMDB'

const useQuery = ()=> {
    return new URLSearchParams(useLocation().search)
}

function searchResults() {
    const query = useQuery().get('query')
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const getMovies = async ()=>{
            try {
                const movieData = await fetchMovieByQuery(query);
                setMovies(movieData.results)
            } catch (error) {
                console.error(error)
            }
        }
        if(query){
            getMovies()
        }
    },[query])

   
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Search Results for "{query}"</h1>
        <div className='grid grid-cols-2 md:grids-cols-3 lg:grid-cols-4 gap-4'>
            {movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
  )
}

export default searchResults