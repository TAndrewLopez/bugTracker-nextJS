const conn = require("../conn");
const {
  Sequelize: { STRING, INTEGER },
} = conn;

const Ticket = conn.define("ticket", {
  name: {
    type: STRING,
    allowNull: false,
  },
  details: {
    type: STRING,
    allowNull: false,
  },
  steps: {
    type: STRING,
    allowNull: false,
  },
  version: {
    type: INTEGER,
    allowNull: false,
  },
  priority: {
    type: INTEGER,
  },
});

module.exports = Ticket;
