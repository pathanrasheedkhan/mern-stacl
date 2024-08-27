/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useDispatch } from "react-redux";
import { setsearchCompanyByText } from "@/redux/companySlice";

const Companies = () => {
  useGetAllCompanies();
  const dispatch = useDispatch();
  const [input, setInput ] = useState("");
  useEffect(() => {
    dispatch(setsearchCompanyByText(input));
  }, [input])
    const navigate = useNavigate();
  return (
    <div className="">
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input className="w-fit" placeholder="Search..."
          onChange = { (e) => setInput(e.target.value)}
           />

          <Button className=' bg-slate-900 hover:bg-gray-500 text-white rounded-full' onClick ={ () => navigate ('/admin/companies/create') }>New Company</Button>
        </div>
        <CompaniesTable/>
      </div>
    </div>
  );
};

export default Companies;
