const { User } = require("../../../server/db");

export default async function handler(req, res) {
  const { cookies } = req;
  let token = cookies.SquashCRM;

  if (req.method === "GET") {
    try {
      const users = await User.findAll({
        attributes: ["username", "id"],
      });

      if (!users) {
        return res.status(500).json({ message: "Unable to retrieve users." });
      }
      // if (req.headers.squashcrm) {
      //   token = req.headers.squashcrm;
      // }
      // if (token === "undefined") {
      //   return res.status(401).json([]);
      // }
      return res.status(201).json(users);
    } catch (error) {
      return res.status(500).json({
        message: "An error has occurred on api/users route.",
        error,
      });
    }
  }
}
