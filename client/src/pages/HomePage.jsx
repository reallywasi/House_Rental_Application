import React from 'react'
import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import Categories from '../components/Categories'
import CreateListing from './CreateListing'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Slide/>
      <Categories/>
      {/* <CreateListing/> */}
      <Footer/>
    </>
  )
}

export default HomePage
