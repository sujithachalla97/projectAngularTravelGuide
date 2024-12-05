import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToMongoDB from "./db/db.connect.js";
import authRoutes from "./routes/auth.routes.js";
import hotelRoutes from "./routes/hotel.routes.js";
import logService from "./middlewares/logService.js";
import TripService from "./routes/trip.routes.js";
import cors from "cors";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use('/api/auth', logService,  authRoutes);
app.use('/api/hotels', logService, hotelRoutes);
app.use('/api/trips', logService, TripService)

app.listen(3000, ()=>{
    connectToMongoDB();
    console.log("Listening on port 3000");
});