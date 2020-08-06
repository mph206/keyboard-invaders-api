"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addScore = exports.findAll = void 0;

var _scores = _interopRequireDefault(require("../models/scores.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const findAll = async (req, res) => {
  const scores = await _scores.default.findAll();
  res.status(200).send({
    scores
  });
};

exports.findAll = findAll;

const addScore = (req, res) => {
  const newScore = new _scores.default(req.body);
  newScore.saveScore();
  res.status(201).send({
    message: "Score successfully uploaded",
    "score": newScore
  });
};

exports.addScore = addScore;