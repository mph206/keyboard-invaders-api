import * as admin from 'firebase-admin';
import serviceAccount from './env.firebase';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://keyboard-invaders-api.firebaseio.com",
});

export const firestore = admin.firestore();

export const functions = admin.functions;