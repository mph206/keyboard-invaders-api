import Word from "./word.model";
import Player from "./Player.model";

// Word endpoints
export const findAll = async (req, res) => {
    const words = await Word.findAll();
    res.status(200).send({ words });
}

// export const find = async (req, res) => {
//     const recipe = await Recipe.find(req.params.id);
//     res.status(200).send({ recipe });
// }

export const create = (req, res) => {
    const newRecipe = new Recipe(req.body);
    newRecipe.save();
    res.status(201).send({
        message: "Recipe successfully created",
        "recipe": newRecipe
    });
}

export const destroy = (req, res) => {
    Recipe.destroy(req.params.id);
    res.status(202).send({
        message: "Recipe successfully deleted"
    });
}

// Player endpoints
export const create = (req, res) => {
    const newRecipe = new Player(req.body);
    newRecipe.save();
    res.status(201).send({
        message: "Recipe successfully created",
        "recipe": newRecipe
    });
}