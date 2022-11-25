const { User } = require("../../../server/db/models");

export default async function handler(req, res) {
  //HANDLES REQUEST FOR CREATING NEW USERS
  try {
    const user = await User.findByToken(req.headers.token);
    if (!user) {
      const error = Error("User doesn't exist in database...");
      error.status = 401;
      throw error;
    }
    res.status(200).send(user);
  } catch (error) {
    console.log("auth em", error);
  }
}
