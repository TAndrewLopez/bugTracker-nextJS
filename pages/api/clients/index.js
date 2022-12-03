export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      return res.status(201).json({ message: "Success" });
    } catch (error) {
      return res.status(500).json({
        message: "An error has occurred on api/clients route.",
        error,
      });
    }
  }
}
