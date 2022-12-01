const { User } = require("../../../server/db");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { cookies } = req;
      let token = cookies.SquashCRM;
      const users = await User.findAll({
        attributes: ["username"],
      });
      if (req.headers.squashcrm) {
        token = req.headers.squashcrm;
      }
      if (token === "undefined") {
        return res.status(401).json([]);
      }
      return res.status(201).json(users);
    } catch (error) {
      console.error(error);
    }
  }
}
