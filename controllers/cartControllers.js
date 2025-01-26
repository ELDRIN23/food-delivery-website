import { Cart } from "../models/cartModel.js";

/**
 * Add an item to the cart
 */
export const addItemToCart = async (req, res) => {
    try {
        const { user_id, dish_id, dish_name, quantity, price_per_item } = req.body;

        const total_amount = quantity * price_per_item;

        // Check if the item already exists in the cart
        let cartItem = await Cart.findOne({ user_id, dish_id });
        if (cartItem) {
            // Update existing item's quantity and total amount
            cartItem.quantity += quantity;
            cartItem.total_amount += total_amount;
            await cartItem.save();
            return res.status(200).json(cartItem);
        }

        // Add a new item to the cart
        cartItem = new Cart({ user_id, dish_id, dish_name, quantity, price_per_item, total_amount });
        await cartItem.save();

        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: "Failed to add item to the cart.", details: error.message });
    }
};

/**
 * Get all items in the cart
 */
export const getCartItems = async (req, res) => {
    try {
        const user_id = req.user._id; // Logged-in user ID
        const cartItems = await Cart.find({ user_id });
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve cart items.", details: error.message });
    }
};

/**
 * Update an item in the cart
 */
export const updateCartItem = async (req, res) => {
    try {
        const { itemId } = req.params;
        const { quantity, price_per_item } = req.body;

        const total_amount = quantity * price_per_item;

        const updatedItem = await Cart.findByIdAndUpdate(
            itemId,
            { quantity, total_amount, updatedAt: new Date() },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ error: "Cart item not found." });
        }

        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: "Failed to update cart item.", details: error.message });
    }
};

/**
 * Remove an item from the cart
 */
export const removeCartItem = async (req, res) => {
    try {
        const { itemId } = req.params;

        const deletedItem = await Cart.findByIdAndDelete(itemId);
        if (!deletedItem) {
            return res.status(404).json({ error: "Cart item not found." });
        }

        res.status(200).json({ message: "Item removed from cart.", deletedItem });
    } catch (error) {
        res.status(500).json({ error: "Failed to remove cart item.", details: error.message });
    }
};

/**
 * Clear all items in the cart
 */
export const clearCart = async (req, res) => {
    try {
        const user_id = req.user._id; // Logged-in user ID

        await Cart.deleteMany({ user_id });
        res.status(200).json({ message: "Cart cleared." });
    } catch (error) {
        res.status(500).json({ error: "Failed to clear cart.", details: error.message });
    }
};
