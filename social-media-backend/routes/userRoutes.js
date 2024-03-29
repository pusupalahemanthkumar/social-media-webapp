// Importing required files and packages here
import express from "express";

import { authUser, registerUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);


export default router;