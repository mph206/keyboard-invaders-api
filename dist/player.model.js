"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

// import { firestore } from '../config/firebase';
class Player {
  constructor(data) {
    this.id = data.id || (0, _uuid.v4)();
    this.name = data.name;
    this.category = data.category;
    this.area = data.area;
    this.instructions = data.instructions;
    this.thumbnail = data.thumbnail;
    this.tags = data.tags;
    this.ingredients = data.ingredients;
    this.source = data.source;
    this.dateCreated = new Date().toUTCString();
  }

  static async findAll() {
    const response = await firestore.collection("words").get();
    return response.docs.map(doc => doc.data());
  } // static async find(id) {
  //     const response = await firestore.collection("recipes").doc(id).get();
  //     return response.data();
  // }


  async save() {
    this.dateModified = new Date().toUTCString();
    const recipe = { ...this
    };
    const response = await firestore.collection("recipes").doc(recipe.id).set(recipe);
  }

  static async destroy(id) {
    const response = await firestore.collection("recipes").doc(id).delete();
  }

}

exports.default = Player;