/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/content'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const {searchedQuery} = useSelector(store => store.job);
  useEffect(() => {
    const fetchAllJobs = async () => {
        try {
            const res = await axios.get(`${JOB_API_END_POINT}?keyword=${searchedQuery}`, {withCredentials: true});
            if(res.data.success){
              // console.log(res);
              
                dispatch(setAllJobs(res.data.jobs));
            }

        } catch (error) {
          console.log(error)  
        }
    }
    fetchAllJobs()
  },[])
}

export default useGetAllJobs
