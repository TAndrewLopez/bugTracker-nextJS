const { conn, User, Ticket } = require("./db");
const { users, tickets } = require("./dummyData.json");

const init = async () => {
  try {
    console.log("Starting connection...");
    await conn.sync({ force: true });

    await Promise.all(users.map((user) => User.create(user)));
    await Promise.all(tickets.map((ticket) => Ticket.create(ticket)));

    await conn.close();
    console.log("Completed.");
  } catch (error) {
    console.log(error);
  }
};

init();
