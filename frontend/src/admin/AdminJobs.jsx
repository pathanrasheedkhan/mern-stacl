/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const dispatch = useDispatch();
  const [input, setInput ] = useState("");
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input])
    const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input className="w-fit" placeholder="Search..."
          onChange = { (e) => setInput(e.target.value)}
           />

          <Button className='bg-slate-900 hover:bg-gray-500 text-white rounded-full' onClick ={ () => navigate ('/admin/jobs/create') }>New job</Button>
        </div>
        <AdminJobsTable/>
      </div>
    </div>
  );
};

export default AdminJobs;
