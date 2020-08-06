"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _words = _interopRequireDefault(require("./routes/words.routes"));

var _score = _interopRequireDefault(require("./routes/score.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = process.env.PORT || '3000';
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use('/api/words', _words.default);
app.use('/api/scores', _score.default);
app.get('/api', (req, res) => res.send({
  message: "Welcome to the keyboard invaders API!"
}));
app.get("*", (req, res) => res.status(404).send("There is no content at this route."));
app.listen(port, () => console.log(`Server is listening on port ${port}.`));
var _default = app;
exports.default = _default;