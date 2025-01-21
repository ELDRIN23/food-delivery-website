import e from "express";

const router = e.Router();

// Add an item to the cart
router.post("/add", () => {});

// Update item quantity in the cart
router.put("/update/:id", () => {});

// Remove an item from the cart
router.delete("/remove/:id", () => {});

// Get all items in the user's cart
router.get("/user/:user_id", () => {});

export { router as cartRouter };
