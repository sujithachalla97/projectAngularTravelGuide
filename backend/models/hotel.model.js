import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    pricePerNight: {
        type: Number,
        required: true,
    },
    amenities: [String], // example: ['WiFi', 'Pool', 'Gym']
    availableRooms: {
        type: Number,
        required: true,
    },
    ratings: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    images: [String], // Links of images
    contact: {
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        }
    }
},{timestamps: true});


const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;