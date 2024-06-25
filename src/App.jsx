import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import WatchListPage from './Pages/WatchListPage'
import Details from './Pages/Details'
import Home from './Pages/Home'
import SearchResults from './components/SearchResults'

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/movie/:id' element={<Details />} />
            <Route path='/tv/:id' element={<Details />} /> */}
            <Route path='/details/:id/:isTV' element={<Details />} />
            <Route path='/watchlist' element={<WatchListPage />} />
            <Route path='/search' element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App