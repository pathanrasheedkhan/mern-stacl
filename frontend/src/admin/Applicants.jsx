/* eslint-disable no-unused-vars */
import Navbar from '@/components/shared/Navbar'
import React, { useEffect } from 'react'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { GETAPPLICANTS_API_END_POINT } from '@/utils/content'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {applicants} = useSelector(store=>store.application);

  useEffect(() => {
      const fetchAllApplicants = async () => {
          try {
              const res = await axios.get(`${GETAPPLICANTS_API_END_POINT}/${params.id}/applicant`, { withCredentials: true });
              dispatch(setAllApplicants(res.data.job));
          } catch (error) {
              console.log(error);
          }
      }
      fetchAllApplicants();
  }, [dispatch, params.id]);
  return (
      <div>
          <Navbar />
          <div className='max-w-7xl mx-auto'>
              <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
              <ApplicantsTable />
          </div>
      </div>
  )
}

export default Applicants

// const Applicants = () => {
//   const params = useParams()
//   const dispatch = useDispatch();
//   const {applicants} = useSelector(store => store.application)
//   useEffect(() => {
//     const fetchAllApplicants  = async () => {
//       try {
//         const res = await axios .get(`${GETAPPLICANTS_API_END_POINT}/${params.id}/applicant`,{withCredentials:true});
        
//           dispatch(setAllApplicants(res.data.job));
        
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   })
//   return (
//     <div>
//       <Navbar/>
//       <div className="max-w-7xl mx-auto">
//         <h1 className='font-bold text-xl my-5'>Applicants{applicants?.applications?.length}</h1>
//         <ApplicantsTable/>
//       </div>
//     </div>
//   )
// }

// export default Applicants
