const mongoose = require("mongoose")

const reservationSchema = new mongoose.Schema({
    days:{
        type: Number,
        required: true
    },
    persons:{
        type: Number,
        required: true
    },
    meals:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    logging:{
        type: mongoose.Types.ObjectId,
        ref: "Logging"
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Reservations", reservationSchema);