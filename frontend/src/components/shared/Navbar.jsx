/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOut, User2 } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {user} = useSelector(store => store.auth)

  return (
    <div className="bg-white">
      <div className=" flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className=" flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5 cursor-pointer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browser">Browser</Link></li>

           
          </ul>
          {
            !user  ?(
              <div className="flex items-center gap-2">
                <Link to="/login"><Button variant="outline" className=" rounded-tl-2xl rounded-br-2xl" >Login</Button></Link>
                <Link to="signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6] rounded-tr-2xl rounded-bl-2xl"> Sign-UP</Button></Link>
             

              </div>

            ) :(
              <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className=" ">
                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src= {user?.profile?.profilePhoto} />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Rk full stack</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2/>
                      <Button variant="Link"><Link to="/profile">View Profile</Link></Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut/>
                      <Button variant="Link">  LogOut </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
