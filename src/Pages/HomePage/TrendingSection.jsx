import React, { useState } from 'react'
import useFetch from '../../Hook/useFetch'
import ToggleSwitch from '../../Components/ToggleSwitch/ToggleSwitch'
import ContentWrapper from '../../Components/contentWrapper/ContentWrapper'
import Carousel from '../../Components/caraousel/Caraousel'

function TrendingSection() {
    const [endpoint, setEndPoint] = useState("day")

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`)

    const onTabChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week")
    }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Trending Section</span>
            <ToggleSwitch data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default TrendingSection