import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { fetchMovieVideos } from '../../api/TMDB'
import { useParams } from 'react-router-dom'
function VideoPOP() {
    const [videos, setVideo] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        const getMovieVideos = async () =>{
            try {
                const videoData = await fetchMovieVideos(id)
                setVideo(videoData.results)
            } catch (error) {
                console.error(error)
            }
        } 
        getMovieVideos()
    },[id])

    const getTrailer = ()=>{
        const trailer = videos.find((video)=>video.type === 'Trailer' && video.site === 'YouTube');
        return trailer && `https://www.youtube.com/watch?v=${trailer.key}`
    }
  return (
    <div className=''>
        <h2 className='text-2xl font-bold mb-4'>Trailer</h2>
        <div className='flex-justify-center'>
            {getTrailer() ? (
                <ReactPlayer url={getTrailer()} width='50%' height='400px' controls />
            ) : (
                <p>No trailer Available</p>
            )}
        </div>
    </div>
  )
}

export default VideoPOP