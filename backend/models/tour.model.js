import mongoose from "mongoose";


const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String, // example: "2 Days"
        requried: true,
    },
    availableDates: [Date],
    maxPassengers: {
        type: Number,
        required: true,
    },
    guide:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    images: [String],
},{timestamps: true});

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;