import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    id: { type: String, required: true },
    user_id: { type: String, required: true },
    restaurant_id: { type: String, required: true },
    username: { type: String },
    photo: { type: String },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Boolean, default: false },
});

export const Review = mongoose.model("Review", ReviewSchema);
