import React, { useState } from 'react'
import { useDispatch, } from 'react-redux'
import { searchMovies } from '../featureSlices/MovieSlice'

function SearchBar() {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

    const handleSearch = (e)=>{
        e.preventDefault();
        if(query){
            dispatch(searchMovies(query))
        }else{
          return alert("enter movie name")
        }
    }
  return (
        <form onSubmit={handleSearch} className='flex mb-4'>
          <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} className='border border-gray-300 p-2 flex-grow rounded-lg' placeholder='Search for a movie...' autoFocus />
          <button type="submit" className='bg-blue-500 ml-2 px-4 py-2 text-white rounded hover:bg-blue-700'>Search</button>
        </form>
  )
}

export default SearchBar