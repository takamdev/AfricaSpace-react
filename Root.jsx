import React from 'react'

import NavBar from "./src/components/NavBar.jsx"
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



