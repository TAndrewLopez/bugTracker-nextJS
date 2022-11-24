const { User } = require("../../../server/db/models");

export default async function handler(req, res) {
  //HANDLES REQUEST FOR CREATING NEW USERS
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;
      return res.send({
        token: await User.authenticate({ username, password }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return res.status(500).json({
    message: "An error has occurred. Please resubmit to try again.",
  });
}
