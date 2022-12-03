const { Ticket } = require("../../../server/db");

export default async function handler(req, res) {
  const {
    query: { id },
    method,
    cookies,
    body,
  } = req;

  const token = cookies.SquashCRM;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized Request." });
  }

  if (method === "PUT") {
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
      } = body;

      const ticket = await Ticket.findByPk(id);

      if (!ticket) {
        return res.status(500).json({ message: "Unable to update ticket." });
      }

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
      return res.status(500).json({
        message: `An error has occurred on api/tickets/${id} route.`,
        error,
      });
    }
  }
  if (method === "DELETE") {
    try {
      const ticket = await Ticket.findByPk(id);

      if (!ticket) {
        return res
          .status(500)
          .json({ message: `Unable to delete ticket #${id}` });
      }

      await ticket.destroy();
      return res.status(201).json(ticket);
    } catch (error) {
      return res.status(500).json({
        message: `An error has occurred on api/tickets/${id} route.`,
        error,
      });
    }
  }
}
