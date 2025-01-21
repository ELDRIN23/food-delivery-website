import e from "express";

const router = e.Router();

// Add a new review
router.post("/add", () => {});

// Update review details
router.put("/update/:id", () => {});

// Delete a review
router.delete("/delete/:id", () => {});

// Get review details by ID
router.get("/:id", () => {});

// Get all reviews for a restaurant
router.get("/restaurant/:restaurant_id", () => {});

export { router as reviewRouter };
