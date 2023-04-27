const mongoose = require("mongoose")

const reservationSchema = new mongoose.Schema({
    dayIn:{
        type: Date,
        required: true
    },
    dayOut:{
        type: Date,
        required: true
    },
    persons:{
        type: Number,
        required: true
    },
    meals:{
        type: String,
        enum: [ "B&B", "All-Incluted", "Half-Pention", "Full-Pention" ],
        required: true
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    logging:{
        type: mongoose.Types.ObjectId,
        ref: "Logging"
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: [ "paid", "pending", "canceled"],
        default: "pending"
    },
    paypalTransactionId: {
        type: String,
        required: false
    },
},{
    timestamps: true
})

module.exports = mongoose.model("Reservations", reservationSchema);