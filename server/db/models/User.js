const conn = require("../conn");
const { Sequelize } = conn;
const { STRING, BOOLEAN } = Sequelize;

//AUTH IMPORTS
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const SALT_ROUNDS = 5;

const User = conn.define("user", {
  firstName: {
    type: STRING,
  },
  lastName: {
    type: STRING,
  },
  username: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

//INSTANCE METHODS
User.prototype.generateToken = function () {
  const token = jwt.sign({ id: this.id }, process.env.JWT);
  return token;
};

User.findByToken = async (token) => {
  try {
    const user = await User.findByPk(token);

    if (!user) {
      const error = Error("Bad Credentials.");
      error.status = 401;
      throw error;
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};

//HOOKS
User.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
  user.password = hashedPassword;
});

User.beforeUpdate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
  user.password = hashedPassword;
});

module.exports = User;
