import { Dishes } from "../models/dishesModel.js";

// Add a new dish
export const addDish = async (req, res) => {
    try {
        const {restaurant_id, name,  rating, price, description, availability,image } = req.body;

        const newDish = new Dishes({
            restaurant_id,
            name,
           image,
            rating,
            price,
            description,
            availability,
        });

        await newDish.save();
        res.status(201).json({ message: "Dish added successfully", dish: newDish });
    } catch (error) {
        res.status(500).json({ error: "Failed to add dish", details: error.message });
    }
};

// Get all dishes
export const getAllDishes = async (req, res) => {
    try {
        const dishes = await Dishes.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch dishes", details: error.message });
    }
};

// Get dishes by restaurant ID
export const getDishesByRestaurant = async (req, res) => {
    try {
        const { restaurant_id } = req.params;

        const dishes = await Dishes.find({ restaurant_id });
        if (dishes.length === 0) return res.status(404).json({ error: "No dishes found for this restaurant" });

        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch dishes", details: error.message });
    }
};

// Update dish details
export const updateDish = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedDish = await Dishes.findOneAndUpdate(
            { dish_id: id },
            { ...updates, updatedAt: new Date() },
            { new: true }
        );

        if (!updatedDish) return res.status(404).json({ error: "Dish not found" });

        res.status(200).json({ message: "Dish updated successfully", dish: updatedDish });
    } catch (error) {
        res.status(500).json({ error: "Failed to update dish", details: error.message });
    }
};

// Delete a dish
export const deleteDish = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedDish = await Dishes.findOneAndDelete({ dish_id: id });
        if (!deletedDish) return res.status(404).json({ error: "Dish not found" });

        res.status(200).json({ message: "Dish deleted successfully", dish: deletedDish });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete dish", details: error.message });
    }
};

//Dish details
// export const getDishDetails = async (req, res) => {
//     try {
//         const { id } = req.params;
//         console.log(id);
//         const dish = await Dishes.findById(id);
        
//         if (!dish) {
//             return res.status(404).json({ message: "Dish not found" });
//         }

//         res.status(200).json(dish);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch dish details", details: error.message });
//     }
// };
