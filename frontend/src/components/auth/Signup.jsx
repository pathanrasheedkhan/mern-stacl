/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import {USER_API_END_POINT} from '../../utils/content.js'
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Signup = () => {
    const [input, setInput] = useState({
        fullname:"",
        email:"",
        phonenumber:"",
        password:"",
        role:"",
        file:""
    });
    const navigate = useNavigate();
    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    }
    const changeFileHandler = (e) => {
        setInput({...input, file: e.target.files?. [0]});
    }
    const[loading, setLoading] = useState(false);

    const submitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', input.fullname);
        formData.append('email', input.email);
        formData.append('phonenumber', input.phonenumber);
        formData.append('password', input.password);
        formData.append('role', input.role);

        if(input.file){
            formData.append('file', input.file);
        }

        try {
          setLoading(true);
          console.log(`${USER_API_END_POINT}/register`)
          const res = await axios.post(`${USER_API_END_POINT}/register`, formData);
          console.log(res);
          if(res.data.success){
            navigate("/login")
            toast.success(res.data.message);
          }
            

          
        } catch (error) {
          toast.error(error.response.data.message);
        }finally{
          setLoading(false);
        }
    }

  return (
    <div className="w-screen h-screen flext items-center">
      <Navbar className='rounded-full ' />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-300 rounded-lg p-4 my-10 from bg-slate-200 ">
          <h1 className="font-bold text-xl mb-5">Sign-Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text"
            value = {input.fullname}
            name="fullname"
            onChange = {changeEventHandler}
             placeholder="Fullname..."
             className='rounded-full border-gray-400' />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="text" 
            name="email" 
            value = {input.email}
            onChange = {changeEventHandler} 
            placeholder="example@gmail.com" 
            className='rounded-full border-gray-400'/>
          </div>
          <div className="my-2">
            <Label>PhoneNumber</Label>
            <Input type="text"
            name="phonenumber" 
             value = {input.phoneNumber}
             onChange = {changeEventHandler} 
             placeholder="123456789."
             className='rounded-full border-gray-400' />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
             type="text"
             name="password" 
             value = {input.password}
             onChange = {changeEventHandler} 
            placeholder="****"
            className='rounded-full border-gray-400'
             />
          </div>
          <RadioGroup className="flex items-center gap-4 my-5" >
            <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name= "role"
                value="student"
                checked={input.role === "student"}
                onChange = {changeEventHandler}
                className="cursor-pointer rounded-full border-gray-400"
                
                />
              <Label htmlFor="r1">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
            <Input
                type="radio"
                name= "role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange = {changeEventHandler}
                className="cursor-pointer"
                />
              <Label htmlFor="option-two">recruiter</Label>
            </div>
          </RadioGroup>
          <div className="flex items-center gap-2">
            <Label>Profile</Label>
            <Input
              accept = "image/*"
              type ="file"
              onChange = {changeFileHandler}

              className="cursor-pointer rounded-full border-gray-400[p"

            />
          </div>
          {
               loading ? <Button className="w-full my-4  "> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4 bg-slate-900 hover:bg-gray-500 text-white rounded-full" >Sign-Up</Button>
          }



          {/* <Button type = "submit" className= "w-full my-4">Sign-up</Button> */}
          <span className="text-sm">Already have an account ?? <Link to = "/login" className="text-blue-600">Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
