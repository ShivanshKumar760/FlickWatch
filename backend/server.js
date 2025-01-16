import express from "express";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import cors from "cors";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";
// import mongoose from "mongoose";

dotenv.config();
const app = express();
const port=process.env.PORT||4000;

app.use(express.json()); // will allow us to parse req.body
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());


app.use("/api/v1/movie",movieRoutes);
app.use("/api/v1/tv", tvRoutes);
app.use("/api/v1/search",searchRoutes);

app.get("/",(req,res)=>{
	res.json({msg:"Server is up and running route are working"});
});


// mongoose.connect(process.env.MONGO_URL_LOCAL)
// .then(()=>{
// 	console.log("Connected to the database!");
// }).then(()=>{
// 	app.listen(port,()=>{
// 		console.log(`The server is running at http:localhost:${port}`);
// 	});
// }).catch((err)=>console.log(err));

app.listen(port,()=>{
	console.log(`The server is running at http:localhost:${port}`);
});