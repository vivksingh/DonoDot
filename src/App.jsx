import HeroSection from './Components/HeroSection'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dummy from './Components/Dummy'
import DonatePage from './Components/DonateForm/DonatePage'
import ClaimPage from './Components/ClaimPage/ClaimPage'
import AboutUs from './Components/AboutUs'

function App() {
  
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element = {<HeroSection />} />
        <Route path='/donate' element = {<DonatePage />} />
        <Route path='/claim' element = {<ClaimPage />} />
        <Route path='/about-us' element = {<AboutUs />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App


