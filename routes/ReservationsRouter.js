const express = require("express");
const ReservationsRouter = express.Router();
const Reservations = require("../models/Reservations")
const User = require("../models/User");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

let myReservation;

ReservationsRouter.post("/register/reservation", auth, async (req, res) =>{
    const { days, persons, meals, loggingId, paymentId } = req.body;
    try {
     let daysFind = await Reservations.findOne({days});
     if(daysFind){
        return res.status(400).send({
        success: false,
        message:
          "¡Fechas no disponibles!",
      });
     }
     if( !days|| !persons|| !meals|| !loggingId|| !paymentId ){
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
        user: req.user.id,
        logging: loggingId
     });

     await User.findByIdAndUpdate(req.user.id, {
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

ReservationsRouter.get("/reservations", auth, authAdmin, async (req, res) => {
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

ReservationsRouter.get("/reservations/:id", auth, async (req, res) => {
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

ReservationsRouter.put("/reservations_modify/:id", auth, async (req, res) => {
  try {
    const {id} = req.params;
    const {days, persons, meals} = req.body;
    let reservations = await Reservations.findByIdAndUpdate(id, {days, persons, meals})
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

ReservationsRouter.delete("/reservations/:id", auth, async (req, res) => {
  try {
    const {id} = req. params;
    await User.findByIdAndUpdate(req.user.id, {
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

ReservationsRouter.delete("/reservations/:id", auth, authAdmin, async (req, res) => {
  try {
    const {id} = req. params;
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