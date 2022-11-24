const conn = require("../conn");
// const { Sequelize } = conn;
const {
  Sequelize: { STRING, BOOLEAN },
} = conn;
// const { STRING, BOOLEAN } = Sequelize;

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

//PROTOTYPE METHODS
User.prototype.generateToken = function () {
  const token = jwt.sign(
    { id: this.id, username: this.username },
    process.env.JWT
  );
  return token;
};

User.prototype.correctPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

//INSTANCE METHODS
User.findByToken = async (token) => {
  try {
    const user = await User.findByPk(token);

    if (!user) {
      const error = Error(
        "Cannot find user with provided token. Bad Credentials."
      );
      error.status = 401;
      throw error;
    }
    return user;
  } catch (err) {
    const error = Error(
      "Cannot find user with provided token. Bad Credentials."
    );
    error.status = 401;
    throw error;
  }
};

User.authenticate = async ({ username, password }) => {
  const user = await User.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect Username/Password Combination.");
    error.status = 401;
    throw error;
  }
  return user.generateToken();
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
