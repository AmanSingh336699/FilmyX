import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WatchListPage from './Pages/WatchListPage'
import MovieDetails from './Pages/MovieDetails'
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='/watchlist' element={<WatchListPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App