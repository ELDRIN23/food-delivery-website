import jwt from "jsonwebtoken";


const restaurantOwnerAuthMiddleware = (req, res, next) => {
    try {
        // Extract token from cookies
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ 
                message: "Authentication failed. No token provided.", 
                success: false 
            });
        }

        // Verify the token using the secret key
        const tokenVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Check if the token contains a role and if the role is "restaurantOwner"
        // if (tokenVerified.role !== "restaurantOwner") {
        //     return res.status(403).json({ 
        //         message: "Access denied. Insufficient permissions.", 
        //         success: false 
        //     });
       // }

        // Attach user details to the request object
        req.user = tokenVerified;

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ 
            message: error.message || "Authentication failed", 
            success: false 
        });
    }
};

export {restaurantOwnerAuthMiddleware as restaurantownerAuth };
