import { Router } from "express";
import * as words from "../controllers/words.controller";   

const router = Router();

router.get("/", words.findAllWords);

router.get("/:category", words.findCategory);

router.post("/", words.createWord);

module.exports = router;