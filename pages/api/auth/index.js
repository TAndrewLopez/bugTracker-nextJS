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
        res.status(201).send({ token: await user.generateToken() });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
    return;
  }

  if (req.method === "GET") {
    res.status(201).send(await User.findByToken(req.headers.authorization));
    try {
    } catch (error) {
      res.status(500).json({ error });
    }
    return;
  }

  return res.status(500).json({
    message: "An error has occurred. Please resubmit to try again.",
  });
}
