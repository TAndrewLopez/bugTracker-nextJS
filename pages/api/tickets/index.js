const { Ticket } = require("../../../server/db");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { cookies } = req;
      const token = cookies.SquashCRM;

      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const tickets = await Ticket.findAll({});
      return res.status(200).json({ message: "Success", tickets });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error has occurred on api/tickets route." });
    }
  }
}
