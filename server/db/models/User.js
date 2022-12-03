const conn = require("../conn");
const {
  Sequelize: { STRING, BOOLEAN },
} = conn;

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
    validate: {
      isEmail: true,
    },
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
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, //EXPIRES IN 30 DAYS
      id: this.id,
      username: this.username,
      isAdmin: this.isAdmin,
    },
    process.env.JWT
  );
  return token;
};

User.prototype.correctPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

//INSTANCE METHODS
User.authenticate = async ({ username, password }) => {
  const user = await User.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect Username/Password Combination.");
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

//TAKES A TOKEN, VERIFIES IT WITH JWT. USES ID TO GET USER FROM DB
User.findByToken = async (token) => {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);

    //FOR WHATEVER REASON IF WE RECEIVE A TOKEN AND I.D. BUT IT'S NOT IN THE DATABASE...
    if (!user) {
      const error = Error("User doesn't exist in database...");
      error.status = 401;
      throw error;
    }

    return user;
  } catch (err) {
    const error = Error(
      "Cannot find user with provided information. Bad Credentials."
    );
    error.status = 401;
    throw error;
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
