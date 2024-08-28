/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler =() => {
     dispatch(setSearchedQuery(query))
     navigate ("/browse");
  }

  return (
  <div className="bg-[url('hro.avif')]">
    <div className="text-center    flex items-center justify-center  ">
      <div className="flex flex-col gap-5 my-10">
        <span className=" mx-auto px-4 py-4 rounded-s-full bg-gray-100 text-[#f83002] font-medium">
          No .1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search , Apply & <br /> Get Your{" "}
          <span className="text-[#6A38c2]">Dreame Job</span>{" "}
        </h1>
        <p>
        Unlock Your Future Discover the Perfect Job That Aligns with Your Passion and Skills.
        <br /> The Status of your JOb will be Shown in you profile Stay update 
          
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
            <input type="text"
            placeholder="Search...."
            onChange = {(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
             />
             <Button onClick ={searchJobHandler} className="rounded-r-full bg-[#6A38c2]">
                <Search className="h-5 w-5"/>
             </Button>
        </div>
      </div>
    </div>
  </div>  
  );
};

export default HeroSection;
