const { User } = require("../../../server/db/models");

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

      if (user) {
        return res.status(201).send({ token: await user.generateToken() });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return res.status(500).json({
    message: "An error has occurred. Please resubmit to try again.",
  });
}
