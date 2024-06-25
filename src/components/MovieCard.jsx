import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToWatchList } from '../featureSlices/WatchListSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { FaPlus } from "react-icons/fa"

function MovieCard({ item,isTV }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleClick = ()=> {
    navigate(`details/${item.id}/${isTV}`)
  }
  const handleAddToWatch = ()=>{
    dispatch(addToWatchList(item))
     }

  return (
          <div className='max-w-sm rounded overflow-hidden shadow-lg aspect-h-1' onClick={handleClick}>
            <Link to={`/${item.media_type || 'movie'}/${item.id}`}>
              <LazyLoadImage src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} effect='blur' className="w-full" />
            </Link> 
            <div className='px-6 py-4 '>
              <h2 className='text-lg font-bold mt-2 truncate'>{item.name ||item.title}</h2>
              <p className='text-sm font-semibold'>{item.release_date || item.first_air_date}</p>
              <div className='pt-4 flex justify-center'>
                <button onClick={handleAddToWatch} className='bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 text-sm font-medium px-5 py-2.5 text-white text-center rounded flex items-center'><FaPlus className='3xl mr-2' /> WatchList</button> 
              </div>
            </div>           
          </div>
      
  )
}

export default MovieCard



