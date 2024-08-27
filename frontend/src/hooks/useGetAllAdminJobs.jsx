/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { setAllAdminJobs, setAllJobs } from '@/redux/jobSlice'
import { GETJOB_API_END_POINT, JOB_API_END_POINT } from '@/utils/content'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch()
  useEffect(() => {
    const fetchAllAdminJobs = async () => {
        try {
            const res = await axios.get(`${GETJOB_API_END_POINT}`, {withCredentials: true});
            if(res.data.success){
              
              
                dispatch(setAllAdminJobs(res.data.jobs));
            }

        } catch (error) {
          console.log(error)  
        }
    }
    fetchAllAdminJobs()
  },[])
}

export default useGetAllAdminJobs
