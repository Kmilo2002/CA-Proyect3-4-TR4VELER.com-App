const mongoose = require("mongoose");

const loggingSchema = new mongoose.Schema({
    location:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    map:{
        type: String,
        required: true
    },
    reservation:[{
        type: mongoose.Types.ObjectId,
        ref: "Reservations"
    }],
},{
    timestamps: true
})

module.exports = mongoose.model("Logging", loggingSchema);