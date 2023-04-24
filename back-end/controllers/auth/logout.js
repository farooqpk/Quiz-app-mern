export const logout = (req, res) => {
  try {
    // res.cookie("jwt", "", {
    //     httpOnly: true,
    //     maxAge: 1,
    //     path: '/'
    //   })
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1,
      domain: process.env.SERVER_SUBDOMAIN,
      path: "/",
    });

    res.status(201).json(true);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "sorry there is an error" });
  }
};
