"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addScore = exports.findAll = void 0;

var _score = _interopRequireDefault(require("../models/score.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Word endpoints
const findAll = async (req, res) => {
  const words = await _score.default.findAll();
  res.status(200).send({
    words
  });
};

exports.findAll = findAll;

const addScore = (req, res) => {
  const newScore = new _score.default(req.body);
  newScore.save();
  res.status(201).send({
    message: "Score successfully uploaded",
    "score": newScore
  });
};

exports.addScore = addScore;