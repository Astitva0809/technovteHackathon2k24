import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {User} from '../models/user.model.js';
import emailValidator from 'email-validator';

const registerUser = asyncHandler(async (req,res)=>{
 
    const {email, userName, password} = req.body;

    if( !email || !userName || !password ){
        return res
        .status(400)
        .json(
            new ApiError(400,"All fields are required!!")
        )
    }

    if (!emailValidator.validate(email)) {
        return res
        .status(400)
        .json(
            new ApiError(400,"Please enter a valid email address" )
        )
    }

    if(password.length<8){
        return res
        .status(400)
        .json(
            new ApiError(400, "Password must be greater than 8 character")
        )
    }

    const existedUser = await User.findOne({
        $or: [{email}, {userName}]
    })

    if(existedUser){
        return res
        .status(400)
        .json(
            new ApiError(400, "User with email or username already exists")
        )
    }

    const user = await User.create({
        email,
        password,
        userName,
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        return res
        .status(500)
        .json(
            new ApiError(500,"Something went wrong while resitering the User")
        )
    }
    
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Created Successfully!!")
    );
})

export {registerUser};