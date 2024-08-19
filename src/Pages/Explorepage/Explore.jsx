import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select'
import InfiniteScroll from "react-infinite-scroll-component"
import ContentWrapper from '../../Components/contentWrapper/ContentWrapper'
import Spinner from '../../Components/Spinner/Spinner'
import { fetchData } from '../../api/TMDB'
import useFetch  from '../../Hook/useFetch'
import Card from '../../Components/Card/Card'
import './style.scss'

const sortbyData = [
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "original_title.asc", label: "Title (A-Z)"}
]

function Explore() {
    const { mediaType } = useParams()
    const [data, setData] = useState(null)
    const [pageNum, setPageNum] = useState(1)
    const [loading, setLoading] = useState(false)
    const [filters, setFilters] = useState({})
    const { data: genresData } = useFetch(`/genre/${mediaType}/list`)

    const updateFilters = useCallback(async () => {
        try {
            setLoading(true)
            const res = await fetchData(`/discover/${mediaType}?page=${pageNum}`, filters)
            setData((prevData) => {
                if(pageNum === 1) return res;
                return { ...prevData, results: [...(prevData?.results || []), ...res.results]}
            })
            setPageNum(prev => prev+1)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
        
    }, [filters, mediaType, pageNum])


    useEffect(() => {
        setPageNum(1)
        setFilters({})
        setData(null)
        updateFilters()
    }, [mediaType,])

    const handleFilterChange = useCallback((selectedItems, action) => {
        setPageNum(1)
        setFilters((prevFilters) => {
            const newFilter = {...prevFilters}
            if(action.name === "sortby"){
                newFilter.sort_by = action.action !== "clear" ? selectedItems.value : undefined
            } 

            if(action.name === "genres"){
                const genreIds = selectedItems?.map(g => g.id).join(",") || ""
                newFilter.with_genres = action.action !== "clear" ? genreIds : undefined
            } 

            return newFilter
        })

        setData(null) //clear data to reload filtered results
           
    },[updateFilters])

    const selectedGenres = useMemo(() => {
        return filters.with_genres ? filters.with_genres.split(",").map((id) => genresData?.genres.find(genre => genre.id === parseInt(id))) : []
    }, [filters.with_genres, genresData?.genres])

    const selectedSortBy = useMemo(() => {
        return sortbyData.find(option => option.value === filters.sort_by)
    }, [filters.sort_by])


  return (
    <div className='explorePage'>
        <ContentWrapper>
            <div className='pageHeader'>
                <div className='pageTitle'>
                    {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
                </div>
                <div className='filters'>
                    <Select name='genres' isMulti value={selectedGenres}
                        options={genresData?.genres}
                        getOptionLabel={(option) => option.name}
                        closeMenuOnSelect={false}
                        getOptionValue={(option) => option.id}
                        onChange={handleFilterChange}
                        placeholder="Select Genres"
                        className='react-select-container genresDD'
                        classNamePrefix='react-select' />
                    <Select name='sortby' value={selectedSortBy} options={sortbyData}
                        onChange={handleFilterChange}
                        isClearable={true}
                        placeholder="Sort by" className='react-select-container sortbyDD'
                        classNamePrefix='react-select' />
                </div>
            </div>
            {loading && <Spinner initial={true} />}
            {!loading && data?.results?.length >0 && (
                <InfiniteScroll className="content" dataLength={data?.results?.length || 0}
                    next={updateFilters}
                    hasMore={pageNum <= data?.total_pages} loader={<Spinner />}>
                        {data?.results.map((item, index) => (
                            item.media_type !== "person" && (
                                <Card key={index} data={item} mediaType={mediaType} />
                            )
                        ))}
                </InfiniteScroll>
            )}
            {!loading && data?.length === 0 && (
                <span className='resultNotFound'>Sorry, Result not found!</span>
            )}
        </ContentWrapper>
    </div>
  )
}

export default Explore