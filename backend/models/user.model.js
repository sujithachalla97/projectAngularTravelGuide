import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"],
    },
    role: {
        type: String,
        required: true,
        enum: ['User','Agent','HotelAdmin','Admin'],
        default: 'User',
    },
    password: {
        type: String,
        required: true,
    },
    bookedTrips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
        default: [],
    }],
    bookedHotels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        default: [],
    }],
}, {timestamps: true});


const User = mongoose.model("User", userSchema);

export default User;