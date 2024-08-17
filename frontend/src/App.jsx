/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browser from './components/Browser'
import Profile from './components/Profile'
import Jobdescription from './components/Jobdescription'


const  appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/Signup',
    element: <Signup/>
  },
  {
    path: '/jobs',
    element: <Jobs/>
  },
  {
    path: '/description/:id',
    element: <Jobdescription/>
  },
  {
    path: '/browser',
    element: <Browser/>
  },
  {
    path: '/profile',
    element: <Profile/>
  }

])

const App = () => {
  return (
    <div>
      
     <RouterProvider router = {appRouter} />
    </div>
  )
}

export default App
