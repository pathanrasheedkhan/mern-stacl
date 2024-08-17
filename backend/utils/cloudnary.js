import {v2 as cloudnary} from "cloudinary"; 
import dotenv from "dotenv";
dotenv.config();


cloudnary.config({
    cloud_name: process.env.CLOUD_KEY  ,                                     
    api_key:  process.env.API_KEY ,                                      
  
    api_secret:  process.env. API_SECRET                                     
    
});


export default cloudnary;


