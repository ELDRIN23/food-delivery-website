import express from "express";
import {
    addRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
} from "../controllers/resturantControllers.js";

const router = express.Router();

// Add a new restaurant
router.post('/add', addRestaurant);

// Get all restaurants
router.get('/', getAllRestaurants);

// Get a single restaurant by ID
router.get('/:id', getRestaurantById);

// Update a restaurant
router.put('/:id', updateRestaurant);

// Delete a restaurant
router.delete('/:id', deleteRestaurant);

export {router as restaurantRouter};

