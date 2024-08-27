/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Sjob = ({job}) => {
  const navigate = useNavigate()
  // const jobId = "hqebcweyefiub"
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference =currentTime - createdAt;
    return Math.floor(timeDifference/ (100*24*60*60))
  }
  
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border  border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{daysAgoFunction(job?. ceratedAt) === 0 ? "today" : `${daysAgoFunction(job?. ceratedAt)}days ago` }</p>
        <Button
          variant="outline"
          className="rounded-full border-gray-100"
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className=" p-6" varaint=" outline" size=" icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">INdia</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2"> {job?.title}</h1>
        <p className=" text-sm text-gray-600">
         {job?.description}
        </p>
      </div>
      <div>
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {" "}
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83082] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {" "}
           LPA{job?.salary}
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button onClick ={() => navigate(`/description/${job?._id}`)} varaint ="outline">Details</Button>
        <Button className ="bg-[#a458d7]  text-white rounded-full">Save for later</Button>
      </div>
    </div>
  );
};

export default Sjob;



