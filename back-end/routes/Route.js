import express from "express";
import { loginPost } from "../controllers/auth.js";
import { forgotPass } from "../controllers/forgotPass.js";
import { logout } from "../controllers/logout.js";
import { resetPass } from "../controllers/resetPass.js";
import { verifyOtp } from "../controllers/verifyOtp.js";
import { verifyResetPassToken } from "../middlewares/verifyResetPassToken.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();


router.get("/verifyToken",verifyToken)

router.post("/login", loginPost);

router.post("/forgotPass",forgotPass)

router.post("/verifyOtp",verifyOtp)

router.put("/resetPass",verifyResetPassToken,resetPass)

router.delete("/logout",verifyToken,logout)



export default router;
