import jwt from "jsonwebtoken";

export const generateToken = (id) => {
    try {
        
       return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "30d" });
    } catch (error) {
        console.log(error)
    }
};
