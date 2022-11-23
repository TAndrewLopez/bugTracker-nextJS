const { conn } = require("./db");

const init = async () => {
  try {
    console.log("Starting connection...");
    await conn.sync({ force: true });
    conn.close();
    console.log("Completed.");
  } catch (error) {
    console.log(error);
  }
};

init();
