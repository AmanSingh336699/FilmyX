import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToWatchList } from '../featureSlices/WatchListSlice'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { fetchMovieCasts, fetchMovieDetail } from '../api/TMDB'

function MovieDetails(){
    const {id} = useParams()
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState([])

    useEffect(()=>{
        const getMovie = async ()=>{
            try {
                const movieData = await fetchMovieDetail(id);
                setMovie(movieData);
            } catch (error){
                console.error(error)
            }
        };

        const getMovieCredits = async ()=>{
            try {
                const creditData = await fetchMovieCasts(id)
                setCredits(creditData.cast);
            } catch (error) {
                console.error(error)
            }
        };
        getMovieCredits()
        getMovie()
    })

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
    
    if(!movie){
        return <div className='text-red-600 text-center text-xl font-bold'>Loading....</div>
    }


    return(
        <div className='container mx-auto p-4'>
            <div className='flex flex-col lg:flex-row gap-4'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='w-full lg:w-1/3 object-cover rounded' />
                <div className='flex flex-col w-full lg:w-2/3'>
                     <h1 className='text-2xl font-bold mb-2'>{movie.title}</h1>
                     <p className='text-1xl font-semibold'>{movie.overview}</p>
                     <p className='mt-4'><strong>Rating: </strong>{movie.vote_average}/10</p>
                     <h2 className='text-2xl font-bold mt-2'>Release Date</h2>
                     <p className='text-lg'>{movie.release_date}</p>
                </div>
            </div>
            <h2 className='text-2xl font-bold mb-4 text-center'>Cast</h2>
                <div className='flex flex-wrap gap-4'>
                   <Slider {...settings}>
                    {credits.map((cast)=>(
                            <div className='flex flex-col items-center' key={cast.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} className='w-24 h-24 object-cover rounded-full' />
                                <p className='text-sm mt-2'>{cast.name}</p>
                            </div>
                        ))}
                   </Slider>
                </div>
        </div>
    )
}

export default MovieDetails