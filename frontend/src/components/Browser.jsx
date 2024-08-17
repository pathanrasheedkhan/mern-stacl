/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './shared/Navbar'
import Sjob from './Sjob'

const randomJobs = [1,2,3]


const Browser = () => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <Navbar/>
        <div>
            <h1 className='font-bold text-xl my-10'>Search Results {randomJobs.length}</h1>
            <div className='grid grid-cols-3 gap-4 mt-5'>
            {
                randomJobs.map((item , index) => {
                    return(
                        <Sjob/>
                    )
                })
            }
            </div>
           
        </div>
    </div>
  )
}

export default Browser