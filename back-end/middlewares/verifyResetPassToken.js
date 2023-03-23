import jwt from "jsonwebtoken";


export const verifyResetPassToken = (req, res, next) => {
    const cookies = req.headers.cookie.split(";");
  
    let resetToken;
    cookies.forEach((cookie) => {
      if (cookie.includes("ResetToken")) {
        resetToken = cookie.split("=")[1];
      }
    });
  
    if (resetToken) {
      jwt.verify(resetToken, process.env.SECRET, (err, tokenDecoded) => {
        if (err) {
          console.log(err);
          res.status(403).json({
            success: false,
            message: "there is an issue,please try again!",
          });
          return false;
        } else {
          next();
        }
      });
    } else {
      res.status(403).json({
        success: false,
        message: "there is an issue with your authentication!",
      });
      return false;
    }
  };
  