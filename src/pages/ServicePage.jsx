import React from 'react'
import HeroPage from '../components/HeroPage'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function ServicePage() {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <Services/>
      <Footer/>
    </div>
  )
}
