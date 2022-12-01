const conn = require("../conn");
const {
  Sequelize: { STRING, INTEGER, DECIMAL },
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
    defaultValue: "N/A",
    allowNull: false,
  },
  status: {
    type: STRING,
    defaultValue: "open",
  },
  version: {
    type: DECIMAL(10, 1),
    allowNull: false,
    defaultValue: 1,
  },
  priority: {
    type: INTEGER,
  },
  assignee: {
    type: STRING,
    defaultValue: "unassigned",
  },
  creator: {
    type: STRING,
  },
});

module.exports = Ticket;
