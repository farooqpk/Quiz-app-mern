import express from "express";
import { loginPost } from "../controllers/adminController.js";
const router = express.Router();

router.post("/login", loginPost);

export default router;
