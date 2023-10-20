import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const PageLayout = () => {
  return (
    <>
      <div className='min-vh-100'>
      <Header />
      <Outlet/>
      <Footer />
      </div>
    </>
  )
}

export default PageLayout