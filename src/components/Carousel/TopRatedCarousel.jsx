import Switch from '../switch/Switch';
import { fetchTopRatedMovies,fetchTopRatedTvShow } from '../../api/TMDB';
import React, { useState, useEffect } from 'react'
import MovieCard from '../MovieCard';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function TopRatedCarousel() {

  const [items, setItems] = useState([])
  const [isTV, setIsTV] = useState(false)

  useEffect(()=>{
    const getTopRatedItems = async ()=>{
      const itemsData = isTV ? await fetchTopRatedMovies() : await fetchTopRatedTvShow();
      setItems(itemsData)
    }
    getTopRatedItems()
  },[isTV])


  const toggleContent = (showTV) =>{
    setIsTV(showTV)
  }

  const resposive = {
    superLargeDesktop: {
      breakpoint: {max: 4000 , min: 3000},
      items: 5
    },
    desktop: {
      breakpoint: {max: 3000 , min: 1024},
      items: 4
    },
    tablet: {
      breakpoint: {max: 1024 , min: 464},
      items: 3
    },
    mobile: {
      breakpoint: {max: 464 , min: 0},
      items: 2
    }
  }
  
  return (
    <>
      <div className='flex flex-wrap justify-between mt-4'>
        <h2 className='text-3xl font-bold mb-4 mt-2 text-center'>{isTV ? 'Top Rated Movies' : 'Top Rated Tv Series'}</h2>
        <Switch isTV={isTV} toggle={toggleContent} />
      </div>
      <Carousel responsive={resposive} infinite autoPlay autoPlaySpeed={3000} arrows={false}>
        {items.map((item)=>(
          <div key={item.id}>
            <MovieCard item={item} isTV={isTV}/>
          </div>
        ))}
      </Carousel>
    </>
  )
}
