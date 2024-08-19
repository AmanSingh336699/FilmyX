import React, { useState } from 'react'
import useFetch from '../../Hook/useFetch'
import ToggleSwitch from '../../Components/ToggleSwitch/ToggleSwitch'
import ContentWrapper from '../../Components/contentWrapper/ContentWrapper'
import Carousel from '../../Components/caraousel/Caraousel'

function PopularCarousel() {
    const [endpoint,setEndPoint] = useState("movie")
    const { data, loading } = useFetch(`/${endpoint}/popular`)

    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv")
    }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Popular Shows</span>
            <ToggleSwitch data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default PopularCarousel