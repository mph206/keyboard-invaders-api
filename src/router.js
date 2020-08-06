import { Router } from "express";
import * as controller from "./controller";   

const router = Router();

router.get("/", controller.findAllWords);

router.get("/:category", controller.findCategory);

// router.post("/", controller.createWord);

// router.delete("/:id", recipes.destroy);

module.exports = router;