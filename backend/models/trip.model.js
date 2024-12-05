import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
}, { timestamps: true });

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;