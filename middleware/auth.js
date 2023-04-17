const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      res.status(404).json({
        success: false,
        message: "Invalid Authentification!!(missing token)",
      });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (error, user) => {
      if (error) {
        req.status(404).json({
          success: false,
          message: "Invalid Authentification!! (invalid token)",
        });
      }
      req.user = user
      console.log(token)
      next()
    });
   
  } catch (error) {
    return res.status(500).send({
        success: false,
        message: error.message,
      });
  }
};

module.exports = auth;