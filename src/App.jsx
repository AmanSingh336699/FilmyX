import React, { useEffect } from 'react'
import SearchResult from './Pages/SearchResultPage/SearchResult'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import { useDispatch } from 'react-redux'
import { fetchData } from './api/TMDB'
import {getApiConfiguration, getGenres} from './Redux/reduxSlice/homeSlice'
import Details from './Pages/DetailPage/Details'
import Explore from './Pages/Explorepage/Explore'
import Header from './Components/Layout/Header/Header'
import Footer from './Components/Layout/Footer/Footer'
import "./App.scss"
import TVNotFound from './Pages/NotFoundPage/NotFound'
import WatchListPage from './Pages/watchListPage/watchlistPage'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const fetchConfig = async ()=>{
      try {
        const res = await fetchData('/configuration')
        const baseUrl = res.images.secure_base_url
        const url = {
          backdrop: `${baseUrl}original`,
          poster: `${baseUrl}original`,
          profile: `${baseUrl}original`
        }
        dispatch(getApiConfiguration(url))
      } catch (error) {
        console.error(error)
      }
    }
    const genresCall = async () => {
      try {
        const endPoints = ["tv", "movie"]
        const allGenres = {}

        for(const url of endPoints){
          const {genres} = await fetchData(`/genre/${url}/list`)
          genres.forEach((item) => {
            allGenres[item.id] = item
          })
        }
        dispatch(getGenres(allGenres))
      } catch (error) {
        console.error(error)
      }
    }

    fetchConfig()

    genresCall()
  },[])


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/watchlist' element={<WatchListPage />} />
        <Route path='*' element={<TVNotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App