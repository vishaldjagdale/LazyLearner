import jwt from "jsonwebtoken";

const isAuthenticated = async(req, res, next) => { // Add next as the third parameter
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false
            });
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }

        req.id = decode.userId;
        next(); // Pass control to the next middleware or route handler
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Authentication failed",
            success: false
        });
    }
};

export default isAuthenticated;