/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useGetCompanyById from "@/hooks/useGetCompanyById";
import { COMPANY_API_END_POINT } from "@/utils/content";
import { data } from "autoprefixer";
import axios from "axios";
import { ArrowLeft, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const CompanySetup = () => {
  const params = useParams();

  useGetCompanyById(params.id)
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const {singleCompany} = useSelector(store => store.company)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFiletHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({...input, file });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);


    if(input.file){
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
        headers:{
          'Content-Type' : 'multipart/form-data'
        },
        withCredentials: true,
      });
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/admin/companies");

      }

    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.message);
      toast.error(error.response.data.message)

    } finally{
       setLoading(false);
     }
  }
  useEffect(() => {
    setInput({
      name:singleCompany.name  || "",
    description: singleCompany.description ||"",
    website: singleCompany.website ||"",

    location:singleCompany.location || "",
    file: singleCompany.file || null,
    })

  },[singleCompany])
  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10 ">
        <form onSubmit={submitHandler}>
          <div className="flex item-center gap-5 p-8">
            <Button
            onClick={ () => navigate("/admin/companies")}
              variant="outline"
              className="flex items-center gap-2    bg-slate-900 hover:bg-gray-500 text-white rounded-full"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Set up</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
            <Label>Company Name</Label>
          <Input
            type="text"
            name="name"
            value={input.name}
            onChange={changeEventHandler}
            placeholder="Your company name"
            className="border border-gray-300 p-4 rounded-md"
          />
            </div>
            <div>
            <Label>description</Label>
          <Input
            type="text"
            name="description"
            value={input.description}
            onChange={changeEventHandler}
            placeholder="Your description"
            className="border border-gray-300 p-4 rounded-md"
          />
            </div>
            <div>
            <Label>website</Label>
          <Input
            type="text"
            name="website"
            value={input.website}
            onChange={changeEventHandler}
            placeholder="Your website"
            className="border border-gray-300 p-4 rounded-md"
          />
            </div>
            <div>
            <Label>location</Label>
          <Input
            type="text"
            name="location"
            value={input.location}
            onChange={changeEventHandler}
            placeholder="Your location"
            className="border border-gray-300 p-4 rounded-md"
          />
            </div>
            <div>
            <Label>logo</Label>
          <Input
            type="file"
            accept= "image/*"
            
            onChange={changeFiletHandler}
            placeholder="Your website"
            className="border border-gray-300 p-4 rounded-md"
          />
            </div>
          </div>

          {
               loading ? <Button className="w-full my-4  "> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4  bg-black hover:bg-gray-500 text-white rounded-full" >Update</Button>
          }
          {/* <Button type ="submit" className='mx-auto mt-8   bg-black hover:bg-gray-500 text-white rounded-full'>Update</Button> */}
         
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
