import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import movieRouter from "./routes/movie.route.js";
import tvRouter from "./routes/tv.route.js";
import searchRouter from "./routes/search.route.js";
import protectRoute from "./middleware/protectRoute.js";
dotenv.config();

const app=express();
const port=process.env.PORT||4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movie", protectRoute, movieRouter);
app.use("/api/v1/tv", protectRoute, tvRouter);
app.use("/api/v1/search", protectRoute, searchRouter);

app.get("/",(req,res)=>{
    res.json({msg:"Server is up and running route are working"});
});


mongoose.connect(process.env.MONGO_URL_LOCAL)
.then(()=>{
    console.log("Connected to the database!");
}).then(()=>{
    app.listen(port,()=>{
        console.log(`The server is running at http:localhost:${port}`);
    });
}).catch((err)=>console.log(err));
