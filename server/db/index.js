const conn = require("./conn");

//MODELS
const User = require("./models/User");
const Ticket = require("./models/Ticket");

User.hasMany(Ticket);
Ticket.belongsTo(User);

module.exports = { conn, User, Ticket };
