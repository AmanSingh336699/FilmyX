import Switch from '../switch/Switch';
import { fetchTopRatedMovies,fetchTopRatedTvShow } from '../../api/TMDB';
import React, { useState, useEffect } from 'react'
import MovieCard from '../MovieCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


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
  
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    resposive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

  return (
    <div>
      <div className='flex flex-wrap justify-between mt-4'>
        <h2 className='text-3xl font-bold mb-4 mt-2 text-center'>{isTV ? 'Top Rated Movies' : 'Top Rated Tv Series'}</h2>
        <Switch isTV={isTV} toggle={toggleContent} />
      </div>
      <Slider {...settings}>
        {items.map((item)=>(
          <MovieCard key={item.id} movie={item}/>
        ))}
      </Slider>
    </div>
  )
}
