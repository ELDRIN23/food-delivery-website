import Restaurant from "../models/resturantModel.js";

// Add a new restaurant
export const addRestaurant = async (req, res) => {
    try {
        const { resturant_id, name, images, adders, phone_no, rating, menu, operating_hours } = req.body;

        const newRestaurant = new Restaurant({
            resturant_id,
            name,
            images,
            adders,
            phone_no,
            rating,
            menu,
            operating_hours,
        });

        await newRestaurant.save();
        res.status(201).json({ message: "Restaurant added successfully", restaurant: newRestaurant });
    } catch (error) {
        res.status(500).json({ error: "Failed to add restaurant", details: error.message });
    }
};

// Get all restaurants
export const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch restaurants", details: error.message });
    }
};

// Get a single restaurant by ID
export const getRestaurantById = async (req, res) => {
    try {
        const { id } = req.params;

        const restaurant = await Restaurant.findOne({ resturant_id: id });
        if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });

        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch restaurant", details: error.message });
    }
};

// Update restaurant details
export const updateRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedRestaurant = await Restaurant.findOneAndUpdate(
            { resturant_id: id },
            { ...updates, updatedAt: new Date() },
            { new: true }
        );

        if (!updatedRestaurant) return res.status(404).json({ error: "Restaurant not found" });

        res.status(200).json({ message: "Restaurant updated successfully", restaurant: updatedRestaurant });
    } catch (error) {
        res.status(500).json({ error: "Failed to update restaurant", details: error.message });
    }
};

// Delete a restaurant
export const deleteRestaurant = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedRestaurant = await Restaurant.findOneAndDelete({ resturant_id: id });
        if (!deletedRestaurant) return res.status(404).json({ error: "Restaurant not found" });

        res.status(200).json({ message: "Restaurant deleted successfully", restaurant: deletedRestaurant });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete restaurant", details: error.message });
    }
};
