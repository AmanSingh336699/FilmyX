import React, { useEffect, useState, useCallback } from 'react'
import Card from '../../Components/Card/Card'
import { fetchData } from '../../api/TMDB'
import Spinner from '../../Components/Spinner/Spinner'
import { useParams } from 'react-router-dom'
import ContentWrapper from '../../Components/contentWrapper/ContentWrapper'
import InfiniteScroll from 'react-infinite-scroll-component'
import "./style.scss"

function SearchResult() {
    const [data, setData] = useState({ results: [], total_pages: 0})
    const [pageNum, setPageNum] = useState(1)
    const [loading, setLoading] = useState(false)
    const { query } = useParams()

    const fetchSampleQuery = useCallback(async (page) => {
        setLoading(true)
        try {
            const response = await fetchData(`/search/multi?query=${query}&page=${page}`)
            if(page === 1){
                setData(response)
            } else {
                setData((prevData) => {
                    [...prevData.results, ...response.results]
                })
            }
        } catch (error) {
            console.error(error)

        } finally {
            setLoading(false)
        }
    },[query])

    useEffect(() => {
        fetchSampleQuery(1)
        setPageNum(1)
    },[query, fetchSampleQuery])

    const fetchNextPageData = async() => {
        if(pageNum <= data.total_pages) {
            fetchSampleQuery(page + 1)
            setPageNum(prev => prev+1)
        }
    }


    return(
        <div className='searchResultsPage'> 
            {loading && <Spinner initial={true} />}
            <ContentWrapper>
                {!loading && (
                    <>
                        {data.results.length > 0 ? (
                            <>
                                <div className='pageTitle'>
                                    {`Search ${data.total_pages > 1 ? "results" : "result"} for '${query}'`}
                                </div>
                                <InfiniteScroll className="content"
                                    dataLength={data.results.length}
                                    next={fetchNextPageData}
                                    hasMore={pageNum <= data.total_pages}
                                    loader={<Spinner initial={true} />}>
                                        {data.results.map((item, index) => (
                                            item.media_type !== "person" && (
                                                <Card key={index} data={item} fromSearch={true} />
                                            )
                                        ))}
                                </InfiniteScroll>
                            </>
                        ) : (
                            <span className='resultNotFound'>Sorry, Results not found!</span>
                        )}
                    </>
                )}
            </ContentWrapper>
        </div>
    )
}

export default SearchResult