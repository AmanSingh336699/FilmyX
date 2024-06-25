import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {
    const [query, setQuery] = useState('')
    const [searchType, setSearchType] = useState('movie')
    const navigate = useNavigate();
    
    const handleSearch = (e)=>{
        e.preventDefault();
        if(query.trim()){
            const searchUrl = `/search?query=${encodeURIComponent(query)}&type=${searchType}`;
            window.open(searchUrl,'_top')
        }else{
          return alert("enter movie name")
        }
    }
  return (
        <form onSubmit={handleSearch} className='flex mb-4 gap-10'>
          <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} className='border border-gray-300 p-2 flex-grow rounded-lg' placeholder={`Search for ${searchType === 'movie' ? 'movies':'TV Series'}...`} autoFocus />
          <select value={searchType} onChange={(e)=>setSearchType(e.target.value)} className='px-2 py-2 border border-gray-400 focus:outline cursor-pointer'>
            <option value="movie">Movies</option>
            <option value="tv">TV Series</option>
          </select>
          <button type="submit" className='bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br- focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Search</button>
        </form>
  )
}

export default SearchBar