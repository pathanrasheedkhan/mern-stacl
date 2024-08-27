/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { setCompanies,  } from '@/redux/companySlice'
import { COMPANY_API_END_POINT,  } from '@/utils/content'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllCompanies = () => {
    const dispatch = useDispatch()
  useEffect(() => {
    const fetchCompanies = async () => {
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/get/`, {withCredentials: true});
            if(res.data.success){
              console.log(res);
              
                dispatch(setCompanies(res.data.companies));
            }

        } catch (error) {
          console.log(error)  
        }
    }
    fetchCompanies()
  },[])
}

export default useGetAllCompanies
