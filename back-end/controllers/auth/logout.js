export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      maxAge: 1,
      path: "/",
      sameSite: process.env.PRODUCTION && "none",
      secure: process.env.PRODUCTION && true,
    });

    res.status(201).json(true);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "sorry there is an error" });
  }
};
