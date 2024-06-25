import {useParams} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useEffect, useState } from 'react'
import VideoPOP from '../components/video/VideoPOP'
import { fetchMovieCasts, fetchMovieDetail, fetchTVCasts, fetchTVDetail } from '../api/TMDB'

function Details(){ //{isTV}
    const {id, isTV} = useParams()
    const [item, setItem] = useState(null);
    const [credits, setCredits] = useState([])

    useEffect(()=>{
        const getItems = async ()=>{
            try {
                console.log(`fetching details ${isTV ? 'movie' : 'TV'} with ${id}`)
                const itemData = isTV === 'true' ? await fetchMovieDetail(id) : await fetchTVDetail(id);
                setItem(itemData);
                console.log('itemdata:',itemData)
            } catch (error){
                console.error(error)
            }
        };

        const getCredits = async ()=>{
            try {
                console.log(`fetching details ${isTV ? 'movie' : 'TV show'} with ${id}`)
                const creditData = isTV === 'true' ?  await fetchMovieCasts(id) : await fetchTVCasts(id) 
                console.log("credit Data", creditData)
                setCredits(creditData.cast);
            } catch (error) {
                console.error(error)
            }
        };
        getItems()
        getCredits()
    }, [id, isTV])
    
    const convertMinutesToHours=(minutes)=>{
        const hours = Math.floor(minutes/60)
        const remainMinutes = minutes % 60
        return `${hours}h ${remainMinutes}m`
    }
    
    if(!item){
        return <div className='text-red-600 text-center text-xl font-bold'>Loading....</div>
    }

    return(
        <div className='container mx-auto p-4'>
            <div className='flex flex-col lg:flex-row gap-4'>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} className='w-2/4 lg:w-2/4 object-cover rounded' effect="blur"/>
                <div className='flex flex-col w-full lg:w-2/3'>
                     <h1 className='text-2xl font-bold mb-2'>{item.title || item.name}</h1>
                     <div className='flex gap-4'>
                        {item.genres.map((genre)=>(
                            <span className='bg-teal-700 text-white rounded-md mb-4 w-20 h-15 text-center shadow-lg' key={genre.id}>{genre.name}</span>
                        ))}
                     </div>
                     <p className='text-1xl font-semibold'>{item.overview}</p>
                     <p className='mt-4'><strong>Rating: </strong>{item.vote_average}/10</p>
                     <p className='mt-4'><strong>Runtime: </strong>{convertMinutesToHours(item.runtime)}</p>
                     <h2 className='text-2xl font-bold mt-2'>Release Date</h2>
                     <p className='text-lg'>{item.release_date || item.first_air_date}</p>
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

export default Details