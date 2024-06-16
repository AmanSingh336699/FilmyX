import React from 'react'
import { Link } from 'react-router-dom'
import ToggleSwitch from './toggleSwitch'

function Header() {
  return (
    <header className='p-4'>
        <nav className='flex flex-wrap justify-between h-full w-full bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 p-4 shadow-lg'>
            <Link to="/" className='font-bold text-xl'>Home</Link>
            <Link to="/watchlist" className='text-xl font-bold'>Watchlist</Link>
            <ToggleSwitch />
        </nav>
        
    </header>
  )
}

export default Header