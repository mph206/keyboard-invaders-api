"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebase = require("../config/firebase");

class Word {
  constructor(data) {
    this.word = data.word;
    this.category = data.category;
  }

  static async findAll() {
    const response = await _firebase.firestore.collection("words").get();
    return response.docs.map(doc => doc.data());
  }

  static async findCategory(category) {
    const response = await _firebase.firestore.collection("words").where('category', '==', category).get();
    return response.docs.map(doc => doc.data());
  }

  async save() {
    const word = { ...this
    };
    const response = await _firebase.firestore.collection("words").doc(word.word).set(word);
  }

}

exports.default = Word;