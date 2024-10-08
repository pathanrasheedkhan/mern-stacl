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
import Companies from './admin/Companies'
import CompaniesCreate from './admin/CompaniesCreate'
import CompanySetup from './admin/CompanySetup'
import AdminJobs from './admin/AdminJobs'
import PostJobs from './admin/PostJobs'
import Applicants from './admin/Applicants'


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
    path: '/browse',
    element: <Browser/>
  },

  {
    path: '/profile',
    element: <Profile/>
  },

  



  {
    path: "/admin/companies",
    element:<Companies/>
  },


  {
    path:'/admin/companies/:id',
    element : <CompanySetup/>
  },


  {
    path: '/admin/companies/create',
    element : <CompaniesCreate/>
  },
  {
    path:"/admin/jobs",
    element: <AdminJobs/>
  },
  {
    path: '/admin/jobs/create',
    element: <PostJobs/>
  },
 {
  path:'admin/jobs/:id/applicants',
  element: <Applicants/>
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
