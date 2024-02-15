import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResonse.js";
import { ApiError } from "../utils/ApiError.js";
import {uploadFileOnCloudinary} from '../utils/cloudinary.js';
import { Property } from "../models/property.model.js";

const createProperty = asyncHandler(async(req,res)=>{
    
    const {name, description, price, stock, category, address, status} = req.body;
    const {user} = req;

    const propertyImgLocalPath = req.files?.productImage[0]?.path;
    
    const propertyImage = await uploadFileOnCloudinary(propertyImgLocalPath);

    if(!propertyImage){
        throw new ApiError(400, "Avatar file is required!!");
    }

    const property = await Property.create({
        title, 
        description,
        productImage: productImage.url,
        price,
        category,
        address,
        status,
        owner: user._id
    })
    res.status(200).json(new ApiResponse(201, property, "product is added!!"))
})

const getProperties = asyncHandler(async(req,res)=>{
    const products = await Property.find();

    if(!products){
        throw new ApiError(404, 'Properties not found!!')
    }

    req.status(200).json(new ApiResponse(200, products, 'Properties found')) 
})

const getPropertyById = asyncHandler(async(req,res)=>{

    const product = await Property.findById(req.params.id);

    if(!product){
        throw new ApiError(404, 'Property not found!!')
    }

    req.status(200).json(new ApiResponse(200, product, 'Property found')) 
})

const updatePropertyById = asyncHandler(async(req,res)=>{
    const { id } = req.params;
    const property = await Property.findByIdAndUpdate(id, req.body, { new: true });
    if (!property) {
        throw new ApiError(404, 'Property not found');
    }
    res.status(200).json(new ApiResponse( 200, product, "Property updated successfully!!"));
})

const deletePropertyById = asyncHandler(async(req,res)=>{
    const { id } = req.params;
    const property = await Property.findByIdAndDelete(id);
    if (!property) {
        throw new ApiError(404, 'Property not found');
    }
    res.status(200).json(new ApiResponse(200, product, 'Property deleted successfully!!'));
})


export {createProperty, getPropertyById, getProperties, updatePropertyById, deletePropertyById};