import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer/Footer'
import { navObj } from '../components/Navbar/Data'
import Features from '../components/Features/Features'
//import Carousel from '../components/Carousel/Carousel'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

  return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} {...navObj}/>
        <Announcement />
        <Slider/>
        <Features/> 
        <Footer />
        
      </>
    
  )
}

export default Home