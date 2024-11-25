import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToMongoDB from "./db/db.connect.js";
import authRoutes from "./routes/auth.routes.js";
import hotelRoutes from "./routes/hotel.routes.js";
import logService from "./middlewares/logService.js";
import cors from "cors";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:4200', // Replace with your frontend's URL
    credentials: true,              // Allow cookies to be sent
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }));
app.use('/api/auth', logService,  authRoutes);
app.use('/api/hotels', logService, hotelRoutes)

app.listen(3000, ()=>{
    connectToMongoDB();
    console.log("Listening on port 3000");
});