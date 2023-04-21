const express = require("express");
const ReservationsRouter = express.Router();
const Reservations = require("../models/Reservations");
const User = require("../models/User");
const Logging = require("../models/Logging");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

let myReservation;

ReservationsRouter.post("/register/reservation", auth, async (req, res) => {
  const { dayIn, dayOut, persons, meals, loggingId } = req.body;
  try {
    let daysFind = await Reservations.findOne({ dayIn });
    if (daysFind === dayIn) {
      return res.status(400).send({
        success: false,
        message: "¡Fechas no disponibles!",
      });
    }
    if (!dayIn || !dayOut || !persons || !meals || !loggingId ) {
      return res.status(400).send({
        success: false,
        message: "No ha llenado todas las características de su estadía!"
      });
    }

    myReservation = new Reservations({
      dayIn,
      dayOut,
      persons,
      meals,
      logging: loggingId,
      user: req.user.id
    });

    await User.findByIdAndUpdate(req.user.id, {
      $push: {
        reservation: myReservation._id,
      },
    });

    await Logging.findByIdAndUpdate(loggingId, {
      $push: {
        reservation: myReservation._id,
      },
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

ReservationsRouter.get("/reservations", auth, authAdmin, async (req, res) => {
  try {
    let reservas = await Reservations.find({});
    if (!reservas) {
      return res.status(404).send({
        success: false,
        message: "¡There is no reservations in DB!",
      });
    }
    return res.status(200).send({
      success: true,
      reservas,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

ReservationsRouter.get(
  "/reservations/:id",
  auth,
  authAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;
      //let reservation = await Reservations.findById(id).select("User").populate("user")
      let reservation = await Reservations.findById(id)
        .select("User Logging")
        .populate({ path: "user", select: "name surname email phone" })
        .populate({ path: "logging", select: "name title" });
      if (!reservation) {
        return res.status(404).send({
          sucess: false,
          message: "¡There is no reservation with that id",
        });
      }
      return res.status(200).send({
        success: true,
        reservation,
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  }
);

ReservationsRouter.get("/reservation/:id", auth, async (req, res) => {
  try {
    const {id} = req.params;
    let reservation = await Reservations.findById(id).populate({path:"logging", select: "name title price"})
    if(!reservation){
      return res.status(404).send({
        success: false,
        message: "Reservation not found!"
      })
    }
    return res.status(200).send({
      success: true,
      reservation
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
})

ReservationsRouter.get("/user_reservations", auth, async (req, res) => {
  try {
    let reservations = await User.findById(req.user.id).select("reservation").populate("reservation");
    if (!reservations) {
      return res.status(404).send({
        success: false,
        message: "No reservations found!",
      });
    }
    return res.status(200).send({
      success: true,
      reservations,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

ReservationsRouter.put("/reservations_modify/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { dayIn, dayOut, persons, meals } = req.body;
    let reservations = await Reservations.findByIdAndUpdate(id, {
      days,
      persons,
      meals,
    });
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "There is no reservation with that id",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Reservation Updated",
      reservations,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

ReservationsRouter.delete("/reservations_user/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(req.user.id, {
      $pull: {
        reservation: id,
      },
    });
    await Reservations.findByIdAndDelete(id);
    if (!id) {
      res.status(404).send({
        success: false,
        message: "Reservation not found!",
      });
    }
    return res.status(200).send({
      sucess: true,
      message: "Reservation deleted correctly!",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

ReservationsRouter.delete("/reservations_admin/:id",
  auth,
  authAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;
      await Reservations.findByIdAndDelete(id);
      if (!id) {
        res.status(404).send({
          success: false,
          message: "Reservation not found!",
        });
      }
      return res.status(200).send({
        sucess: true,
        message: "Reservation deleted correctly!",
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  }
);

module.exports = ReservationsRouter;
