const { Ticket } = require("../../../server/db");

export default async function handler(req, res) {
  const {
    query: { id },
    method,
    cookies,
    body,
  } = req;

  const token = cookies.SquashCRM;

  if (method === "PUT") {
    try {
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const {
        name,
        details,
        steps,
        status,
        priority,
        assignee,
        version,
        userId,
      } = body;
      const ticket = await Ticket.findByPk(id);
      await ticket.update({
        name,
        details,
        steps,
        status,
        priority,
        assignee,
        version,
        userId,
      });
      return res.status(201).json(ticket);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `An error occurred at api/tickets/${id}` });
    }
  }
  if (method === "DELETE") {
    try {
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const ticket = await Ticket.findByPk(id);

      if (!ticket) {
        return res
          .status(500)
          .json({ message: `An error occurred at api/tickets/${id}` });
      }

      await ticket.destroy();
      return res.status(201).json(ticket);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `An error occurred at api/tickets/${id}` });
    }
  }
}
