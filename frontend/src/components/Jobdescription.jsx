/* eslint-disable no-unused-vars */
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Jobdescription = () => {
    const isApplied =true;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
          <div>
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {" "}
              12 Positions
            </Badge>
            <Badge className={"text-[#F83082] font-bold"} variant="ghost">
              Part Time
            </Badge>
            <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
              {" "}
              22 LPA
            </Badge>
          </div>{" "}
        </div>

        <Button disabled={isApplied} className = {`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed text-white rounded-full ' : 'bg-[#7209b7] text-white rounded-full hover:bg-[#31195a]'}`}>{ isApplied ? 'Applied' : 'Apply'}</Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>
      <div className="my-4">
        <h1 className="font-bold my-1">Role<span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
        <h1 className="font-bold my-1">Location<span className="pl-4 font-normal text-gray-800">Mumbai</span></h1>
        <h1 className="font-bold my-1">Description<span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, debitis? Perspiciatis, dolore.</span></h1>
        <h1 className="font-bold my-1">Experience<span className="pl-4 font-normal text-gray-800">2- yrs</span></h1>
        <h1 className="font-bold my-1">Salary<span className="pl-4 font-normal text-gray-800">12LPA</span></h1>
        <h1 className="font-bold my-1">Total Applicants<span className="pl-4 font-normal text-gray-800">4</span></h1>
        <h1 className="font-bold my-1">Posted Data: <span className="pl-4 font-normal text-gray-800">17-07-2024</span></h1>


      </div>
    </div>
  );
};

export default Jobdescription;
