import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hook/useFetch'
import DetailBanner from './DetailBanner'
import Cast from './Cast'
import VideosSection from './VideoSection/VideoSection'
import Similar from './Similar'
import Recommendation from './Recommendation'

function Details() {
    const {mediaType, id} = useParams()
    const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
    const {data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div className='bg-[rgba(0,139,139)]'>
        <DetailBanner video={data?.results?.[0]} crew={credits?.crew} />
        <Cast data={credits?.cast} loading={creditsLoading} />
        <VideosSection data={data} loading={loading} />
        <Similar mediaType={mediaType} id={id} />
        <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details