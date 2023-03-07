const express = require("express");
const ReservationsRouter = express.Router();
const Reservations = require("../models/Reservations")

ReservationsRouter.post("/register/reservation", async (req, res) =>{
    const {room, days, persons, meals} = req.body;
    try {
     let daysFind = await Reservations.findOne({days});
     if(daysFind){
        return res.status(400).send({
        success: false,
        message:
          "¡Fechas no disponibles!",
      });
     }
     if(!room|| !days|| !persons|| !meals){
        return res.status(400).send({
        success: false,
        message:
          "No ha llenado todas las características de su estadía!",
      });
     }
     
     let myReservation = new Reservations({
        room,
        days,
        persons,
        meals
     });

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
    let reservation = await Reservations.findById(id);
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
module.exports = ReservationsRouter;