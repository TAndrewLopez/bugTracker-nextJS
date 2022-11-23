const { User } = require("../../../server/db/models");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({
        username,
        email,
        password,
      });

      if (user) {
        //TODO: SEND BACK JWT TOKEN
        res.status(201).send({ token: await user.generateToken() });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(500).json({
      message: "An error has occurred. Please resubmit to try again.",
    });
  }
}
