import {User} from '../models/user.model.js';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import getDataUri from '../utils/datauri.js';
import cloudnary from '../utils/cloudnary.js';

export const register = async (req, res) => {
    try {
        console.log(req.body);
        const {fullname, email, password, phonenumber, role} = req.body;
        if(!fullname || !email || !phonenumber || !role || !password){
            return res.status(400).json({
                message: 'All fields are required',
                success: false,
            });
        }
           const file= req.file;
           const fileUri = getDataUri(file);
           
           const cloudResponse = await cloudnary.uploader.upload(fileUri.content)
            console.log(cloudResponse.url);
            const foundUser = await User.findOne({email:email});
            if(foundUser){
                return res.status(400).json({
                    message: 'Email already exists',
                    success: false,
                    
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({
                fullname,
                email,
                password: hashedPassword,
                phonenumber,
                role,
                profile:{
                    profilePhoto:cloudResponse.secure_url,
                }
            })
            return res.status(201).json({
                message: 'User registered successfully',
                success: true,
                
            })
        
        
    } catch (error) {
        console.log(error)
        
    }  
}

export const login = async (req, res) => {

    try {
        const {email, password, role} = req.body;
        if( !email ||  !role || !password){
            return res.status(400).json({
                message: 'All fields are required',
                success: false,
            });
        };
        let user = await User.findOne({email:email}); 
        console.log(user , email);

        if(!user){
            return res.status(400).json({
                message: 'Invalid credentials',
                success: false,
                
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message: 'Incorrect password or email',
                success: false,
                
            });
        }; 
        if(role !== user.role){
            return res.status(400).json({
                message: 'Invalid role',
                success: false,
            })
        }  
        
        const tokenData = {
            userId: user._id,
            
        }
        const token = await jwt.sign(tokenData, process.env. SECRET_KEY, {expiresIn: '1d'});

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phonenumber: user.phonenumber,
            role: user.role,
            profile: user.profile

        }

        return res.status(200).cookie('token', token,{maxAge: 1*24*60*60*1000, httpsOnly: true, sameSite: 'strict'}).json({
            message: `Logged in successfully ${user.fullname}`,
            user,
            success: true,
            

            
        })


    } catch (error) {
        console.log(error)
        
    }

}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie('token', '', {maxAge:0}).json({
            message: 'Logged out successfully',
            success: true,
            
        })
        
    } catch (error) {
        console.log(error)
        
    }
}

export const updateProfile = async (req, res) => {
    try {
        const {fullname, email, phonenumber, bio, skills} = req.body;
        const file = req.file;

        const fileUri = getDataUri(file);
        const cloudResponse = await cloudnary.uploader.upload(fileUri.content);


       let skillsArray;
       if(skills){
             skillsArray = skills.split(",");

       }
        const userId = req.id;
        let user = await User.findById(userId);

        if(!user){
            return res.status(400).json({
                message: 'User not found',
                success: false,
            })
        }

        if(fullname ) user.fullname = fullname;
        if(email ) user.email = email;
        if(phonenumber ) user.phonenumber = phonenumber;
        if(bio ) user.bio = bio;    
        if(skills) user.profile.skills = skillsArray   


        if(cloudResponse){
            user.profile.resume = cloudResponse.secure_url;     //sve cldurl
            user.profile.resumeOriginalName = file.originalname   //sve public id
        }


       

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phonenumber: user.phonenumber,
            role: user.role,
            profile: user.profile

        }

        return res.status(200).json({
            message: 'Profile updated successfully',
            user,
            success: true,
            
        })



        
    } catch (error) {
        console.log(error)
        
    }
}