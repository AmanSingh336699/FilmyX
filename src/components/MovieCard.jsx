import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToWatchList } from '../featureSlices/WatchListSlice';
import LazyLoad from 'react-lazyload'

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const handleAddToWatch = ()=>{
    dispatch(addToWatchList(movie))
     }

  return (
      <LazyLoad height={400} offset={100} once
        placeholder={<div className='sm:w-64 h-96 bg-gray-300 animate-pulse rounded '></div>}>
          <div className='w-full h-full rounded overflow-hidden shadow-lg m-2 flex flex-col'>
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='h-full w-full object-cover mb-2' />
            </Link> 
            <div className='px-4 py-2 flex-grow flex flex-col justify-between'>
              <h2 className='text-lg font-bold mt-2 truncate'>{movie.title}</h2>
              <p className='text-sm font-semibold'>{movie.release_date}</p>
              <button onClick={handleAddToWatch} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Add To Watchlist</button>
            </div>           
          </div>
      </LazyLoad>

    
  )
}

export default MovieCard