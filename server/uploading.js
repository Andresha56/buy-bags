import dotenv from 'dotenv';
dotenv.config();

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRATE
});

console.log(process.env.CLOUD_NAME);
console.log(process.env.CLOUDINARY_API_KEY);
console.log(process.env.CLOUDINARY_API_SECRATE);

const image = './images/carousel12.jpg';
cloudinary.uploader.upload(image)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
