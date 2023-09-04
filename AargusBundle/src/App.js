import React, { useEffect } from 'react'
import { Route,BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Services from './Components/Services/Services'
import Solutions from './Components/Solutions/Solutions'
import Partners from './Components/Partners/Partners'
import Careers from './Components/Careers/Careers'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'
import Footer from './Components/BasicBody/Footer'
import Navbar from './Components/BasicBody/ResponsiveNavbar/Navbar'
import DataCenter from './Components/Services/ICTinfrastructure/DataCenter'

const App = () => {
// -----------------------Scroll to top when routing change---------------------
  const {pathname} =useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/Datacenter' element={<DataCenter/>} />
        <Route path='/solutions' element={<Solutions/>} />
        <Route path='/partners' element={<Partners/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contactus' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App