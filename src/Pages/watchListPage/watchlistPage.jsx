import React from 'react'
import { useSelector } from 'react-redux'
import ContentWrapper from '../../Components/contentWrapper/ContentWrapper'
import Card from '../../Components/Card/Card'
import './style.scss'

function WatchListPage() {
    const watchlist = useSelector(state => state.watchlist.watchlist)
    
  return (
    <div className='watchlistPage min-h-full pt-24'>
      <ContentWrapper>
        {watchlist.length > 0 ? (
          <>
            <h2 className='title text-2xl text-center font-bold leading-8 text-sky-500 mb-6'>Your Watchlist</h2>
            <div className='content flex flex-wrap gap-2.5 mb-12 md:gap-5'>
              {watchlist.map((item) => (
                  <Card key={item.id} data={item} mediaType={item.mediaType} />
              ))}
          </div>
          </>
          
        ) : (
          <p className='resultNotFound text-3xl text-red-500'>Your Watchlist is empty</p>
        )}
      </ContentWrapper>
    </div>
  )
}

export default WatchListPage