const { Ticket } = require("../../../server/db");

export default async function handler(req, res) {
  const { cookies } = req;
  const token = cookies.SquashCRM;
  if (req.method === "GET") {
    try {
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

  if (req.method === "POST") {
    try {
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      console.log(req.body, "hello");
      const {
        name,
        details,
        steps,
        status,
        priority,
        assignee,
        version,
        userId,
      } = req.body;

      const ticket = await Ticket.create({
        name,
        details,
        steps,
        status,
        priority,
        assignee,
        version,
        userId,
      });

      res.status(200).json(ticket);
    } catch (error) {
      return res.status(500).json({ error, message: error.errors[0].message });
    }
  }
}
