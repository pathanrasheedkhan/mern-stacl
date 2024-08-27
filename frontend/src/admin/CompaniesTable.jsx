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
import { Edit2, MoreHorizontal } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
    const navigate = useNavigate();
  const  {companies , searchCompanyBText}  = useSelector(store => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);
  useEffect(() => {
    const filteredCompany = companies.length > 0 && companies.filter ((company) => {
        if(!searchCompanyBText){
            return true;
        }
        return company?.name?.toLowerCase().includes(searchCompanyBText.toLowerCase());
    })
    setFilterCompany (filteredCompany)

  },[companies, searchCompanyBText])
  return (
    <div>
      <Table>
        <TableCaption>Alist of recent</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>

            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(companies == undefined ) ? <span>Please Register your Company</span>: (
            <>
              {companies?.map((company) => (
                <tr>
                    <TableCell>
                      <Avatar>
                        <AvatarImage src={company.logo} />
                      </Avatar>
                    </TableCell>
                    <TableCell>{company.name}</TableCell>
                    {/* <TableCell>{company.createdAt}</TableCell> */}
                    <TableCell>25-08-2024</TableCell>

                    <TableCell className=" text-right cursor-pointer">
                      <Popover>
                        <PopoverTrigger>
                          {" "}
                          <MoreHorizontal />
                        </PopoverTrigger>
                        <PopoverContent>
                          <div onClick={() => navigate(`/admin/companies/${company._id}`) } className="flex items-center justify-between my-5">
                            <Edit2 />
                            <span>Edit</span>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                </tr>
               
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
