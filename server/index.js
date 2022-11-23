const { conn } = require("./db");
// const seed = require("./db/seed");
require("dotenv").config();

const init = async () => {
  try {
    console.log("Starting connection...");
    process.env.SEED ? await seed() : await conn.sync({ force: true });
    conn.close();
    console.log("Completed.");
  } catch (error) {
    console.log(error);
  }
};

init();
