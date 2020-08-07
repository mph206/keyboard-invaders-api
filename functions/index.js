import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import express from "express";
import logger from "morgan";

import wordRoutes from "./routes/words.routes";
import scoreRoutes from "./routes/score.routes";

admin.initializeApp();
const db = admin.firestore();

const app = express();
const port = process.env.PORT || '3000';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/words', wordRoutes);
app.use('/api/scores', scoreRoutes);
app.get('/api', (req, res) => res.send({ message: "Welcome to the keyboard invaders API!" }));
app.get("*", (req, res) => res.status(404).send("There is no content at this route."));

app.listen(port, () => console.log(`Server is listening on port ${port}.`));

export default app;
// webApi is your functions name, and you will pass main as 
// a parameter
export const webApi = functions.https.onRequest(app);