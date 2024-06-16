
import { fetchMovies } from '../api/TMDB';
import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';

function RecentMovie() {
    const [recentMovies, setRecentMovies] = useState([])
    useEffect(()=>{
        const getMovie = async ()=>{
          const movie = await fetchMovies()
          setRecentMovies(movie)
        }
        getMovie()
      },[]);
      
  return (
    <div className='container mx-auto mt-5 p-4'>
        <h1 className='text-4xl font-bold mb-4 text-center'>Recent Movies</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>{recentMovies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie} />
        ))}</div>
    </div>
  )
}

export default RecentMovie