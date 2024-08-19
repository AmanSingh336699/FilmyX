import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ContentWrapper from '../contentWrapper/ContentWrapper';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import IMG from '../LazyLoadImage/IMG';
import { FaBookmark, FaRegBookmark  } from "react-icons/fa"
import CircleRating from '../CircleRating/CircleRating';
import Genres from '../Genres/Genres';
import NoPoster from '../.././assets/no-Poster/no-poster.png'
import "./style.scss"
import { addWatchList, removeWatchList } from '../../Redux/reduxSlice/watchlistSlice';

const Carousel = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const watchlist = useSelector(state => state.watchlist.watchlist)

    const handleWatchListClick = useCallback((e, item) => {
        e.stopPropagation()
        const isInWatchList = watchlist.some(i => i.id === item.id)
        if(isInWatchList){
            dispatch(removeWatchList(item))
        } else{
            dispatch(addWatchList({ ...item, media_type: item.media_type || endpoint}))
        }
    }, [watchlist, dispatch, endpoint])

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        return `${month}/${day}/${year}`;
    }
    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel">
            <ContentWrapper>
                {title && <div className="carouselTitle">{title}</div>}
                {!loading ? (
                    <div className="carouselItems" ref={carouselContainer}>
                        {data?.map((item) => {
                            const posterUrl = item.poster_path
                                ? url.poster + item.poster_path
                                : NoPoster;
                            const isInWatchList = watchlist.some((i) => i.id === item.id)
                            return (
                                <div
                                    key={item.id}
                                    className="carouselItem"
                                    onClick={() =>
                                        navigate(
                                            `/${item.media_type || endpoint}/${
                                                item.id
                                            }`
                                        )
                                    }
                                >
                                    <div className="posterBlock">
                                        <IMG src={posterUrl} />
                                        <div className='saveIcon absolute top-2 right-2 shadow-md p-[6px] rounded-full transition-colors duration-500 ease cursor-pointer text-white text-sm hover:bg-[rgba(0,0,0,0.8)]' onClick={(e) => handleWatchListClick(e, item)}>
                                            {isInWatchList ? <FaBookmark size={24} /> : <FaRegBookmark size={24} />}
                                        </div>
                                        <CircleRating
                                            rating={item.vote_average.toFixed(
                                                1
                                            )}
                                        />
                                        <Genres
                                            data={item.genre_ids.slice(0, 2)}
                                        />
                                    </div>
                                    <div className="textBlock font-bold">
                                        <span className="title">
                                            {item.title || item.name}
                                        </span>
                                        <span className="date">
                                            {formatDate(item.release_date)}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel;