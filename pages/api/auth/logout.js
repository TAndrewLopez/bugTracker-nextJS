import cookie from "cookie";

export default async function (req, res) {
  const { cookies } = req;
  const jwt = cookies.SquashCRM;

  if (!jwt) {
    return res.status(401).json({ message: "User wasn't logged in" });
  }
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("SquashCRM", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    })
  );
}
