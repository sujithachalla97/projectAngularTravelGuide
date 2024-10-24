import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToMongoDB from "./db/db.connect.js";
import authRoutes from "./routes/auth.routes.js";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.listen(3000, ()=>{
    connectToMongoDB();
    console.log("Listening on port 3000");
});