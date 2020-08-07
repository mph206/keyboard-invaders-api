import Score from "../models/scores.model";

export const findAll = async (req, res) => {
    const scores = await Score.findAll();
    res.status(200).send({ scores });
}

export const addScore = (req, res) => {
    const newScore = new Score(req.body);
    newScore.saveScore();
    res.status(201).send({
        message: "Score successfully uploaded",
        "score": newScore
    });
}