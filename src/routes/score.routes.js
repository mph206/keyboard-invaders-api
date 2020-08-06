import { Router } from "express";
import * as scores from "../controllers/scores.controller";   

const router = Router();

router.get("/", scores.findAll);

router.post("/", scores.addScore);

module.exports = router;