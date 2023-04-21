import express from "express";
import { loginPost } from "../controllers/auth/login.js";
import { forgotPass } from "../controllers/auth/forgotPass.js";
import { logout } from "../controllers/auth/logout.js";
import { resetPass } from "../controllers/auth/resetPass.js";
import { verifyOtp } from "../controllers/auth/verifyOtp.js";
import { verifyResetPassToken } from "../middlewares/verifyResetPassToken.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { createQuiz } from "../controllers/quiz/createQuiz.js";
import { verifyApiRoutes } from "../middlewares/verifyApiRoutes.js";
import { getQuizData } from "../controllers/quiz/getQuizData.js";
import { deleteQuiz } from "../controllers/quiz/deleteQuiz.js";
import { changeEmail } from "../controllers/auth/changeEmail.js";
import { changePass } from "../controllers/auth/changePass.js";


const router = express.Router();


router.get("/verifyToken",verifyToken)

router.post("/login", loginPost);

router.post("/forgotPass",forgotPass)

router.post("/verifyOtp",verifyOtp)

router.put("/resetPass",verifyResetPassToken,resetPass)

router.delete("/logout",verifyApiRoutes,logout)

router.post("/createQuiz",verifyApiRoutes,createQuiz)

router.get("/getQuizData",getQuizData)

router.delete("/deleteQuiz/:quizId",verifyApiRoutes,deleteQuiz)

router.put("/changeEmail",verifyApiRoutes,changeEmail)

router.put("/changePass",verifyApiRoutes,changePass)


export default router;
