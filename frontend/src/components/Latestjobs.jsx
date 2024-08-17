/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Latestjobscards from "./Latestjobscards";
import { Item } from "@radix-ui/react-radio-group";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const Latestjobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 ml-14">
      <h1 className="text-4xl font-bold ">
        {" "}
        <span className="text-[#6A38C2]">Latest&Job</span>JOb Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJobs.slice(0,6).map((item, index) => (
          <Latestjobscards />
        ))}
      </div>
    </div>
  );
};

export default Latestjobs;

// max-w-7xl mx-auto my-20
