import express from "express"
import { createHotel, deleteHotel, getAllHotels, updateHotel, getHotelById } from "../controllers/hotel.controller"

const router = express.Router()

router.post("/hotels", createHotel);
router.get("/hotels", getAllHotels);
router.get("/hotels/:id", getHotelById);
router.put("/hotels/:id", updateHotel);
router.delete("/hotels/:id", deleteHotel);

export default hotel_routes;