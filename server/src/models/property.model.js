import { Schema, model } from "mongoose";

const propertySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: { 
        type:String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    VRImage: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['rent', 'sale'], 
        default: 'rent', 
    },
    area: {
        type: Number, 
        required: true, 
        unique: true, 
        trim: true, 
    },
    amenities: {
        type: String,
        required: true
    },
    contact: {
        type: Number, 
        required: true, 
        unique: true, 
        trim: true,  
    },
    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
  });

export const Property = model('Property', propertySchema);