import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";

// ----configure----cloudinary----
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRATE,
});
const uploadImage = async () => {
  const images = [
   "./images/image1.avif",
   "./images/image2.avif",
   "./images/image3.avif",
   "./images/image5.avif",
    
  ];
  

  
  
  try {
    for(const image of images){
      const result =await cloudinary.uploader.upload(image);
      console.log(result)
    }
  } catch (err) {
    console.error(err);
  }
};


uploadImage();

