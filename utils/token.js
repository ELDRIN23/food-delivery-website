import jwt from "jsonwebtoken";

const Token = (id, role) => {
    try {
        var token = jwt.sign({ id: id, role: role || "user" }, process.env.JWT_SECRET_KEY);
        return token;
    } catch (err) {
        console.log(err);
    }
};

export {Token as generateToken};