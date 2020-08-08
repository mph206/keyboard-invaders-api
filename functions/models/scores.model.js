"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _firebase = require("../config/firebase");

class Score {
  constructor(data) {
    this.id = (0, _uuid.v4)();
    this.name = data.name;
    this.wpm = data.wpm;
    this.wordsTyped = data.wordsTyped;
    this.dateCreated = new Date().toLocaleString();
  }

  static async findAll() {
    const response = await _firebase.firestore.collection("scores").get();
    return response.docs.map(doc => doc.data());
  }

  async saveScore() {
    const score = { ...this
    };
    const response = await _firebase.firestore.collection("scores").doc(score.id).set(score);
  }

}

exports.default = Score;