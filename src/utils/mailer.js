//importamos nodemailer
const nodemailer = require("nodemailer");
//contraseña de aplocacion
require("dotenv").config();

//creamos nuestrro transportador
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: "elioian2014@gmail.com",
    pass: process.env.G_PASSWORD,
  },
});

module.exports = transporter;
