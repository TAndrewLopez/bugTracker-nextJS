const { User } = require("../../../server/db/models");

export default async function handler(req, res) {
  //HANDLES REQUEST FOR CREATING NEW USERS
  if (req.method === "POST") {
    try {
      res.send({ token: await User.authenticate(req.body) });
    } catch (error) {}
  }
  //HANDLES REQUEST FOR
  if (req.method === "GET") {
    console.dir(req.headers);
    // res.status(201).send(await User.findByToken(req.headers.authorization));
    return;
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

/*
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
*/
