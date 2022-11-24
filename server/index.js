const { conn, User } = require("./db");

const init = async () => {
  try {
    console.log("Starting connection...");
    await conn.sync({ force: true });
    await User.create({
      firstName: "test",
      lastName: "account",
      username: "admin",
      email: "admin@squashcrm.com",
      password: "password",
      isAdmin: true,
    });
    await conn.close();
    console.log("Completed.");
  } catch (error) {
    console.log(error);
  }
};

init();
