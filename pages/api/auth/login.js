import { User } from "../../../server/db";
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;
      const token = await User.authenticate({ username, password });

      if (!token) {
        return res.status(401).json({ message: "Unauthorized Request." });
      }

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("SquashCRM", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
        })
      );

      return res.status(201).json({ message: "Success" });
    } catch (error) {
      return res.status(500).json({
        message: "An error has occurred on api/auth/login route.",
        error,
      });
    }
  }
}
