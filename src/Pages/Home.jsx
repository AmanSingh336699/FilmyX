import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import TrendingSlide from '../components/Carousel/TrendingSlide'
import Switch from '../components/switch/Switch'
import TopRatedCarousel from '../components/Carousel/TopRatedCarousel'

const Home = () => {
 
 
  return (
    <div className='constainer mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4 text-center'>Movie Search</h1>
        <SearchBar />
        <TrendingSlide />
        <TopRatedCarousel />
    </div>
  )
}

export default Home