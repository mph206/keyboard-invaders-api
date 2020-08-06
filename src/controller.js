import Word from "./word.model";
// import Player from "./Player.model";

// Word endpoints
export const findAllWords = async (req, res) => {
    const words = await Word.findAll();
    res.status(200).send({ words });
}

export const findCategory = async (req, res) => {
    const words = await Word.findCategory(req.params.category);
    res.status(200).send({ words });
}

// export const createWord = (req, res) => {
//     const newRod = new Word(req.body);
//     newWord.save();
//     res.status(201).send({
//         message: "Word successfully created",
//         "word": newWord
//     });
// }

// export const destroyWord = (req, res) => {
//     Recipe.destroy(req.params.id);
//     res.status(202).send({
//         message: "Recipe successfully deleted"
//     });
// }

// Player endpoints
// export const createPlayer = (req, res) => {
//     const newRecipe = new Player(req.body);
//     newRecipe.save();
//     res.status(201).send({
//         message: "Recipe successfully created",
//         "recipe": newRecipe
//     });
// }