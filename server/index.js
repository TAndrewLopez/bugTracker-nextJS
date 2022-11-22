const { conn } = require("./db");
// const seed = require("./db/seed");

const init = async () => {
  try {
    console.log("Starting connection...");
    process.env.SEED ? await seed() : await conn.sync({ force: true });
    console.log("Completed.");
  } catch (error) {
    console.log(error);
  }
};

init();
