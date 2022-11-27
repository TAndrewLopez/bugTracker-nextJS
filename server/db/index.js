const conn = require("./conn");

//MODELS
const User = require("./models/User");
const Ticket = require("./models/Ticket");

module.exports = { conn, User, Ticket };
