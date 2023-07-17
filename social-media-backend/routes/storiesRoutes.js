// Importing required files and packages here
import express from "express";

import { getStories } from "../controllers/storiesController.js";

const router = express.Router();

router.get("/", getStories);


export default router;