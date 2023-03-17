import express from "express";
import { loginPost } from "../controllers/auth.js";
import { forgotPass } from "../controllers/forgotPass.js";
const router = express.Router();


router.post("/login", loginPost);

router.post("/forgotPass",forgotPass)


export default router;
