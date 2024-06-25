import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'
import MovieCard from './MovieCard'
import { fetchMovieByQuery } from '../api/TMDB'

const useQuery = ()=> {
    return new URLSearchParams(useLocation().search)
}

function searchResults() {
    const query = useQuery().get('query')
    const type = useQuery().get('type')
    const [results, setResults] = useState([])

    useEffect(()=>{
        const getResults = async ()=>{
           
                if(query){
                    try {
                        const movieData = await fetchMovieByQuery(query,type);
                        setResults(movieData.map(result => ({...result, media_type:type})))
                    } catch (error) {
                        console.error(error)
                    }
                }
            }
            getResults()
        },[query,type])

   
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Search Results for "{query}"</h1>
        <div className='grid grid-cols-2 md:grids-cols-3 lg:grid-cols-4 gap-4'>
            {results.map((result)=>(
                <MovieCard key={result.id} item={result} />
            ))}
        </div>
    </div>
  )
}

export default searchResults