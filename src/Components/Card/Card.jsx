import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaBookmark, FaRegBookmark  } from "react-icons/fa"
import { useNavigate } from"react-router-dom"
import IMG from '../LazyLoadImage/IMG'
import CircleRating from '../CircleRating/CircleRating'
import Genres from '../Genres/Genres'
import NoPoster from '../.././assets/no-Poster/no-poster.png'
import "./style.scss"
import { addWatchList, removeWatchList } from '../../Redux/reduxSlice/watchlistSlice'

function Card({ data, fromSearch, mediaType }) {
    const { url } = useSelector(state => state.home)
    const watchlist = useSelector(state => state.watchlist.watchlist)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const posterUrl = data.poster_path ? `${url.poster}${data.poster_path}` : NoPoster;

    //check if the movie is already in the watchlist
    const isInWatchList = watchlist.some((item) => item.id === data.id)

    const handleWatchListClick = useCallback((e) => {
        e.stopPropagation() //prevent navigate to the movie details page
        if(isInWatchList){
            dispatch(removeWatchList(data))
        } else {
            dispatch(addWatchList({ ...data, media_type: mediaType}))
        }
    },[isInWatchList, data, dispatch, mediaType])

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US",
            {month: "short", day: "numeric", year: "numeric"}
        )
    }

    const handleClick = () => {
        const path = `/${data.media_type || mediaType}/${data.id}`
        navigate(path)
    }

  return (
    <div onClick={handleClick} className='movieCard'>
        <div className='posterBlock'>
            <IMG src={posterUrl} className="posterImg" />
            <div className='saveIcon absolute top-2 right-2 transition-colors duration-500 ease shadow-md p-[6px] rounded-full cursor-pointer text-white text-sm hover:bg-[rgba(0,0,0,0.8)]' onClick={handleWatchListClick}>
                {isInWatchList ? <FaBookmark size={24} /> : <FaRegBookmark size={24} />}
            </div>
            {!fromSearch && (
                <>
                    <CircleRating rating={data.vote_average.toFixed(1)} />
                    <Genres data={data.genre_ids.slice(0, 2)} />
                </>
            )}
        </div>
        <div className='textBlock'>
            <span className='title'>{data.title || data.name}</span>
            <span className='date'>{formatDate(data.release_date)}</span>
        </div>
    </div>
  )
}

export default memo(Card)