// eslint-disable-next-line no-unused-vars
import { setAllAppliedJobs } from "@/redux/jobSlice";
import { GETAPPLICANTS_API_END_POINT } from "@/utils/content";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = ()  => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios .get(`${GETAPPLICANTS_API_END_POINT}/get `, {withCredentials: true});
                
                  console.log(res.data);
                if(res.data.success){
                    dispatch (setAllAppliedJobs(res.data.application))
                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchAppliedJobs();

    }, [])
};
export default useGetAppliedJobs;