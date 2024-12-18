import HeroSection from './Components/HeroSection'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dummy from './Components/Dummy'
import DonatePage from './Components/DonateForm/DonatePage'
import ClaimPage from './Components/ClaimPage/ClaimPage'
import AboutUs from './Components/AboutUs'
import Claim from './Components/ClaimPage/Claim'
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import LoginForm from './Components/Auth/LoginForm';
import RegisterForm from './Components/Auth/RegisterForm';
import AdminPanel from './Components/AdminPanel/AdminPanel'

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />

        
        {/* Protected Routes */}
        <Route path='/donate' element={
           <ProtectedRoute>
            <DonatePage />
          </ProtectedRoute>
         
        } />
        
        <Route path='/claim' element={
          <ProtectedRoute>
            <ClaimPage />
          </ProtectedRoute>
         
        } />
        
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/claim/:id' element={<Claim />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;



