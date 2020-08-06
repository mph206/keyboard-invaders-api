"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.firestore = void 0;

var firebase = _interopRequireWildcard(require("firebase/app"));

require("firebase/firestore");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const firebaseConfig = {
  apiKey: "AIzaSyAyuiS3Dil05i8XdMDqGcsIrDpRtuKTn7Q",
  authDomain: "keyboard-invaders-api.firebaseapp.com",
  databaseURL: "https://keyboard-invaders-api.firebaseio.com",
  projectId: "keyboard-invaders-api",
  storageBucket: "keyboard-invaders-api.appspot.com",
  messagingSenderId: "520678634523",
  appId: "1:520678634523:web:59201253e4fdbc6df034be"
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
exports.firestore = firestore;
var _default = firebase;
exports.default = _default;