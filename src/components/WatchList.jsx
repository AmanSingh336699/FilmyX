import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWatchList } from '../featureSlices/WatchListSlice'
import { Link } from 'react-router-dom'
function WatchList() {
   
    const watchlist = useSelector((state)=>state.watchlist)
    const dispatch = useDispatch()
    if(!watchlist || watchlist.length === 0){
      return <div className='text-center text-3xl font-bold text-red-400'>No movies in the watchlist</div>
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      <h2 className='text-2xl font-bold mb-2 text-center mt-4'>Watchlist</h2>
        {watchlist.map((movie)=>(
            <div key={movie.id} className='block border border-gray-499 p-4 rounded mb-4'>
                <Link to={`/movie/${movie.id}`} className='block border border-gray-400 p-4 rounded mb-4 transform transition duration-300 hover:scale-101'>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='w-full h-auto mb-2' />
                  <h2 className='text-lg font-bold'>{movie.title}</h2>
                  <p className='text-1xl font-semibold'>{movie.release_date}</p>
                </Link>
                <button onClick={()=>dispatch(removeFromWatchList(movie))} className='mt-2 font-bold bg-red-400 text-white hover:bg-red-700 py-2 px-4 rounded'>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default WatchList