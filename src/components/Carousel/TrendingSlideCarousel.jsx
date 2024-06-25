import React, { useEffect, useState } from 'react'
import { fetchTrendingMovies, fetchTrendingTVShows } from '../../api/TMDB'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import MovieCard from '../MovieCard';
import Switch from '../switch/Switch';

function TrendingSlideCarousel() {
    const [items, setItems] = useState([]);
    const [isTV, setIsTV] = useState(false)

    useEffect(()=>{
        const getTrendingItems = async ()=>{
            const itemsData = isTV ? await fetchTrendingMovies() : await fetchTrendingTVShows();
            setItems(itemsData)
        }
        getTrendingItems()
    },[isTV])

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

    
    const toggleContent = (showTV) =>{
        setIsTV(showTV)
    }
  return (
    <div className='container mx-auto p-4'>
        <div className='flex justify-between flex-wrap mb-4'>
            <h2 className='text-2xl font-bold mb-4'>{isTV ? 'Trending Movies': 'Trending TV Series'}</h2>
            <Switch isTV={isTV} toggle={toggleContent} />
        </div>
        <Carousel responsive={resposive} infinite autoPlay autoPlaySpeed={3000} arrows={false} customTransition='all .5' transitionDuration={500} draggable>
            {items.map((item)=>(
            <MovieCard key={item.id} item={item}/>
            ))}
        </Carousel>
    </div>
  )
}

export default TrendingSlideCarousel