const express = require("express");
const ReservationsRouter = express.Router();
const Reservations = require("../models/Reservations");
const User = require("../models/User");
const Logging = require("../models/Logging");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

let myReservation;

ReservationsRouter.post("/register/reservation", auth, async (req, res) => {
  const { dayIn, dayOut, persons, meals, logging } = req.body;
  const userFind = await User.findById(req.user.id)
  try {
    let findReservation = await Reservations.find({ dayIn });
    if (findReservation.length > 0) {
      return res.status(400).send({
        success: false,
        message: "¡Fechas no disponibles!",
      });
    }

    if (!dayIn || !dayOut || !persons || !meals || !logging ) {
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
      logging,
      user: userFind
    });

    const loggingObj = await Logging.findById(logging); // Obtenemos el objeto de alojamiento correspondiente a la reserva
    const oneDay = 24 * 60 * 60 * 1000; // Horas * minutos * segundos * milisegundos
    const diffInDays = Math.round(Math.abs((new Date(dayOut) - new Date(dayIn)) / oneDay)); // Calculamos la diferencia en días entre las fechas de entrada y salida
    const totalPrice = diffInDays * loggingObj.price; // Multiplicamos la cantidad de días por el precio diario del alojamiento para obtener el precio total
  
    myReservation.totalPrice = totalPrice; // Asignamos el precio total a la propiedad totalPrice de la reserva

    await myReservation.save();

    await User.findByIdAndUpdate(req.user.id, {
      $push: {
        reservation: myReservation._id,
      },
    });

    await Logging.findByIdAndUpdate(logging, {
      $push: {
        reservation: myReservation._id,
      },
    });

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
