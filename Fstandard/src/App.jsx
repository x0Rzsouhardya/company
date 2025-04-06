import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Services from './Components/Services'
import WhyFstandard from './Components/WhyFstandard'
import OurApp from './Components/OurApp'
import Blog from './Components/Blog'
import Navbar from './Components/Navbar'
import Company from './Components/Company'
import PostBlog from './Components/PostBlog'
import ContactPage from './Components/Contact'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/whyFstandard" element={<WhyFstandard />} /> 
        <Route path="/ourApp" element={<OurApp />} /> 
        <Route path="/company" element={<Company />} /> 
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/post" element={<PostBlog />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
