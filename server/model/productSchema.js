import { mongoose } from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  image: {
    type: String,
  },
  productName: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },

  avilablity: {
    type: Boolean,
  },

  similarImages: {
    type: [String],
  },
});

export const products = mongoose.model("buyBags", productSchema);
