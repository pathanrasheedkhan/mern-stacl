import {  Job } from "../models/job.model.js";

export const postjob = async (req, res) => {
    try {
        const{title, description, requirments, salary, location, jobType,  position, companyId} = req.body;
        const userId = req.id;
        
         if(!title || !description || !requirments || !salary || !location || !jobType  ||!position || !companyId){
             return res.status(400).json({
                 message: 'All fields are required',
                 success: false,
             });
         };
         const job = await Job.create ({
             title,
             description,
             requirements: requirments.split(','),
             salary: Number(salary),
             location,
             jobType,
             position,
             company:companyId,
             createdBy:req.id
         });
         return res.status(201).json({
            message: 'Job created',
            job,
            success: true,

         })
    } catch (error) {
        console.log(error)
    }
}

export const getAllJobs = async (req, res, ) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title: {$regex: keyword, $options: 'i'}},
                {description: {$regex: keyword, $options: 'i'}},
                // {requirements: {$regex: keyword, $options: 'i'}},
                // {location: {$regex: keyword, $options: 'i'}},
                // {position: {$regex: keyword, $options: 'i'}},
                // {company: {$regex: keyword, $options: 'i'}},
            ]
        }
        const jobs = await Job.find(query).populate({
            path: 'company',
            
        }).sort({createdAt: -1});
        if(!jobs){
            return res.status(404).json({
                message: 'No jobs found',
                success: false,
            });
        }
        return res.status (200).json({
            jobs,
            success: true,
        })
    } catch (error) {
        console.log(error)
    }
}


export const getJobById = async (req, res) =>  {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job){
         return res.status(404).json({
             message: 'Job not found',
             success: false,
         });
        };

        return res.status(200).json({
            job,
            success: true,
        })
    } catch (error) {
        console.log(error)
    }
}


export const getAdminJobs = async (req, res)  => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({createdBy: adminId});
        if(!jobs){
            return res.status(404).json({
                message: 'No jobs found',
                success: false,
            });
        }
        return res.status(200).json({
            jobs,
            success: true,
        })
    } catch (error) {
        console.log(error);
    }
}