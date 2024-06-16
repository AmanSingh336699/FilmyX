import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-blue-500 text-white p-4'>
        <nav className='flex flex-wrap justify-between'>
            <Link to="/" className='font-bold text-xl'>Home</Link>
            <Link to="/watchlist" className='text-xl font-bold'>Watchlist</Link>
        </nav>
    </header>
  )
}

export default Header