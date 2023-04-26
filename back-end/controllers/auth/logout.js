export const logout = (req, res) => {
  try {
    
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.cookie("jwt", "", {
      httpOnly: true,
      maxAge: 1,
      path: '/'
    })
    // res.cookie("jwt", token, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "none",
    //   maxAge: 1,
    //   domain: process.env.SUBDOMAIN,
    //   path: "/",
    // });

    res.status(201).json(true);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "sorry there is an error" });
  }
};
