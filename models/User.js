const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlenght: 2,
        maxlenght: 15
    },
    surname:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 20
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlenght: 6,
    },
    phone:{
        type: Number,
        required: true
    },
    city:{
        type: String,
    },
    country:{
        type: String
    },
    reservation:[{
        type: mongoose.Types.ObjectId,
        ref: "Reservations"
    }],
    role:{
        type: Number,
        default: 0
        // 0 = user
        // 1 = admin
    },
},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)