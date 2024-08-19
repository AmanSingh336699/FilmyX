import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

  return (
    <div className='absolute md:top-0 right-0'>
        {/* <button onClick={toggleMenu} className='inline-flex md:hidden justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2
         bg-rose-500 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'>Menu</button> */}
         <button className='flex flex-col items-center justify-center w-8 h-8 space-y-2 focus:outline-none md:hidden' onClick={toggleMenu}>
          <span className={`block w-full h-2 bg-black transform transition-transform ${isOpen && 'rotate-45 translate-y-2'}`}></span>
          <span className={`block w-full h-2 bg-black transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-full h-2 bg-black transform transition-transform ${isOpen && '-rotate-45 -translate-y-2'}`}></span>
         </button>
         <div className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-sky-500 ring-1
            ring-black ring-opacity-5 ${
                isOpen ? "block" : "hidden"
            }`}>
            <div className='py-1' onClick={toggleMenu}>
                <Link to={`/explore/movie`} className="block px-4 py-2 text-sm text-red-900 hover:bg-gray-100">Movies</Link>
                <Link to={`/explore/tv`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">TV Shows</Link>
                <Link to={`/watchlist`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">WatchList</Link>
            </div>
         </div>
         <div className='hidden md:flex space-x-4 mt-2 absolute right-0 top-full bg-transparent p-2'>
            <Link to={`/explore/movie`} className="px-4 py-2 text-sm m-auto text-red-900 hover:bg-gray-100 hover:rounded-lg">Movies</Link>
            <Link to={`/explore/tv`} className="px-4 py-2 text-sm m-auto text-gray-700 hover:bg-gray-100 hover:rounded-md">TV Shows</Link>
            <Link to={`/watchlist`} className="px-4 py-2 text-sm m-auto text-gray-700 hover:bg-gray-100 hover:rounded-md">WatchList</Link>
         </div>
    </div>
  )
}

export default Menu