"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWord = exports.findCategory = exports.findAllWords = void 0;

var _words = _interopRequireDefault(require("../models/words.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const findAllWords = async (req, res) => {
  const words = await _words.default.findAll();
  res.status(200).send({
    words
  });
};

exports.findAllWords = findAllWords;

const findCategory = async (req, res) => {
  const words = await _words.default.findCategory(req.params.category);
  res.status(200).send({
    words
  });
};

exports.findCategory = findCategory;

const createWord = (req, res) => {
  const newWord = new _words.default(req.body);
  newWord.save();
  res.status(201).send({
    message: "Word successfully created",
    "word": newWord
  });
};

exports.createWord = createWord;