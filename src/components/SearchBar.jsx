import React, { useState } from 'react'
import { useDispatch, } from 'react-redux'
import { searchMovies } from '../featureSlices/MovieSlice'

function SearchBar() {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

    const handleSearch = (e)=>{
        e.preventDefault();
        if(query.trim()){
            // dispatch(searchMovies(query))
            const searchUrl = `/search?query=${encodeURIComponent(query)}`;
            window.open(searchUrl,'_top')
        }else{
          return alert("enter movie name")
        }
    }
  return (
        <form onSubmit={handleSearch} className='flex mb-4'>
          <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} className='border border-gray-300 p-2 flex-grow rounded-lg' placeholder='Search for a movie...' autoFocus />
          <button type="submit" className='bg-blue-500 ml-2 px-4 py-2 text-white rounded-lg hover:bg-blue-700 focus:outline-none transform hover:-translate-y-1'>Search</button>
        </form>
  )
}

export default SearchBar