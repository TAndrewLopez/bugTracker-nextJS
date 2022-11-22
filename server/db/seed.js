//GET MODELS USED FOR SEED
const { conn, User } = require("./");

const seed = async () => {
  try {
    console.log("Start seeding...");
    await conn.sync({ force: true });
    console.log("Seeding complete.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
