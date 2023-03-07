const mongoose = require("mongoose")

const reservationSchema = new mongoose.Schema({
    room:{
        type: String,
        required: true
    },
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
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Reservations", reservationSchema);