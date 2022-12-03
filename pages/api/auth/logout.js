import cookie from "cookie";

export default async function (req, res) {
  try {
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
    return res.status(201).json({ message: "Success" });
  } catch (error) {
    return res.status(500).json({
      message: "An error has occurred on api/auth/logout route.",
      error,
    });
  }
}
