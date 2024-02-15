
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import {uploadFileOnCloudinary} from '../utils/cloudinary.js';
import { Property } from "../models/property.model.js";

const addProperty = asyncHandler(async(req,res)=>{
    
    const { title, description, location, price, area, amenities, contact, size, type} = req.body;

    const user = req.user;

    if (!title || !description || !size || !location || !amenities || !price || !area || !contact || !type ) {
        return res.status(400).json(new ApiError(400, "All fields are required!!"));
    }
    
    const VRImgLocalPath = req.files?.VRImage[0]?.path;
    
    if(!VRImgLocalPath){
        return res
        .status(400)
        .json(
            new ApiError(400, "VRImage file is required!!")
        );
    }

    const VRImage = await uploadFileOnCloudinary(VRImgLocalPath);

    if(!VRImage){
        return res
        .status(500)
        .json(
            new ApiError(500, "Something went wrong while uploading VRImage")
        );
    }

    const property = await Property.create({
        title, 
        description,
        location,
        price,
        size,
        VRImage: VRImage.url,
        type,
        area,
        amenities,
        contact,
        owner: user._id
    })

    if(!property){
        return res
        .status(500)
        .json(
            new ApiError(500,"Something went wrong while creating the property")
        )
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201, property, "property is added!!")
    )
})

const getAllProperty = asyncHandler(async(req,res)=>{
    const properties = await Property.find();

    if(!properties){
        return res
        .status(404)
        .json(
            new ApiError(404, 'Properties not found!!')
        )
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, properties, 'Properties found')
    ) 
})

const getPropertyById = asyncHandler(async(req,res)=>{

    const property = await Property.findById(req.params.id);

    if(!property){
        return res
        .status(404).json(
            new ApiError(404, 'Property not found!!')
        );
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, property, 'Property found')
    ) 
})

const updatePropertyById = asyncHandler(async(req,res)=>{
    const { id } = req.params;
    const property = await Property.findByIdAndUpdate(id, req.body, { new: true });
    if (!property) {
        return res
        .status(404)
        .json(
            new ApiError(404, 'Property not found')
        )
    }
    return res
    .status(200)
    .json(
        new ApiResponse( 200, property, "Property updated successfully!!")
    );
})

const deletePropertyById = asyncHandler(async(req,res)=>{
    const { id } = req.params;
    const property = await Property.findByIdAndDelete(id);
    if (!property) {
        return res
        .status(404)
        .json(
            new ApiError(404, 'Property not found')
        )
    }
    return res
    .status(200)
    .json(
        new ApiResponse(200, property, 'Property deleted successfully!!')
    );
})


export {addProperty, getPropertyById, getAllProperty, updatePropertyById, deletePropertyById};