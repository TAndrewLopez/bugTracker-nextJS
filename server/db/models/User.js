const conn = require("../conn");
const { Sequelize } = conn;

//AUTH IMPORTS
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const SALT_ROUNDS = 5;

const User = conn.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});
