import { User } from "../../../server/db";

export default async function handler(req, res) {
  //HANDLES REQUEST FOR CREATING NEW USERS
  if (req.method === "GET") {
    try {
      const { cookies } = req;
      const token = cookies.SquashCRM;

      if (!token) {
        res.status(401).json({ message: "Invalid Token" });
      }

      const user = await User.findByToken(token);
      if (!user) {
        const error = Error("User doesn't exist in database...");
        error.status = 401;
        throw error;
      }

      return res.status(200).send(user);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error has occurred on api/auth route." });
    }
  }
}
