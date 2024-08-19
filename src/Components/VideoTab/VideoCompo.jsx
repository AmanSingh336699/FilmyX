import React from 'react'
import ReactPlayer from "react-player/youtube"

function VideoCompo({show, setShow, videoId, setVideoId}) {

    const handleClick = () =>{
        setShow(false)
        setVideoId(null)
    }

  return (
    <div className={`flex justify-center items-center fixed top-0 left-0 w-full h-full
     z-50 transition-opacity-400 ${show ? "opacity-1 visible" : "opacity-0 invisible"}`}>
        <div onClick={handleClick} className='absolute top-0 left-0 w-full h-full bg-black/25 backdrop-filter blur-3.5 -webkit-backdrop-filter opacity-0 transition-opacity-400 '></div>
        <div className='relative w-[1300px] aspect-video bg-white scale-25 transition-transform-250'>
            <span className='absolute top-[-20px] right-0 text-white cursor-pointer' onClick={handleClick}>
                Close
            </span>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`}
                controls
                width="100%"
                height="100%"
            />
        </div>
    </div>
  )
}

export default VideoCompo