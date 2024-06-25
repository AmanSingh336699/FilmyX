import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWatchList } from '../featureSlices/WatchListSlice'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import MovieCard from './MovieCard'
function WatchList() {
   
    const watchlist = useSelector((state)=>state.watchlist)
    const dispatch = useDispatch()

    if(!watchlist || watchlist.length === 0){
      return <div className='text-center text-3xl font-bold text-red-400'>No movies in the watchlist</div>
    }
  return (
    <div className='min-h-screen flex flex-col items-center p-4'>
      <h2 className='text-2xl font-bold mb-5 text-center'>Watchlist</h2>
      <div className='grid grid-col-3 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {watchlist.map((item)=>(
            <div key={item.id} className='block border border-gray-499 p-4 rounded mb-4'>
                <MovieCard />
                <button onClick={()=>dispatch(removeFromWatchList(item))} className='mt-2 font-bold bg-red-400 text-white hover:bg-red-700 py-2 px-4 rounded'>Remove</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default WatchList