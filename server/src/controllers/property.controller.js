import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import {uploadFileOnCloudinary} from '../utils/cloudinary.js';
import { Property } from "../models/property.model.js";

const createProperty = asyncHandler(async(req,res)=>{
    
    const { title, description, location, price, bedrooms, bathrooms, area, amenities, contact, owner } = req.body;

    const {user} = req;

    if (!title || !description || !location || !amenities || !price || !bedrooms || !bathrooms || !area || !contact || !owner) {
        return res.status(400).json(new ApiError(400, "All fields are required!!"));
    }
    
    const VRImgLocalPath = req.files?.VRmage[0]?.path;
    const imagesLocalPath = req.files?.images[0]?.path;
    
    const VRImage = await uploadFileOnCloudinary(VRImgLocalPath);
    const images = await uploadFileOnCloudinary(imagesLocalPath);

    if(!VRImage){
        return res
        .status(400)
        .json(
            new ApiError(400, "VRImage file is required!!")
        );
    }

    const property = await Property.create({
        title, 
        description,
        VRImage: VRImage.url,
        price,
        location,
        area,
        bedrooms,
        images: images.url,
        bathrooms,
        amenities,
        contact,
        owner: user._id
    })
    return res
    .status(200)
    .json(
        new ApiResponse(201, property, "property is added!!")
    )
})

const getProperties = asyncHandler(async(req,res)=>{
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


export {createProperty, getPropertyById, getProperties, updatePropertyById, deletePropertyById};