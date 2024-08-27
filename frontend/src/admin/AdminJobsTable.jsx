/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => { 
    const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);

    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    const navigate = useNavigate();

    useEffect(()=>{ 
        console.log('called');
        const filteredJobs = allAdminJobs.filter((job)=>{
            if(!searchJobByText){
                return true;
            }
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

        });
        setFilterJobs(filteredJobs);
    },[allAdminJobs,searchJobByText])
  return (
      <div>
          <Table>
              <TableCaption>A list of your recent  posted jobs</TableCaption>
              <TableHeader>
                  <TableRow>
                      <TableHead>Company Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                  {
                      filterJobs?.map((job) => (
                        <tr>
                        <TableCell>{job?.company?.name}</TableCell>
                        <TableCell>{job?.title}</TableCell>
                        <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                        <TableCell className="text-right cursor-pointer">
                            <Popover>
                                <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                <PopoverContent className="w-32">
                                    <div onClick={()=> navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                        <Edit2 className='w-4' />
                                        <span>Edit</span>
                                    </div>
                                    <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
                                        <Eye className='w-4'/>
                                        <span>Applicants</span>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </tr>

                      ))
                  }
              </TableBody>
          </Table>
      </div>
  )
}

export default AdminJobsTable

// const AdminJobsTable = () => {
//   const navigate = useNavigate();
//   const { companies, searchCompanyBText } = useSelector(
//     (store) => store.company
//   );
//   const { allAdminJobs } = useSelector((store) => store.job);
//   const [filterJobs, setFilterJObs] = useState(allAdminJobs);
//   useEffect(() => {
//     const filteredCompany =
//       allAdminJobs.length > 0 &&
//       allAdminJobs.filter((job) => {
//         if (!searchCompanyBText) {
//           return true;
//         }
//         return company?.name
//           ?.toLowerCase()
//           .includes(searchCompanyBText.toLowerCase());
//       });
//     setFilterJObs(filteredCompany);
//   }, [allAdminJobs, companies, searchCompanyBText]);
//   return (
//     <div>
//       <Table>
//         <TableCaption>Alist of recent</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Company Name</TableHead>
//             <TableHead>Role</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {
//            filterJobs && filterJobs.map((job) => {
//               <tr>
//                 <TableCell>{job?.company?.name}</TableCell>
//                 <TableCell>12-08-2024</TableCell>
//                 <TableCell className="text-right cursor-pointer">
//                   <Popover>
//                     <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
//                     <PopoverContent>
//                       <div onClick={() => navigate (`/admin/companies/${job._id}`)} className="flex items-center">
//                         <Edit2 className="w-4"/>
//                         <span>Edit</span>
//                       </div>
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>


//               </tr>
//             })



//           }
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AdminJobsTable;
