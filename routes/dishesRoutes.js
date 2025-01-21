import e from "express";

const router = e.Router();

// Add a new dish
router.post("/add", () => {});

// Update dish details
router.put("/update/:id", () => {});

// Deactivate a dish
router.put("/deactivate/:id", () => {});

// Get dish details by ID
router.get("/:id", () => {});

// Get all dishes for a restaurant
router.get("/restaurant/:restaurant_id", () => {});

export { router as dishesRouter };
