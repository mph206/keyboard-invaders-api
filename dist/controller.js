"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWord = exports.findCategory = exports.findAllWords = void 0;

var _word = _interopRequireDefault(require("./word.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Player from "./Player.model";
// Word endpoints
const findAllWords = async (req, res) => {
  const words = await _word.default.findAll();
  res.status(200).send({
    words
  });
};

exports.findAllWords = findAllWords;

const findCategory = async (req, res) => {
  const words = await _word.default.findCategory(req.params.category);
  res.status(200).send({
    words
  });
};

exports.findCategory = findCategory;

const createWord = (req, res) => {
  const newWord = new _word.default(req.body);
  newWord.save();
  res.status(201).send({
    message: "Word successfully created",
    "word": newWord
  });
}; // export const createWord = (req, res) => {
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


exports.createWord = createWord;