import mongoose from 'mongoose';

const OrderedDishesSchema = new mongoose.Schema({
    ordered_id: { type: String, required: true },
    user_id: { type: String, required: true },
    dish_id: { type: String, required: true },
    resturant_id: { type: String, required: true },
    image: { type: String },
    dish_name: { type: String, required: true },
    availability: { type: Boolean, default: true },
    adders: { type: String },
    total_amount: { type: Number, required: true },
    status: { type: Boolean, default: false },
    phone_no: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null },
});

export const OrderedDishes = mongoose.model('OrderedDishes', OrderedDishesSchema);
