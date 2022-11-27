const { User } = require("../../../server/db");

export default async function handler(req, res) {
  //HANDLES REQUEST FOR CREATING NEW USERS
  if (req.method === "GET") {
    try {
      const user = await User.findByToken(req.cookies.SquashCRM);
      if (!user) {
        const error = Error("User doesn't exist in database...");
        error.status = 401;
        throw error;
      }

      res.status(201).send(user);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error has occurred on api/auth route." });
    }
  }
}
