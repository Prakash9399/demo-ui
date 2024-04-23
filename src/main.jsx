import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Profile from './components/Navcomponents/Profile.jsx'
import Intheft from './components/Navcomponents/Intheft.jsx'
import Devices from './components/Navcomponents/Devices.jsx'
import Vehicle from './components/Navcomponents/Vehicle.jsx'
import Mycustomer from './components/Navcomponents/Mycustomer.jsx'
import Home from './Home.jsx'
import Login from './components/Navcomponents/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='home' element={<Home />} />
      <Route path='intheft' element={<Intheft />} />
      <Route path='devices' element={<Devices />} />
      <Route path='profile' element={<Profile />} />
      <Route path='vehicle' element={<Vehicle />} />
      <Route path='mycustomer' element={<Mycustomer />} />
      <Route path='login' element={<Login />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
