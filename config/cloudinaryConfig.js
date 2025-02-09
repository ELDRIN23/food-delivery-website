import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
dotenv.config();
// console.log("hitted")
    // Configuration
  cloudinary.config({ 
    
    cloud_name: process.env.CLOUD_NAME, 
    api_key:process.env.CLOUD_API_KEY , 
    api_secret: process.env.CLOUD_API_SECRET // Click 'View API Keys' above to copy your API secret
});

// console.log(process.env.CLOUD_NAME);
// console.log(process.env.CLOUD_API_KEY)
// console.log( process.env.CLOUD_API_SECRET)

export const cloudinaryInstance = cloudinary;