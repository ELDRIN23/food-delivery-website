import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    cart_id: { type: String, required: true },
    user_id: { type: String, required: true },
    dish_id: { type: String, required: true },
    dish_name: { type: String, required: true },
    quantity: { type: Number, required: true },
    total_amount: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Boolean, default: false },
});

export const Cart = mongoose.model("Cart", CartSchema);
