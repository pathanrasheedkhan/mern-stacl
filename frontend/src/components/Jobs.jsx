/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Sjob from "./Sjob";
import { SpaceIcon } from "lucide-react";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = ({Jobs}) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-26%">
          <FilterCard />
          </div>
          {
            jobsArray.length <= 0? <span>Job not found</span> : (
              <div className="flex-1 h-[88vh] overflow-y-auto pb-5"> 
                 <div  className="grid grid-cols-3 gap-4">
                  {
                    jobsArray.map((item, index) => (
                      <div>
                        <Sjob/>
                      </div>
                    ))
   
                  }

                 </div>

              </div>

            )
          } 
        </div>
      </div>
    </div>
  );
};

export default Jobs;
