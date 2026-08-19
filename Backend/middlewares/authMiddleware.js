import jwt from "jsonwebtoken";
import User from "../models/User.js";

async function protect(req, res, next) {
    let token;
   if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_USER_KEY);
            req.user = await User.findById(decoded.id).select("-password");
            if (!req.user) {
                return res.status(401).json({ msg: "Not authorized" });
            }
            next();
        } catch (error) {
            res.status(401).json({ msg: "Not authorized" });
        }
    }
    
    if (!token) {
        res.status(401).json({ msg: "Not authorized" });
    }
}

async function admin(req, res, next) {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(401).json({ msg: "Not authorized as admin" });
    }
}
export { protect , admin};