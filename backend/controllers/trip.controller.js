import Trip from "../models/trip.model.js";

export const createTrip = async (req, res) => {
    try {
        const Trip = new Trip(req.body);
        const savedTrip = await Trip.save();
        res.status(201).json(savedTrip);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllTrips = async (req, res) => {
    try {
        const Trips = await Trip.find();
        res.status(200).json(Trips);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTripById = async (req, res) => {
    try {
        const Trip = await Trip.findById(req.params.id);
        if (!Trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json(Trip);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTrip = async (req, res) => {
    try {
        const Trip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!Trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json(Trip);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTrip = async (req, res) => {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id);
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json({ message: "Trip deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};