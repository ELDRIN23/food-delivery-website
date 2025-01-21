import e from "express";

const router = e.Router();

// Add a new admin
router.post("/add", () => {});

// Update admin details
router.put("/update/:id", () => {});

// Deactivate an admin
router.put("/deactivate/:id", () => {});

// Get admin details by ID
router.get("/:id", () => {});

// Get all admins
router.get("/", () => {});

export { router as adminRouter };
