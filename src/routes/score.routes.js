import { Router } from "express";
import * as scores from "./controllers/score.controller";   

const router = Router();

router.get("/", scores.findAllWords);

// router.get("/:category", scores.findCategory);

router.post("/", scores.uploadScore);

// router.delete("/:id", recipes.destroy);

module.exports = router;