const conn = require("../conn");
const { Sequelize } = conn;

//AUTH IMPORTS
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const SALT_ROUNDS = 5;

const User = conn.define("user", {
  firstName: {
    type: Sequelize.STRING,
    // allowNull: true,
  },
  lastName: {
    type: Sequelize.STRING,
    // allowNull: true,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

//INSTANCE METHODS

User.prototype.generateToken = function () {
  const token = jwt.sign({ id: this.id }, process.env.JWT);
  const id = jwt.verify(token, process.env.JWT);
  console.log("what is id: ", id);
  return token;
};

module.exports = User;
