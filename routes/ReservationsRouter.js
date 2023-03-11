const express = require("express");
const ReservationsRouter = express.Router();
const Reservations = require("../models/Reservations")
const User = require("../models/User")
const Logging = require("../models/Logging")

let myReservation;

ReservationsRouter.post("/register/reservation", async (req, res) =>{
    const { days, persons, meals, userId, loggingId, paymentId } = req.body;
    try {
     let daysFind = await Reservations.findOne({days});
     if(daysFind){
        return res.status(400).send({
        success: false,
        message:
          "¡Fechas no disponibles!",
      });
     }
     if( !days|| !persons|| !meals|| !userId|| !loggingId|| !paymentId ){
        return res.status(400).send({
        success: false,
        message:
          "No ha llenado todas las características de su estadía!",
      });
     }
     
     myReservation = new Reservations({
        days,
        persons,
        meals,
        user: userId,
        logging: loggingId
     });

     await User.findByIdAndUpdate(userId, {
      $push:{
        reservation: myReservation._id
      }
     })
     await myReservation.save();

     return res.status(201).send({
        success: true,
        message: "¡Reservación creada correctamente!",
        myReservation,
      });

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message,
          });
    }
});

ReservationsRouter.get("/reservations", async (req, res) => {
  try {
    let reservas = await Reservations.find({});
    if(!reservas){
      return res.status(404).send({
        success: false,
        message: "¡There is no reservations in DB!"
      })
    }
    return res.status(200).send({
      success: true,
      reservas
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
})

ReservationsRouter.get("/reservations/:id", async (req, res) => {
  try {
    const {id} = req.params;
    //let reservation = await Reservations.findById(id).select("User").populate("user")
    let reservation = await Reservations.findById(id).select("User Logging").populate({path:"user", select:"name surname email phone"}).populate({path:"logging", select:"name title"})
    if(!reservation){
      return res.status(404).send({
        sucess: false,
        message: "¡There is no reservation with that id"
      })
    }
    return res.status(200).send({
      success: true,
      reservation
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message
    })
  }
})

ReservationsRouter.put("/reservations_modify/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const {days, persons, meals} = req.body;
    let reservations = await Reservations.findByIdAndUpdate(id,{days, persons, meals})
    if(!id){
      return res.status(404).send({
        success: false,
        message: "There is no reservation with that id"
      })
    }
    return res.status(200).send({
      success: true,
      message: "Reservation Updated",
      reservations
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
})

ReservationsRouter.delete("/reservations/:id/:userId", async (req, res) => {
  try {
    const {id, userId} = req. params;
    await User.findByIdAndUpdate(userId, {
      $pull:{
        reservation: id
      }
    })
    await Reservations.findByIdAndDelete(id);
    if(!id){
      res.status(404).send({
        success: false,
        message: "Reservation not found!"
      })
    }
    return res.status(200).send({
      sucess: true,
      message: "Reservation deleted correctly!"
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
})

module.exports = ReservationsRouter;