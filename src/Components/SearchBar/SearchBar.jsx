import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContentWrapper from '../contentWrapper/ContentWrapper'

function SearchBar() {
    const [query, setQuery] = useState('') 
    const navigate = useNavigate()

    const handleSearch = async (e) => {
        e.preventDefault(); 
        if(query.trim()){
          navigate(`/search/${query.trim()}`)
        }
        
    }
  return (
    <ContentWrapper>
      <form onSubmit={ handleSearch } className='flex items-center w-full mb-12 mt-10'>
        <input type="text" value={query} className='w-[calc(100%-100px)] h-12 bg-white outline-none border-none rounded-l-full px-3.5 text-sm md:w-[calc(100%-150px)] md:h-14 md:text-xl md:px-7'
         onChange={(e) => setQuery(e.target.value)} placeholder='Search for movies or TV series...' autoFocus />
         <button type='submit' className='w-24 h-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white outline-none font-bold border-none rounded-r-full text-base cursor-pointer md:w-36 md:h-14 md:text-lg'>Search</button>
      </form>
    </ContentWrapper>
  )
}

export default SearchBar