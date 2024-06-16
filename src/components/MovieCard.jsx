import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToWatchList } from '../featureSlices/WatchListSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const handleAddToWatch = ()=>{
    dispatch(addToWatchList(movie))
     }

  return (
          <div className='w-full h-full rounded overflow-hidden shadow-lg m-2 flex flex-col'>
            <Link to={`/movie/${movie.id}`}>
              <LazyLoadImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} effect='blur' className="w-full" />
            </Link> 
            <div className='px-4 py-2 flex-grow flex flex-col justify-between'>
              <h2 className='text-lg font-bold mt-2 truncate'>{movie.title}</h2>
              <p className='text-sm font-semibold'>{movie.release_date}</p>
              <button onClick={handleAddToWatch} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Add To Watchlist</button>
            </div>           
          </div>
      
  )
}

export default MovieCard