const User = require("../models/User")

const authAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      _id: req.user.id
    })
    // console.log(user)
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }
    if(user.role === 0){
        return res.status(403).json({
            success: false,
            message: "Access denied, you are not Admin!!"
        })
    }

    next()

  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = authAdmin;
