import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar'
import Home from './Home'
import Events from './Events'
import Gallery from './Gallery'
import Contact from './Contact'
import People from './People'
import Login from './Login'
import Footer from './Footer'

const app = () => {
  return (
    <>
      <Navbar/>
      <br/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <br/>
      <Footer/>
    </>
  )
}

export default app