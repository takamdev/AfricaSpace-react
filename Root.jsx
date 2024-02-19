import React from 'react'
import NavBar from './src/components/navBar/jsx/NavBar.jsx'
import { Outlet } from 'react-router-dom'


function Root() {
  return (
    <>
        <NavBar/>
        <Outlet/>
        
    </>
  )
}

export default Root