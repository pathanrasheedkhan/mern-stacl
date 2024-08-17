/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  
  TableCell,
  
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>list of you applied</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>

            <TableHead>Company</TableHead>

            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
            {
                [1,2,].map((item, index) => (
                    <TableRow key = {index}>
                        <TableCell>17-07-2023</TableCell>
                        <TableCell>Frontend development</TableCell>
                        <TableCell>mini-enguva</TableCell>
                        <TableCell className ="text-right"><Badge>Hired</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
