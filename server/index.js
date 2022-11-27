const { conn, User } = require("./db");

const init = async () => {
  try {
    console.log("Starting connection...");
    await conn.sync({ force: true });
    await User.create({
      firstName: "Squash",
      lastName: "Creator",
      username: "admin",
      email: "admin@squashcrm.com",
      password: "password",
      isAdmin: true,
    });
    await User.create({
      firstName: "John",
      lastName: "Doe",
      username: "employee",
      email: "user@squashcrm.com",
      password: "password",
      isAdmin: false,
    });

    await conn.close();
    console.log("Completed.");
  } catch (error) {
    console.log(error);
  }
};

init();
