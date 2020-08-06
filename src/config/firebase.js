import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyuiS3Dil05i8XdMDqGcsIrDpRtuKTn7Q",
    authDomain: "keyboard-invaders-api.firebaseapp.com",
    databaseURL: "https://keyboard-invaders-api.firebaseio.com",
    projectId: "keyboard-invaders-api",
    storageBucket: "keyboard-invaders-api.appspot.com",
    messagingSenderId: "520678634523",
    appId: "1:520678634523:web:59201253e4fdbc6df034be"
};
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import * as admin from 'firebase-admin';
import serviceAccount from './env.firebase';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://keyboard-invaders-api.firebaseio.com",
});

export const firestore = admin.firestore();

export const functions = admin.functions;