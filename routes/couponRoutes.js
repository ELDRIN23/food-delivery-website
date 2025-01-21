import e from "express";

const router = e.Router();

// Create a new coupon
router.post("/create", () => {});

// Update coupon details
router.put("/update/:id", () => {});

// Deactivate a coupon
router.put("/deactivate/:id", () => {});

// Get coupon details by ID
router.get("/:id", () => {});

// Get all active coupons
router.get("/", () => {});

export { router as couponRouter };
