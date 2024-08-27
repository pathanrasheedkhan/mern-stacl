/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Sjob from './Sjob'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import useGetAllJobs from '@/hooks/useGetAllJobs'

// const randomJobs = [1,2,3]


const Browser = () => {
    useGetAllJobs();
    const { allJobs} = useSelector(store => store.job)
    const dispatch = useDispatch();
    useEffect(() => {
       return () => {
        dispatch(setSearchedQuery(""))

       } 
    },[])
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <Navbar/>
        <div>
            <h1 className='font-bold text-xl my-10'>Search Results {allJobs.length}</h1>
            <div className='grid grid-cols-3 gap-4 mt-5'>
            {
                allJobs.map((job) => {
                    return(
                        <Sjob key ={job._id} job={job}/>
                    )
                })
            }
            </div>
           
        </div>
    </div>
  )
}

export default Browser