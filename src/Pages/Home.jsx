import React from 'react'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'
import RecentMovie from '../components/RecentMovie'
import { useSelector } from 'react-redux'
import TrendingSlide from '../components/Carousel/TrendingSlide'

const Home = () => {
  const movies = useSelector((state) => state.movies.list);
 
  return (
    <div className='constainer mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4 text-center'>Movie Search</h1>
        <SearchBar />
        <TrendingSlide />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
        <RecentMovie />
    </div>
  )
}

export default Home