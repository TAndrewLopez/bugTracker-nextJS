const { Ticket } = require("../../../server/db");

export default async function handler(req, res) {
  const { cookies } = req;
  const token = cookies.SquashCRM;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized Request." });
  }

  if (req.method === "GET") {
    try {
      const tickets = await Ticket.findAll({});
      if (!tickets) {
        return res.status(500).json({ message: "Unable to retrieve tickets." });
      }
      tickets.sort((a, b) => a.id - b.id);
      return res.status(201).json(tickets);
    } catch (error) {
      return res.status(500).json({
        message: "An error has occurred on api/tickets route.",
        error,
      });
    }
  }

  if (req.method === "POST") {
    try {
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

      if (!ticket) {
        return res.status(500).json({ message: "Unable to create ticket." });
      }

      return res.status(201).json(ticket);
    } catch (error) {
      return res.status(500).json({
        message: "An error has occurred on api/tickets route.",
        error,
      });
    }
  }
}
