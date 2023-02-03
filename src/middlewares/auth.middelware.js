const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token?.replace("Bearer ", "");
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: "HS512", expiresIn: "10m" },
      (error, decoded) => {
        if (error) {
          res.status(400).json({
            error: "Invalid token",
            message: "El token no es valido, enviar un token correcto",
          });
        } else {
          console.log(decoded);
          next();
        }
      }
    );
  } else {
    res.status(400).json({
      error: "No token provider",
      message: "No se esta enviando el token de autenticacion",
    });
  }
};
module.exports = verifyToken;
