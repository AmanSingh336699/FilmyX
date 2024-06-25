import React from 'react'
import SearchBar from '../components/SearchBar'
import TrendingSlideCarousel from '../components/Carousel/TrendingSlideCarousel'
import TopRatedCarousel from '../components/Carousel/TopRatedCarousel'

const Home = () => {
 
  return (
    <div className='constainer mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4 text-center'>Movie Search</h1>
        <SearchBar />
        <TrendingSlideCarousel />
        <TopRatedCarousel />
    </div>
  )
}

export default Home