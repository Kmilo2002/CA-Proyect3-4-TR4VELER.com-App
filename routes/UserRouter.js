const express = require("express");
const UserRouter = express.Router();
const User = require("../models/User");
const Reservations = require("../models/Reservations")
const UserLog_in = require("../models/Log_in");

let myUser;

UserRouter.post("/register/user", async (req, res) => {
  const { name, surname, email, password, phone, city, country } = req.body;
  try {
    let userFind = await User.findOne({ email });
    if (userFind) {
      return res.status(400).send({
        success: false,
        message:
          "¡Un usuario ha usado esta dirección de correo para registrarse!",
      });
    }
    if (
      !name ||
      !surname ||
      !email ||
      !password ||
      !phone ||
      !city ||
      !country
    ) {
      return res.status(400).send({
        success: false,
        message: "¡No has rellando todos los datos necesarios!",
      });
    }
    if (name.lenght < 2) {
      return res.status(400).send({
        success: false,
        message: "¡Nombre demasiado corto!",
      });
    }
    if (name.lenght > 20) {
      return res.status(400).send({
        success: false,
        message: "¡Nombre demasiado largo!",
      });
    }
    if (password.lenght < 6) {
      return res.status(400).send({
        success: false,
        message: "¡Contraseña demasiado corta!",
      });
    }

    myUser = new User({
      name,
      surname,
      email,
      password,
      phone,
      city,
      country,
    });

    await myUser.save();
    return res.status(201).send({
      success: true,
      message: "¡Usuario creado correctamente!",
      myUser,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

UserRouter.post("/log_in", async (req, res) => {
  const { name, password } = req.body;
  try {
    let userFind = await UserLog_in.findOne({password})
    if(userFind){
      return res.status(202).send({
        success: true,
        message: "Welcome!"
      })
    }
    if(!userFind){
      return res.status(404).send({
        success: false,
        message: "Wrong password! Try again!"
      })
    }

  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
})

UserRouter.get("/users", async (req, res) => {
  try {
    // let usuarios = await User.find({}).select("name surname email") -> Esto es para buscar datos en específicos!!
    let usuarios = await User.find({});
    if (!usuarios) {
      return res.status(404).send({
        success: false,
        message: "¡There is no users in DB!",
      });
    }
    return res.status(200).send({
      success: true,
      usuarios,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

UserRouter.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //let user = await User.findById(id).select("Reservations").populate("reservation")
    //let user = await User.findById(id).select("reservation").populate({path:"reservation", select:"room days meals"})
    let user = await User.findById(id)
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "¡There is no user with that id!",
      });
    }
    return res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

UserRouter.put("/users_modify/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const {password, email, phone, city, country} = req.body;
    let user = await User.findByIdAndUpdate(id,{password, email, phone, city, country})
    if(!id){
      return res.status(404).send({
        success: false,
        message: "There is no user with that Id"
      })
    }
    return res.status(200).send({
      succes: true,
      message: "User Updated!",
      user
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
})

UserRouter.delete("/users/:id/:reservationId", async (req, res) => {
  try {
    const {id, reservationId} = req.params;
    await Reservations.findByIdAnddelete(reservationId, {
      $pull:{
        registration: _id
      }
    })
    await User.findByIdAndDelete(id);
    if(!id){
      return res.status(404).send({
        success: false,
        message:"User not found!"
      })
    }
    return res.status(200).send({
      success: true,
      message: "User deleted correctly!"
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
})


module.exports = UserRouter;
