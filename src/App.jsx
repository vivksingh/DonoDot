import { useEffect, useState } from 'react'
import HeroSection from './Components/HeroSection'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dummy from './Components/Dummy'
import DonatePage from './Components/DonatePage'

function App() {
  
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element = {<HeroSection />} />
        <Route path='/donate' element = {<DonatePage />} />
        <Route path='/claim' element = {<Dummy />} />
        <Route path='/about-us' element = {<Dummy />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App


