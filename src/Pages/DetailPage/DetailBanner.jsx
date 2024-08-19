import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hook/useFetch'
import { useSelector } from 'react-redux'
import IMG from '../../Components/LazyLoadImage/IMG'
import ContentWrapper from '../../Components/contentWrapper/ContentWrapper'
import CircleRating from '../../Components/CircleRating/CircleRating'
import PlayIcon from '../../Components/Playbtn/PlayIcon'
import VideoCompo from '../../Components/VideoTab/VideoCompo'
import './BannerStyle.scss'
import Genres from '../../Components/Genres/Genres'
import NoPoster from '../.././assets/no-Poster/no-poster.png'

function DetailBanner( { video, crew }) {
    const [show, setShow] = useState(false)
    const [videoId, setVideoId] = useState(null)
    const { mediaType, id } = useParams()
    const { data, loading } = useFetch(`/${mediaType}/${id}`)
    const { url } = useSelector(state => state.home)
    const _Genres = data?.genres?.map((g) => g.id)

    const director = crew?.filter(f => f.job === "Director")

    const writer = crew?.filter(
        (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    )

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return `${date.toLocaleDateString("en-US", {
            month: "short",
        })} ${date.getDate()}, ${date.getFullYear()}`
    }

    const toHoursAndMinutes = (tm) => {
        const hours = Math.floor(tm / 60)
        const minutes = tm % 60
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`
    }

    const renderInfoItem = (label, value) => (
        value ? (
            <div className='infoItem'>
                <span className='text bold'>{label}: </span>
                <span className='text'>{value}</span>
            </div>
        ) : null
    )

  return (
    <div className='detailsBanner'>
        {!loading ? (
            data && (
                <>
                    <div className='backdrop-img'>
                        <IMG src={url.backdrop + data.backdrop_path} />
                    </div>
                    <div className='opacity-layer'></div>
                    <ContentWrapper>
                        <div className='content'>
                            <div className='left'>
                                <IMG className="posterImg" src={
                                    data.poster_path ? url.poster + data.poster_path : NoPoster
                                }
                                 />
                            </div>
                            <div className='right text-white'>
                                <div className='title'>{`${data.name || data.title} (${new Date(data.release_date).getFullYear()})`} </div>
                                <div className='subtitle'>{data.tagline}</div>
                                <Genres data={_Genres} />
                                <div className='row'>
                                    <CircleRating rating={data.vote_average.toFixed(1)} />
                                    <div className='playbtn' onClick={
                                        () => {setShow(true)
                                            setVideoId(video.key)
                                        }
                                    }>
                                        <PlayIcon />
                                        <span className='text'>Watch Trailer</span>
                                    </div>
                                </div>
                                <div className='overview'>
                                    <div className='heading'>Overview</div>
                                    <div className='description'>{data.overview}</div>
                                </div>
                                <div className='info'>
                                    {renderInfoItem("Status", data.status)}
                                    {renderInfoItem("Release Date", formatDate(data.release_date))}
                                    {renderInfoItem("Runtime", toHoursAndMinutes(data.runtime))}
                                    {director?.length > 0 && (
                                        <div className='infoItem'>
                                            <span className='text bold'>Director: </span>
                                            <span className='text'>{director.map((d, i) => (
                                                <span key={i}>
                                                    {d.name}
                                                    {director.length - 1 !== i && ", "}
                                                </span>
                                            ))}</span>
                                        </div>
                                    )}
                                </div>
                                    {writer?.length > 0 && (
                                        <div className='info'>
                                            <span className='text bold'> Writer:</span>
                                            <span className='text'>{writer.map((w, i) => (
                                                <span key={i}>
                                                    {w.name}
                                                    {writer.length - 1 !== i && ", "}
                                                </span>
                                            ))}</span>
                                        </div>
                                    )}
                                    {data?.created_by?.length > 0 && (
                                        <div className='info'>
                                            <span className='text bold'> Creator:</span>
                                            <span className='text'>{data.created_by.map((c, i) => (
                                                <span key={i}>
                                                    {c.name}
                                                    {data.created_by.length - 1 !== i && ", "}
                                                </span>
                                            ))}</span>
                                        </div>
                                    )}
                            </div>
                        </div>
                        <VideoCompo  show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
                    </ContentWrapper>
                </>
            )
            ) : (
                <div className='detailsBannerSkeleton'>
                    <ContentWrapper>
                        <div className='detailsBannerSkeleton'></div>
                        <div className='left skeleton'>
                            <div className='row skeleton'></div>
                            <div className='row skeleton'></div>
                            <div className='row skeleton'></div>
                            <div className='row skeleton'></div>
                            <div className='row skeleton'></div>
                            <div className='row skeleton'></div>
                            <div className='row skeleton'></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
    </div>
  )
}

export default DetailBanner