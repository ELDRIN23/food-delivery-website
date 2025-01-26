import express from "express";
import {
    addDish,
    getAllDishes,
    getDishesByRestaurant,
    updateDish,
    deleteDish,
} from "../controllers/dishesControllers.js";

const router = express.Router();

// Add a new dish
router.post('/add', addDish);

// Get all dishes
router.get('/', getAllDishes);

// Get dishes by restaurant ID
router.get('/:restaurant_id', getDishesByRestaurant);

// Update a dish
router.put('/:id', updateDish);

// Delete a dish
router.delete('/:id', deleteDish);

export {router as dishesRouter};
