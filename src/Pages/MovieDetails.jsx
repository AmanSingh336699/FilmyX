import {useParams} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useEffect, useState } from 'react'
import VideoPOP from '../components/video/VideoPOP'
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
    
    const convertMinutesToHours=(minutes)=>{
        const hours = Math.floor(minutes/60)
        const remainMinutes = minutes % 60
        return `${hours}h ${remainMinutes}m`
    }
    
    if(!movie){
        return <div className='text-red-600 text-center text-xl font-bold'>Loading....</div>
    }


    return(
        <div className='container mx-auto p-4'>
            <div className='flex flex-col lg:flex-row gap-4'>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='w-full lg:w-2/4 object-cover rounded' effect="blur"/>
                <div className='flex flex-col w-full lg:w-2/3'>
                     <h1 className='text-2xl font-bold mb-2'>{movie.title}</h1>
                     <div className='flex gap-4'>
                        {movie.genres.map((genre)=>(
                            <span className='bg-teal-700 text-white rounded-md mb-4 w-20 h-15 text-center shadow-lg' key={genre.id}>{genre.name}</span>
                        ))}
                     </div>
                     <p className='text-1xl font-semibold'>{movie.overview}</p>
                     <p className='mt-4'><strong>Rating: </strong>{movie.vote_average}/10</p>
                     <p className='mt-4'><strong>Runtime: </strong>{convertMinutesToHours(movie.runtime)}</p>
                     <h2 className='text-2xl font-bold mt-2'>Release Date</h2>
                     <p className='text-lg'>{movie.release_date}</p>
                </div>
            </div>
            <h2 className='text-2xl font-bold mb-4 text-center'>Cast</h2>
                <div className='flex flex-wrap gap-4'>
                    {credits.map((cast)=>(
                            <div className='flex flex-col items-center' key={cast.id}>
                                <LazyLoadImage className="w-24 h-24 object-cover rounded-full shadow-lg" src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} effect="blur" />
                                <p className='text-sm mt-2'>{cast.name}</p>
                            </div>
                        ))}
                   
                </div>
                <VideoPOP />
        </div>
    )
}

export default MovieDetails