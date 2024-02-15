import { Schema, model } from "mongoose";

const propertySchema = new Schema({
    title: String,
    description: String,
    location: { 
        type: { 
            type: String 
        }, 
        coordinates: [Number] 
    },
    images: [String],
    price: Number,
    bedrooms: Number,
    bathrooms: Number,
    VRImage: {
        type: String
    },
    area: {
        type: Number, 
        required: true, 
        unique: true, 
        trim: true, 
    },
    amenities: [String],
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
  
  propertySchema.index({ location: '2dsphere' });
  
export const Property = model('Property', propertySchema);