import jwt from "jsonwebtoken";

export const verifyApiRoutes = (req, res, next) => {
  if (req.headers.cookie) {
    const cookies = req.headers.cookie.split(";");
    let token;
    cookies.forEach((cookie) => {
      if (cookie.includes("jwt")) {
        token = cookie.split("=")[1];
      }
    });

    if (token) {
      jwt.verify(token, process.env.SECRET, (err, tokenDecoded) => {
        if (err) {
          console.log(err);
          res.status(403).json({
            success: false,
            message: "invalid token, try again!",
          });
        } else {
          req.adminId = tokenDecoded.adminId; // decoded admin id from the token and attach with req object to access from every route
          next();
        }
      });
    } else {
      console.log("no token");
      res.status(403).json({
        success: false,
        message: "there is an issue with your credentials!",
      });
    }
  } else {
    res.status(403).json({
      success: false,
      message: "there is an issue with your credentials!",
    });
  }
};
