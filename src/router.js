import { Router } from "express";
import * as recipes from "./controller";   

const router = Router();

router.get("/", word.findAll);

// router.get("/:id", recipes.find);

router.post("/", recipes.create);

// router.delete("/:id", recipes.destroy);

module.exports = router;