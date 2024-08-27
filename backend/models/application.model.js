import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    },
    applicant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        requied:true
    },
    status:{
        type:String,
        enum: ['Pending', 'accepted',  'rejected'],
        default: 'Pending',
        

    },
},{timestamp:true,});

export const Application = mongoose.model("Application", applicationSchema);