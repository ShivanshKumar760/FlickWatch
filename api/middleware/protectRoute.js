import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();
const protectRoute=(req,res,next)=>{
    const token = req.cookies["jwt-netflix"];

	if (!token) {
		return res.status(401).json({ success: false, message: "Unauthorized - No Token Provided" });
	};

	const decoded = jwt.verify(token, process.env.JWT_SECRET);

	if (!decoded) {
		return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
	};
    User.findById(decoded.userId).select("-password")
    .then((userFetched)=>{
        const user=userFetched;
        if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		req.user = user;

		next();
    }).catch((err)=>{
        console.log(err);
        console.log("Error in protectRoute middleware: ", err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });

    });

};

export default protectRoute;