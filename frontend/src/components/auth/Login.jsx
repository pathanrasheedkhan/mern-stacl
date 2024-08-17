/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/content";
import { setLoading, setUser } from "@/redux/authslice";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/srore";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const { Loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, role: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");

        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="rk@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="pssword"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="password"
            />
          </div>
          <RadioGroup className="flex items-center gap-4 my-5">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="r1">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "Recruiter"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
          {Loading ? (
            <Button>
              {" "}
              <Loader2 className="mr-2 h-4 animate-spin" />
              please wait{" "}
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Login
            </Button>
          )}
          ;
          <span className="text-sm">
            Dont have an account ??{" "}
            <Link to="/signup" className="text-blue-600">
              signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
