import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Services from './Components/Services/Services'
import Solutions from './Components/Solutions/Solutions'
import Partners from './Components/Partners/Partners'
import Careers from './Components/Careers/Careers'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'
import Header from './Components/BasicBody/Header'
import Footer from './Components/BasicBody/Footer'

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/solutions' element={<Solutions/>} />
        <Route path='/partners' element={<Partners/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contactus' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>   
    </>
  )
}

export default App