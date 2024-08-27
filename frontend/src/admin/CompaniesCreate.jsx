


/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { setSingleCompany } from '@/redux/companySlice'
import { COMPANY_API_END_POINT } from '@/utils/content'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const CompaniesCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName]  = useState();
    const dispatch = useDispatch();
    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName} , {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            } );
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company))
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                console.log("before redirect");
                console.log(companyId);
                navigate(`/admin/companies/${companyId}`);

            }


        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto'>
            <div className='my-10'>
            <h1 className='font-bold text-2xl'>YOur company</h1>
            <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta!</p>

            </div>
            <Label>Company Name</Label>
            <Input 
             type ='text'
             placeholder ='Your company name'
             className='my-2 rounded-full'
             onChange = {(e) => setCompanyName(e.target.value)}
            />
             <div className='flex items-center gap-2 my-10'>
                <Button className=' bg-slate-900 hover:bg-gray-500 text-white rounded-full' variant = 'outline' onClick ={() => navigate('/admin/companies') }>Cancel</Button>
                <Button className=' bg-slate-900 hover:bg-gray-500 text-white rounded-full' onClick= {registerNewCompany} >Continue</Button>

             </div>

        </div>
    </div>
  )
}

export default CompaniesCreate