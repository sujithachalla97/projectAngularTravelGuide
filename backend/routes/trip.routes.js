import express from "express";
import { 
    createTrip, 
    getAllTrips, 
    getTripById, 
    updateTrip, 
    deleteTrip 
} from "../controllers/trip.controller.js";

const router = express.Router();

router.post("/trips", createTrip);
router.get("/gettrips", getAllTrips);
router.get("/trips/:id", getTripById);
router.put("/trips/:id", updateTrip);
router.delete("/trips/:id", deleteTrip);

export default router;
