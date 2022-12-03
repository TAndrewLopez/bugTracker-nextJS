import { User } from "../../../server/db";

export default async function handler(req, res) {
  const { cookies } = req;
  const token = cookies.SquashCRM;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized Request." });
  }

  if (req.method === "GET") {
    try {
      const user = await User.findByToken(token);

      if (!user) {
        return res.status(500).json({ message: "Unable to retrieve user." });
      }

      return res.status(201).send(user);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error has occurred on api/auth route.", error });
    }
  }
}
