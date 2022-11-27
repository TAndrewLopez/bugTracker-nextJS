const { User } = require("../../../server/db");
import cookie from "cookie";

export default async function handler(req, res) {
  //HANDLES REQUEST FOR CREATING NEW USERS
  if (req.method === "POST") {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({
        username,
        email,
        password,
      });

      if (!user) {
        res.status(401).json({
          message:
            "An error has occurred during sign up. Please resubmit to try again.",
        });
      }
      const token = await user.generateToken();

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

      return res.status(201).send({ token });
    } catch (error) {
      return res.status(500).send({
        message: error.errors[0].message,
        error,
      });
    }
  }
}
