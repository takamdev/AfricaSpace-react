import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from '../Root.jsx'
import Home from './pages/Home.jsx'
import Oeuvres from './pages/Oeuvres.jsx'
import Contact from './pages/Contact.jsx'
import OeuveItem from './pages/OeuveItem.jsx'

function App() {
  let route = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      errorElement:<div>page non trouver</div>,
      children:[
        {
          path:"",
          element: <Home/>
        },{
          path:'Oeuvres',
          element: <Oeuvres/>
        },
        {
          path:'Contact',
          element:<Contact/>
        },{
            path:"OeuveItem/:id",
            element:<OeuveItem/>
        }
      ]
    }
  ])
  return (
   <RouterProvider router={route}/>
  )
}

export default App