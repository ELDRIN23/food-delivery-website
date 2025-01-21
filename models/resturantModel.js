import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
    resturant_id: { type: String, required: true },
    name: { type: String, required: true },
    images: { type: [String] },
    adders: { type: String, required: true },
    phone_no: { type: String, required: true },
    rating: { type: Number, default: 0 },
    menu: { type: String },
    operating_hours: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null },
});

export const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
