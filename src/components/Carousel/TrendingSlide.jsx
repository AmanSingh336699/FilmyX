import React, { Suspense, useEffect, useState } from 'react'
import Slider from 'react-slick';
import { fetchTrendingMovies } from '../../api/TMDB'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import MovieCard from '../MovieCard';


function TrendingSlide() {
    const [trendingMovie, setTrandingMovie] = useState([])
    useEffect(()=>{
        const getTrendingMovie = async ()=>{
            const movies = await fetchTrendingMovies()
            setTrandingMovie(movies)
        }
        getTrendingMovie();
    },[]);

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
        <h1 className='text-3xl font-bold mb-4 text-center'>Trending Movies</h1>
            <Slider {...settings}>
                {trendingMovie.map((movie)=>(
                        <MovieCard key={movie.id} movie={movie} /> 
                ))}
            </Slider>
        
    </div>
  )
}

export default TrendingSlide