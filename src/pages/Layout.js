import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import '../styles/Layout.css'
import Footer from '../components/Footer'

const Layout = () => {

  return (
    <div className='App'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout