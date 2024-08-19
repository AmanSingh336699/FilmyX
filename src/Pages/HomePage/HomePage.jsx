import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import TrendingSection from './TrendingSection'
import PopularCarousel from './PopularCarousel'
import TopRated from './TopRated'
import "./homeStyle.scss"

function HomePage() {
  return (
    <div className='p-4 bg-sky-100'>
        <h1 className='text-3xl font-bold text-center mt-14 mb-2'>Dive in and discover your next favourite movie or TV show with us</h1>
        <div className='flex flex-col gap-2'>
          <SearchBar />
          <TrendingSection />
          <PopularCarousel />
          <TopRated />
        </div>
    </div>
  )
}

export default HomePage