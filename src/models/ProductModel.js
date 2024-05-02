import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    username: { type: String },
    avatar: { type: String },
    isCertificated: { type: Boolean, default: false },
    saved: { type: Boolean, default: false },
    type: { type: String, required: true },
    likedCount: { type: Number },
    price: { type: Number },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
export default Product;
