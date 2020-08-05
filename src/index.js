import express from "express";
import logger from "morgan";

import Routes from "./router";

const app = express();
const port = process.env.PORT || '3000';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', Routes);
// app.get('/api', (req, res) => res.send({ message: "Welcome to the keyboard invaders API!" }));
app.get("*", (req, res) => res.status(404).send("There is no content at this route."));

app.listen(port, () => console.log(`Server is listening on port ${port}.`));

export default app;
