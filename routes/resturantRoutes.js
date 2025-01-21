import e from "express";

const router = e.Router();

// Add a new restaurant
router.post("/add", () => {});

// Update restaurant details
router.put("/update/:id", () => {});

// Deactivate a restaurant
router.put("/deactivate/:id", () => {});

// Get restaurant details by ID
router.get("/:id", () => {});

// Get all restaurants
router.get("/", () => {});

export { router as restaurantRouter };

